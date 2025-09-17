"use server";

import { CreateDepartmentData } from "@/lib/schema";
import { fetchWrapper } from "@workspace/common/lib/fetch-wrapper";
import { ApiResponse } from "@workspace/common/types";
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



