"use server";

import { fetchWrapper } from "@workspace/common/lib/fetch-wrapper";
import { ApiResponse, SchoolStats } from "@workspace/common/types";
import { cookies } from "next/headers";

export async function getSchoolStatsForDepartment(): Promise<
  [ApiResponse<SchoolStats[]> | null, ApiResponse<never> | null]
> {
  const response = await fetchWrapper<ApiResponse<SchoolStats[]>>(
    "/api/admin/school/stats/department",
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
export async function getSchoolStatsForDashboard(): Promise<
  [ApiResponse<SchoolStats[]> | null, ApiResponse<never> | null]
> {
  const response = await fetchWrapper<ApiResponse<SchoolStats[]>>(
    "/api/admin/school/stats/dashboard",
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

export async function getSchoolStatsForClasses(
  departmentId?: number
): Promise<[ApiResponse<SchoolStats[]> | null, ApiResponse<never> | null]> {
  const query = departmentId !== undefined ? `?departmentId=${departmentId}` : "";

  const response = await fetchWrapper<ApiResponse<SchoolStats[]>>(
    `/api/admin/school/stats/classes${query}`,
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
