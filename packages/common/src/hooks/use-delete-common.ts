"use client";

import { toast } from "@workspace/ui/lib/server";
import { useState } from "react";
import { deleteDepartmentAction } from "../actions/common";

export function useDeleteDepartment() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async (departmentId: number) => {
    setIsLoading(true);
    const [response, error] = await deleteDepartmentAction(departmentId);
    if (error) {
      const errorMessage =
        error.message ||
        error.errors?.[0]?.errorMessage ||
        "Error deleting department. Please try again.";
      toast.error(errorMessage);
    } else if (response) {
      toast.success(response.message);
      window.location.reload();
    }
    setIsLoading(false);
  };
  return { isLoading, handleDelete };
}
