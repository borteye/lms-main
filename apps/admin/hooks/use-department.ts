import {
  createDepartmentAction,
  editDepartmentAction,
} from "@/action/department";
import { CreateDepartmentData, createDepartmentSchema } from "@/lib/schema";
import { DepartmentDetailsType, Departments } from "@workspace/common/types";
import { useReactHookForm, zodResolver } from "@workspace/ui/lib/client";
import { toast } from "@workspace/ui/lib/server";
import { useState } from "react";

export function useCreateDepartment() {
  const [open, setOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const defaultValues = {
    name: "",
    departmentCode: "",
    headOfDepartment: "",
  };

  const { register, formState, watch, setValue, handleSubmit, reset } =
    useReactHookForm<CreateDepartmentData>({
      defaultValues,
      resolver: zodResolver(createDepartmentSchema),
    });

  const onSubmit = async (values: CreateDepartmentData) => {
    const [response, error] = await createDepartmentAction(values);
    if (error) {
      const errorMessage =
        error.message ||
        error.errors?.[0]?.errorMessage ||
        "Creating department failed. Please try again.";
      toast.error(errorMessage);
    } else if (response) {
      console.log(response);
      reset();
      setIsDialogOpen(false);
      toast.success(response.message);
    }
  };

  return {
    open,
    setOpen,
    isDialogOpen,
    setIsDialogOpen,
    register,
    formState,
    watch,
    setValue,
    handleSubmit,
    onSubmit,
    reset,
  };
}

export function useEditDepartment(
  department: Departments | DepartmentDetailsType
) {
  const [open, setOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const defaultValues = {
    name: department?.department_name ?? "",
    departmentCode: department?.department_code ?? "",
    headOfDepartment:
      "hod" in department
        ? ((department as Departments).hod ?? "")
        : "hod_name" in department
          ? ((department as DepartmentDetailsType).hod_name ?? "")
          : "",
  };

  const {
    register,
    formState,
    watch,
    setValue,
    handleSubmit,
    reset,
    getValues,
  } = useReactHookForm<CreateDepartmentData>({
    values: defaultValues,
    resolver: zodResolver(createDepartmentSchema),
  });

  const onSubmit = async (
    values: CreateDepartmentData,
    id: string | number
  ) => {
    console.log("values", values);
    console.log("id", id);
    const [response, error] = await editDepartmentAction(values, id);
    if (error) {
      const errorMessage =
        error.message ||
        error.errors?.[0]?.errorMessage ||
        "Updating department failed. Please try again.";
      toast.error(errorMessage);
    } else if (response) {
      console.log(response);
      reset();

      setIsDialogOpen(false);
      toast.success(response.message);
      window.location.reload();
    }
  };

  return {
    open,
    setOpen,
    isDialogOpen,
    setIsDialogOpen,
    register,
    formState,
    watch,
    setValue,
    handleSubmit,
    onSubmit,
    reset,
    getValues,
  };
}
