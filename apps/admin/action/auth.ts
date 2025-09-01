"use server";

import { SignUpData } from "@workspace/common/lib/auth";
import { fetchWrapper } from "@workspace/common/lib/fetch-wrapper";
import { ApiResponse } from "@workspace/common/types";

export async function signUpAction(
  values: SignUpData
): Promise<[ApiResponse<{ email: string }> | null, ApiResponse<never> | null]> {
  const response = await fetchWrapper<
    ApiResponse<{ email: string }>,
    SignUpData
  >("/api/admin/auth/register", {
    method: "POST",
    body: values,
  });

  if ("error" in response) {
    return [null, response.error as ApiResponse<never>];
  }

  return [response, null];
}
