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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { cn } from "@workspace/ui/lib/utils";
import { Check, ChevronsUpDown, Layers, Plus, SquarePen } from "lucide-react";
import useGetTeachers from "@/hooks/use-get-teachers";
import LoaderButton from "@workspace/ui/components/loading-button";
import useCreateClassroom from "@/hooks/use-create-classroom";
import {
  useGetClassroomLevels,
  useGetDepartments,
} from "@workspace/common/hooks/use-get-common";

export default function EditClassroom() {
  const {
    data: teachers,
    isLoading: teachersLoading,
    searchTeacher,
    setSearchTeacher,
    teacherName,
    setTeacherName,
  } = useGetTeachers();
  const { data: classroomLevels, isLoading: classroomLevelsLoading } =
    useGetClassroomLevels();
  const { data: departments, isLoading: departmentsLoading } =
    useGetDepartments();
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
  } = useCreateClassroom();

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger className="flex items-center gap-2">
        <SquarePen /> Edit Classroom
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="bg-yellow-400 w-fit p-2 border border-black rounded-md">
              <Layers />
            </div>
            Edit Classroom
          </DialogTitle>
        </DialogHeader>

        <DialogDescription />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 mt-4"
        >
          <div>
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              Classroom Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              {...register("name")}
              placeholder="Enter classroom name"
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
              htmlFor="level"
              className="text-sm font-medium text-gray-700"
            >
              Class Level
            </Label>
            <Select
              value={watch("level")}
              onValueChange={(value) => setValue("level", value)}
            >
              <SelectTrigger className={cn("mt-1 w-full")}>
                <SelectValue
                  placeholder={
                    classroomLevelsLoading
                      ? "Fetching classroom levels"
                      : "Select class level"
                  }
                />
              </SelectTrigger>
              <SelectContent>
                {classroomLevels?.map((level, i) => (
                  <SelectItem value={String(level?.id)} key={i}>
                    {level?.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {formState.errors.level && (
              <p className="text-destructive text-sm mt-1">
                {formState.errors.level.message}
              </p>
            )}
          </div>

          <div>
            <Label
              htmlFor="classTeacher"
              className="text-sm font-medium text-gray-700"
            >
              Class Teacher
              <span className="text-gray-400">(Optional)</span>
            </Label>
            <Popover onOpenChange={setOpen} open={open}>
              <PopoverTrigger asChild>
                <Button
                  role="combobox"
                  aria-expanded={open}
                  variant="outline"
                  className="w-full flex justify-between"
                >
                  {teachersLoading
                    ? "Fetching teachers"
                    : teacherName || "Select Class teacher"}
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
                      {teachers?.map((teacher, i) => (
                        <CommandItem
                          key={i}
                          value={`${teacher.first_name} ${teacher.last_name}`}
                          onSelect={(currentValue) => {
                            setValue("classTeacher", String(teacher.id), {
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
                              watch("classTeacher") === String(teacher.id)
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

          <div>
            <Label
              htmlFor="department"
              className="text-sm font-medium text-gray-700"
            >
              Class Department
            </Label>
            <Select
              value={watch("department")}
              onValueChange={(value) => setValue("department", value)}
            >
              <SelectTrigger className={cn("mt-1 w-full")}>
                <SelectValue placeholder="Select class department" />
              </SelectTrigger>
              <SelectContent>
                {departments?.map((department, i) => (
                  <SelectItem value={String(department?.id)} key={i}>
                    {department?.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {formState.errors.department && (
              <p className="text-destructive text-sm mt-1">
                {formState.errors.department.message}
              </p>
            )}
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
              Edit Classroom
            </LoaderButton>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
