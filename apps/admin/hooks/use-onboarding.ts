import { createSchoolOnboardingFormData } from "@/lib/helper";
import { SchoolOnboardingData } from "@workspace/common/lib/admin-onboarding-schema";
import { toast } from "@workspace/ui/lib/server";
import { useState } from "react";

export default function useOnboarding() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (values: SchoolOnboardingData) => {
    setIsLoading(true);

    try {
      const formData = createSchoolOnboardingFormData(values);
      console.log("formData", formData);
    } catch (error) {
      setIsLoading(false);
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };

  return { onSubmit, isLoading };
}
