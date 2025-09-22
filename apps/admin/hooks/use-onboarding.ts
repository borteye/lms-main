import { onboardSchoolAction } from "@/action/school";
import { SchoolOnboardingData } from "@/lib/schema";
import { toast } from "@workspace/ui/lib/server";
import { useState } from "react";

export default function useOnboarding() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (
    values: SchoolOnboardingData | FormData,
    step: number,
    token: string
  ) => {
    setIsLoading(true);

    try {
      const schoolId = localStorage.getItem("schoolId");
      let data;
      if (values instanceof FormData) {
        data = values;
        if (schoolId) data.append("schoolId", schoolId);
      } else {
        data = schoolId ? { ...values, schoolId: schoolId } : values;
      }
      const [response, error] = await onboardSchoolAction(data, step, token);
      setIsLoading(false);

      if (error) {
        console.error("Onboarding error:", error);
        toast.error(
          error.message ||
            error.errors?.[0]?.errorMessage ||
            "An error occurred during onboarding."
        );
        return;
      } else if (response) {
        toast.success(
          response.message || "Onboarding step completed successfully."
        );
        if (!schoolId) {
          localStorage.setItem(
            "schoolId",
            JSON.stringify(response?.data?.metaData?.schoolId)
          );
        }
        if (step === 4) {
          sessionStorage.setItem(
            "user",
            JSON.stringify(response?.data?.metaData)
          );
          window.location.href = "/dashboard";
        }
        return true;
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };

  return { onSubmit, isLoading };
}
