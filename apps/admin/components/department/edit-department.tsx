"use client";

import { Button } from "@workspace/ui/components/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { Check, ChevronsUpDown, SquarePen } from "lucide-react";
import { useEffect, useState } from "react";
import useGetTeachers from "@/hooks/use-get-teachers";
import { cn } from "@workspace/ui/lib/utils";
import { DepartmentDetailsType, Departments } from "@workspace/common/types";
import { useEditDepartment } from "@/hooks/use-department";
import { generateDepartmentCode } from "@/lib/utils";
import LoaderButton from "@workspace/ui/components/loading-button";

export default function EditDepartment({
  data: department,
}: {
  data: Departments | DepartmentDetailsType;
}) {
  const {
    data,
    isLoading,
    searchTeacher,
    setSearchTeacher,
    teacherName,
    setTeacherName,
  } = useGetTeachers();
  const {
    open,
    setOpen,
    isDialogOpen,
    setIsDialogOpen,
    watch,
    setValue,
    formState,
    register,
    handleSubmit,
    onSubmit,
    reset,
    getValues,
  } = useEditDepartment(department);

  const nameValue = watch("name");
  useEffect(() => {
    setValue("departmentCode", generateDepartmentCode(nameValue));
  }, [nameValue, setValue]);
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button>
          <SquarePen /> Edit Department
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="bg-primary w-fit p-2 border border-black rounded-md">
              <SquarePen />
            </div>
            Edit Department
          </DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(() =>
            onSubmit(getValues(), department?.department_id)
          )}
          className="flex flex-col gap-4 mt-4"
        >
          <div>
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              Department Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              {...register("name")}
              placeholder="Enter department name"
              className="mt-1"
            />
            {formState.errors.name && (
              <p className="text-destructive text-sm mt-1">
                {formState.errors.name.message}
              </p>
            )}
          </div>

          <div>
            <Label
              htmlFor="departmentCode"
              className="text-sm font-medium text-gray-700"
            >
              Department Code
            </Label>
            <Input
              id="departmentCode"
              {...register("departmentCode")}
              readOnly
              placeholder="Enter department code"
              className="mt-1"
            />
          </div>

          <div>
            <Label
              htmlFor="address"
              className="text-sm font-medium text-gray-700"
            >
              Head of Department
              <span className="text-gray-400">(Optional)</span>
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  role="combobox"
                  aria-expanded={open}
                  variant="outline"
                  className="w-full flex justify-between"
                >
                  {isLoading
                    ? "Fetching teachers"
                    : teacherName || "Select Head of Department"}
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <Command>
                  <CommandInput
                    placeholder="Search staff"
                    onValueChange={setSearchTeacher}
                    value={searchTeacher}
                  />
                  <CommandList>
                    <CommandEmpty>No teacher found.</CommandEmpty>
                    <CommandGroup>
                      {data?.map((teacher, i) => (
                        <CommandItem
                          key={i}
                          value={String(teacher.id)}
                          onSelect={(currentValue) => {
                            setValue("headOfDepartment", currentValue, {
                              shouldValidate: true,
                            });
                            setTeacherName(
                              teacher.first_name + " " + teacher.last_name
                            );
                            setOpen(false);
                          }}
                        >
                          {teacher.first_name} {teacher.last_name}
                          <Check
                            className={cn(
                              "ml-auto",
                              watch("headOfDepartment") === String(teacher.id)
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button
                onClick={() => reset()}
                variant="outline"
                disabled={formState.isSubmitting}
              >
                Close
              </Button>
            </DialogClose>
            <LoaderButton
              disabled={formState.isSubmitting}
              loading={formState.isSubmitting}
              type="submit"
            >
              Update Department
            </LoaderButton>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
