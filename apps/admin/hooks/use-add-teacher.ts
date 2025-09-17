import { CreateTeacherData, createTeacherSchema } from "@/lib/schema";
import { useReactHookForm, zodResolver } from "@workspace/ui/lib/client";
import { useState } from "react";

export default function useAddTeacher() {
  const [qualifications, setQualifications] = useState("");

  const defaultValues = {
    first_name: "",
    last_name: "",
    phoneNumber: "",
    contactEmail: "",
    department: "",
    qualifications: [],
  };

  const {
    register,
    formState,
    watch,
    setValue,
    handleSubmit,
    reset,
    getValues,
  } = useReactHookForm<CreateTeacherData>({
    defaultValues,
    resolver: zodResolver(createTeacherSchema),
  });

  const addQualification = () => {
    if (qualifications.trim()) {
      const currentQualifications = getValues("qualifications");
      if (!currentQualifications?.includes(qualifications.trim())) {
        setValue("qualifications", [
          ...((currentQualifications ?? []) as string[]),
          qualifications.trim(),
        ]);
        setQualifications("");
      }
    }
  };

  const removeQualification = (index: number) => {
    const currentQualifications = getValues("qualifications");
    setValue(
      "qualifications",
      ((currentQualifications ?? []) as string[]).filter((_, i) => i !== index)
    );
  };

  const onSubmit = async (values: CreateTeacherData) => {
    console.log("values", values);
  };

  return {
    register,
    formState,
    watch,
    setValue,
    handleSubmit,
    reset,
    getValues,
    qualifications,
    setQualifications,
    addQualification,
    removeQualification,
    onSubmit,
  };
}
