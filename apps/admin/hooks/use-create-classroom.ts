import { createClassroomAction } from "@/action/classroom";
import { CreateClassData, createClassSchema } from "@/lib/schema";
import { useReactHookForm, zodResolver } from "@workspace/ui/lib/client";
import { toast } from "@workspace/ui/lib/server";
import { useState } from "react";

export default function useCreateClassroom() {
  const [open, setOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const defaultValues = {
    name: "",
    department: "",
    level: "",
    classTeacher: "",
  };

  const { register, formState, watch, setValue, handleSubmit, reset } =
    useReactHookForm<CreateClassData>({
      defaultValues,
      resolver: zodResolver(createClassSchema),
    });

  const onSubmit = async (values: CreateClassData) => {
    const [response, error] = await createClassroomAction(values);
    if (error) {
      const errorMessage =
        error.message ||
        error.errors?.[0]?.errorMessage ||
        "Creating classroom failed. Please try again.";
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
