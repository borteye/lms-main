"use server";

import { CreateDepartmentData } from "@/lib/schema";
import { fetchWrapper } from "@workspace/common/lib/fetch-wrapper";
import { ApiResponse, Department, DepartmentDetailsType, Departments } from "@workspace/common/types";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function createDepartmentAction(
  values: CreateDepartmentData
): Promise<[ApiResponse<null> | null, ApiResponse<never> | null]> {
  const response = await fetchWrapper<ApiResponse<null>>(
    "/api/admin/department/create",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${(await cookies()).get("__tenaClass_access_token")?.value}`,
      },
      body: values,
    }
  );

  if ("error" in response) {
    console.error("Error creating department:", response.error);
    return [null, response.error as ApiResponse<never>];
  }

  revalidatePath("/departments");

  return [response, null];
}

export async function editDepartmentAction(
  values: CreateDepartmentData,
  id: string | number
): Promise<[ApiResponse<null> | null, ApiResponse<never> | null]> {
  const response = await fetchWrapper<ApiResponse<null>>(
    `/api/admin/department/update/${id}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${(await cookies()).get("__tenaClass_access_token")?.value}`,
      },
      body: values,
    }
  );

  if ("error" in response) {
    console.error("Error creating department:", response.error);
    return [null, response.error as ApiResponse<never>];
  }

  revalidatePath("/departments");

  return [response, null];
}

export async function getDepartmentsNameIdAction(): Promise<
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
    console.error("Error creating department:", response.error);
    return [null, response.error as ApiResponse<never>];
  }

  return [response, null];
}

export async function getDepartmentsAction(): Promise<
  [ApiResponse<Departments[]> | null, ApiResponse<never> | null]
> {
  const response = await fetchWrapper<ApiResponse<Departments[]>>(
    "/api/admin/department/departments",
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

export async function getSingleDepartmentAction(
  id: string | number
): Promise<[ApiResponse<DepartmentDetailsType[]> | null, ApiResponse<never> | null]> {
  const response = await fetchWrapper<ApiResponse<DepartmentDetailsType[]>>(
    `/api/admin/department/department/${id}`,
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
