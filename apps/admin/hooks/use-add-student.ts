import { createStudentAction } from "@/action/school";
import {
  CreateStudentData,
  createStudentSchema,
  CreateTeacherData,
} from "@/lib/schema";
import { useReactHookForm, zodResolver } from "@workspace/ui/lib/client";
import { toast } from "@workspace/ui/lib/server";

export default function useAddStudent() {
  const defaultValues = {
    first_name: "",
    last_name: "",
    phoneNumber: "",
    contactEmail: "",
    class_id: "",
    stream: "",
  };

  const {
    register,
    formState,
    watch,
    setValue,
    handleSubmit,
    reset,
    getValues,
  } = useReactHookForm<CreateStudentData>({
    defaultValues,
    resolver: zodResolver(createStudentSchema),
  });

  const onSubmit = async (values: CreateStudentData) => {
    const [response, error] = await createStudentAction(values);
    if (error) {
      const errorMessage =
        error.message ||
        error.errors?.[0]?.errorMessage ||
        "Creating student failed. Please try again.";
      toast.error(errorMessage);
    } else if (response) {
      reset();
      toast.success(response.message);
      window.location.reload();
    }
  };

  return {
    register,
    formState,
    watch,
    setValue,
    handleSubmit,
    reset,
    getValues,
    onSubmit,
  };
}
