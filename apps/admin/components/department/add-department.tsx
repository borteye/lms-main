"use client";

import { Button } from "@workspace/ui/components/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
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
import { cn } from "@workspace/ui/lib/utils";
import { Building2, Check, ChevronsUpDown, Plus } from "lucide-react";
import useGetTeachers from "@/hooks/use-get-teachers";
import {useCreateDepartment} from "@/hooks/use-department";
import LoaderButton from "@workspace/ui/components/loading-button";
import { generateDepartmentCode } from "@/lib/utils";
import { useEffect } from "react";

export default function AddDepartment() {
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
  } = useCreateDepartment();

  const nameValue = watch("name");
  useEffect(() => {
    setValue("departmentCode", generateDepartmentCode(nameValue));
  }, [nameValue, setValue]);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => reset()} className="w-fit">
          <Plus /> Add Department
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="bg-primary text-white w-fit p-2 border border-black rounded-md">
              <Building2 />
            </div>
            Create New Department
          </DialogTitle>
        </DialogHeader>

        <DialogDescription />
        <form
          onSubmit={handleSubmit(onSubmit)}
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
              Create Department
            </LoaderButton>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
