import { SignInData, signInSchema } from "@workspace/common/lib/auth-schema";
import { useReactHookForm, zodResolver } from "@workspace/ui/lib/client";
import { toast } from "@workspace/ui/lib/server";
import { useState } from "react";
import { signInAction } from "../action/auth";

export default function useSignIn() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const defaultValues = {
    email: "",
    password: "",
  };

  const form = useReactHookForm<SignInData>({
    defaultValues,
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (values: SignInData) => {
    try {
      const [response, error] = await signInAction(values);

      if (error) {
        const errorMessage =
          error.errors?.[0]?.errorMessage ||
          error.message ||
          "Sign in failed. Please try again.";
        toast.error(errorMessage);
      } else if (response) {
        form.reset();
        sessionStorage.setItem(
          "user",
          JSON.stringify(response?.data?.metaData)
        );
        toast.success(response.message);
        window.location.href = "/dashboard";
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
