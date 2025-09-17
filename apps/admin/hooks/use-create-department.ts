import { createDepartmentAction } from "@/action/department";
import { CreateDepartmentData, createDepartmentSchema } from "@/lib/schema";
import { useReactHookForm, zodResolver } from "@workspace/ui/lib/client";
import { toast } from "@workspace/ui/lib/server";
import { useState } from "react";

export default function useCreateDepartment() {
  const [open, setOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const defaultValues = {
    name: "",
    departmentCode: "",
    headOfDepartment: "",
  };

  const { register, formState, watch, setValue, handleSubmit, reset } =
    useReactHookForm<CreateDepartmentData>({
      defaultValues,
      resolver: zodResolver(createDepartmentSchema),
    });

  const onSubmit = async (values: CreateDepartmentData) => {
    const [response, error] = await createDepartmentAction(values);
    if (error) {
      const errorMessage =
        error.message ||
        error.errors?.[0]?.errorMessage ||
        "Creating department failed. Please try again.";
      toast.error(errorMessage);
    } else if (response) {
      console.log(response);
      reset();
      setIsDialogOpen(false);
      toast.success(response.message);
    }
  };

  return {
    open,
    setOpen,
    isDialogOpen,
    setIsDialogOpen,
    register,
    formState,
    watch,
    setValue,
    handleSubmit,
    onSubmit,
    reset,
  };
}
