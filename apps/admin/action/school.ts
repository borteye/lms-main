"use server";

import {
  CreateCourseData,
  CreateStudentData,
  CreateSubjectData,
  CreateTeacherData,
  SchoolOnboardingData,
} from "@/lib/schema";
import { fetchWrapper } from "@workspace/common/lib/fetch-wrapper";
import { ApiResponse, LoginResponse, MetaData, Notification1 } from "@workspace/common/types";
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

export async function getTeachersAction(): Promise<
  [ApiResponse<MetaData[]> | null, ApiResponse<never> | null]
> {
  const response = await fetchWrapper<ApiResponse<MetaData[]>>(
    "/api/admin/school/teachers",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${(await cookies()).get("__tenaClass_access_token")?.value}`,
      },
    }
  );

  if ("error" in response) {
    return [null, response.error as ApiResponse<never>];
  }

  return [response, null];
}

export async function createTeacherAction(
  values: CreateTeacherData
): Promise<[ApiResponse<null> | null, ApiResponse<never> | null]> {
  const response = await fetchWrapper<ApiResponse<null>>(
    "/api/admin/school/teacher/create",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${(await cookies()).get("__tenaClass_access_token")?.value}`,
      },
      body: values,
    }
  );

  if ("error" in response) {
    return [null, response.error as ApiResponse<never>];
  }

  return [response, null];
}
export async function createStudentAction(
  values: CreateStudentData
): Promise<[ApiResponse<null> | null, ApiResponse<never> | null]> {
  const response = await fetchWrapper<ApiResponse<null>>(
    "/api/admin/school/student/create",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${(await cookies()).get("__tenaClass_access_token")?.value}`,
      },
      body: values,
    }
  );

  if ("error" in response) {
    return [null, response.error as ApiResponse<never>];
  }

  return [response, null];
}

export async function createSubjectAction(
  values: CreateSubjectData
): Promise<[ApiResponse<null> | null, ApiResponse<never> | null]> {
  const response = await fetchWrapper<ApiResponse<null>>(
    "/api/admin/school/subject/create",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${(await cookies()).get("__tenaClass_access_token")?.value}`,
      },
      body: values,
    }
  );

  if ("error" in response) {
    return [null, response.error as ApiResponse<never>];
  }

  return [response, null];
}

export async function createCourseAction(
  values: CreateCourseData
): Promise<[ApiResponse<null> | null, ApiResponse<never> | null]> {
  const response = await fetchWrapper<ApiResponse<null>>(
    "/api/admin/school/course/create",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${(await cookies()).get("__tenaClass_access_token")?.value}`,
      },
      body: values,
    }
  );

  if ("error" in response) {
    return [null, response.error as ApiResponse<never>];
  }

  return [response, null];
}

export async function getNotificationsAction(): Promise<
  [ApiResponse<Notification1[]> | null, ApiResponse<never> | null]
> {
  const response = await fetchWrapper<ApiResponse<Notification1[]>>("/api/admin/school/notifications", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${(await cookies()).get("__tenaClass_access_token")?.value}`,
    },
  });

  if ("error" in response) {
    return [null, response.error as ApiResponse<never>];
  }

  return [response, null];
}