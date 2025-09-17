import {
  CreateStudentData,
  createStudentSchema,
  CreateTeacherData,
} from "@/lib/schema";
import { useReactHookForm, zodResolver } from "@workspace/ui/lib/client";

export default function useAddStudent() {
  const defaultValues = {
    first_name: "",
    last_name: "",
    phoneNumber: "",
    contactEmail: "",
    class: "",
    level: "",
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
    onSubmit,
  };
}
