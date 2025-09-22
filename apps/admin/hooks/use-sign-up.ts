import { signUpAction } from "@/action/auth";
import { SignUpData, signUpSchema } from "@workspace/common/lib/auth-schema";
import { useReactHookForm, zodResolver } from "@workspace/ui/lib/client";
import { toast } from "@workspace/ui/lib/server";
import { useState } from "react";

export default function useSignUp() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    passwordConfirmation: "",
  };

  const form = useReactHookForm<SignUpData>({
    defaultValues,
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (values: SignUpData) => {
    try {
      const [response, error] = await signUpAction(values);

      if (error) {
        const errorMessage =
          error.errors?.[0]?.errorMessage ||
          error.message ||
          "Sign up failed. Please try again.";
        toast.error(errorMessage);
      } else if (response) {
        form.reset();
        toast.success(response.message);
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };

  const { register, formState } = form;

  return {
    onSubmit,
    form,
    register,
    formState,
    showPassword,
    setShowPassword,
  };
}
