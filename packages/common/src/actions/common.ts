"use server";

import { cookies } from "next/headers";
import { fetchWrapper } from "../lib/fetch-wrapper";
import {
  ApiResponse,
  Classes,
  ClassroomLevels,
  Department,
  Subject,
} from "../types";

export async function getClassroomLevelsAction(): Promise<
  [ApiResponse<ClassroomLevels[]> | null, ApiResponse<never> | null]
> {
  const response = await fetchWrapper<ApiResponse<ClassroomLevels[]>>(
    "/api/class-levels",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${(await cookies()).get("__tenaClass_access_token")?.value}`,
      },
    }
  );

  if ("error" in response) {
    console.error("Error getting classroom levels:", response.error);
    return [null, response.error as ApiResponse<never>];
  }

  return [response, null];
}

export async function getDepartmentsAction(): Promise<
  [ApiResponse<Department[]> | null, ApiResponse<never> | null]
> {
  const response = await fetchWrapper<ApiResponse<Department[]>>(
    "/api/departments",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${(await cookies()).get("__tenaClass_access_token")?.value}`,
      },
    }
  );

  if ("error" in response) {
    console.error("Error getting departments:", response.error);
    return [null, response.error as ApiResponse<never>];
  }

  return [response, null];
}
export async function getSubjectsAction(): Promise<
  [ApiResponse<Subject[]> | null, ApiResponse<never> | null]
> {
  const response = await fetchWrapper<ApiResponse<Subject[]>>("/api/subjects", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${(await cookies()).get("__tenaClass_access_token")?.value}`,
    },
  });

  if ("error" in response) {
    console.error("Error getting subjects:", response.error);
    return [null, response.error as ApiResponse<never>];
  }

  return [response, null];
}
export async function getClassesAction(): Promise<
  [ApiResponse<Classes[]> | null, ApiResponse<never> | null]
> {
  const response = await fetchWrapper<ApiResponse<Classes[]>>("/api/classes", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${(await cookies()).get("__tenaClass_access_token")?.value}`,
    },
  });

  if ("error" in response) {
    console.error("Error getting classes:", response.error);
    return [null, response.error as ApiResponse<never>];
  }

  return [response, null];
}
