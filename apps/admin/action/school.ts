"use server";

import { SchoolOnboardingData } from "@/lib/schema";
import { fetchWrapper } from "@workspace/common/lib/fetch-wrapper";
import { ApiResponse, LoginResponse } from "@workspace/common/types";
import { cookies } from "next/headers";

export async function onboardSchoolAction(
  values: SchoolOnboardingData | FormData,
  step: number,
  token: string
): Promise<[ApiResponse<LoginResponse> | null, ApiResponse<never> | null]> {
  const response = await fetchWrapper<
    ApiResponse<LoginResponse>,
    SchoolOnboardingData | FormData
  >(`/api/admin/school/create/step-${step}`, {
    method: "POST",
    body: values,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if ("error" in response) {
    return [null, response.error as ApiResponse<never>];
  }

  if (step === 4 && response.data) {
    (await cookies()).set(
      "__tenaClass_access_token",
      response?.data?.accessToken,
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
