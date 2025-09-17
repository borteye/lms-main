"use server";

import { SignInData } from "@workspace/common/lib/auth-schema";
import { ApiResponse, LoginResponse } from "@workspace/common/types";
import { fetchWrapper } from "@workspace/common/lib/fetch-wrapper";
import { cookies } from "next/headers";

export async function signInAction(
  values: SignInData
): Promise<[ApiResponse<LoginResponse> | null, ApiResponse<never> | null]> {
  const response = await fetchWrapper<ApiResponse<LoginResponse>, SignInData>(
    "/api/auth/sign-in",
    {
      method: "POST",
      body: values,
    }
  );

  if ("error" in response) {
    return [null, response.error as ApiResponse<never>];
  }

  if (response && response.data) {
    (await cookies()).set(
      "__tenaClass_access_token",
      response.data.accessToken,
      {
        expires: Date.now() + 24 * 60 * 60 * 1000,
        secure: process.env.NODE_ENV === "production",
        httpOnly: true,
        sameSite: "strict",
      }
    );
  }

  return [response, null];
}
