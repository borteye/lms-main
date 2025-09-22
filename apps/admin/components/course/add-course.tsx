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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
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
import { Label } from "@workspace/ui/components/label";
import { BookOpen, Check, ChevronsUpDown, Loader, Plus, X } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";
import LoaderButton from "@workspace/ui/components/loading-button";
import { useAddCourse } from "@/hooks/use-courses";
import useGetTeachers from "@/hooks/use-get-teachers";
import { useSWR } from "@workspace/common/lib/client";
import {
  getClassesAction,
  getSubjectsAction,
} from "@workspace/common/actions/common";
import { Scopes } from "@workspace/common/lib/loops";
import { Input } from "@workspace/ui/components/input";

export default function AddCourse() {
  const { data: subjects, isLoading: isSubjectLoading } = useSWR(
    "/api/subjects",
    async () => {
      const [response, error] = await getSubjectsAction();
      if (error) {
        console.error("Error fetching subjects:", error);
        return;
      }
      return response?.data;
    }
  );

  const { data: classes, isLoading: isClassesLoading } = useSWR(
    "/api/classes",
    async () => {
      const [response, error] = await getClassesAction();
      if (error) {
        console.error("Error fetching classes:", error);
        return;
      }
      return response?.data;
    }
  );

  const {
    data: teachers,
    isLoading: teachersLoading,
    searchTeacher,
    setSearchTeacher,
    teacherName,
    setTeacherName,
  } = useGetTeachers();
  const {
    open,
    setOpen,
    watch,
    formState,
    handleSubmit,
    onSubmit,
    reset,
    setValue,
    register,
  } = useAddCourse();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-fit">
          <Plus /> Add Course
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-md border border-black w-fit text-white">
              <BookOpen />
            </div>
            Add Course
          </DialogTitle>
          <DialogDescription />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 mt-4"
          >
            <div className="w-full flex justify-between gap-4">
              <div className="w-full">
                <Label
                  htmlFor="class"
                  className="text-sm font-medium text-gray-700"
                >
                  Subject <span className="text-destructive">*</span>
                </Label>

                <Select
                  value={watch("subject")}
                  onValueChange={(value) => setValue("subject", value)}
                >
                  <SelectTrigger className={cn("mt-1 w-full")}>
                    <SelectValue
                      placeholder={
                        isSubjectLoading
                          ? "Fetching subjects"
                          : "Select subject"
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects?.map((subject, i) => (
                      <SelectItem value={String(subject?.id)} key={i}>
                        {subject?.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {formState.errors.class && (
                  <p className="text-destructive text-sm mt-1">
                    {formState.errors.class.message}
                  </p>
                )}
              </div>
              <div className="w-full">
                <Label
                  htmlFor="scope"
                  className="text-sm font-medium text-gray-700"
                >
                  Scope <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={watch("scope")}
                  onValueChange={(value) => setValue("scope", value)}
                >
                  <SelectTrigger className={cn("mt-1 w-full")}>
                    <SelectValue placeholder={"Select course scope"} />
                  </SelectTrigger>
                  <SelectContent>
                    {Scopes.map((scope, i) => (
                      <SelectItem value={scope?.value} key={i}>
                        {scope?.value}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {formState.errors.scope && (
                  <p className="text-destructive text-sm mt-1">
                    {formState.errors.scope.message}
                  </p>
                )}
              </div>
            </div>
            {watch("scope") !== "school" && (
              <>
                <div className="w-full flex justify-between gap-4">
                  <div className="w-full">
                    <Label
                      htmlFor="class"
                      className="text-sm font-medium text-gray-700"
                    >
                      Class <span className="text-gray-400">(Optional)</span>
                    </Label>

                    <Select
                      value={watch("class")}
                      onValueChange={(value) => setValue("class", value)}
                    >
                      <SelectTrigger className={cn("mt-1 w-full")}>
                        <SelectValue
                          placeholder={
                            isClassesLoading
                              ? "Fetching classes"
                              : "Select a class"
                          }
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {classes
                          ?.filter((cls) => cls?.type === "class")
                          ?.map((classroom, i) => (
                            <SelectItem
                              value={String(classroom?.class_id)}
                              key={i}
                            >
                              {`${classroom?.class_name} - ${classroom?.class_level_name}`}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                    {formState.errors.class && (
                      <p className="text-destructive text-sm mt-1">
                        {formState.errors.class.message}
                      </p>
                    )}
                  </div>
                  {watch("scope") === "stream" && (
                    <div className="w-full">
                      <Label
                        htmlFor="class"
                        className="text-sm font-medium text-gray-700"
                      >
                        Stream
                        <span className="text-gray-400">(Optional)</span>
                      </Label>

                      <Select
                        value={watch("stream")}
                        onValueChange={(value) => setValue("stream", value)}
                      >
                        <SelectTrigger className={cn("mt-1 w-full")}>
                          <SelectValue
                            placeholder={
                              isClassesLoading
                                ? "Fetching stream"
                                : "Select stream"
                            }
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {(() => {
                            const filteredStreams =
                              classes?.filter(
                                (cls) =>
                                  cls?.type === "stream" &&
                                  cls?.class_id === Number(watch("class"))
                              ) || [];

                            return filteredStreams.length > 0 ? (
                              filteredStreams.map((stream) => (
                                <SelectItem
                                  value={String(stream?.stream_id)}
                                  key={stream?.stream_id}
                                >
                                  {stream?.stream_name ??
                                    `Stream ${stream?.stream_id}`}
                                </SelectItem>
                              ))
                            ) : (
                              <div className="px-3 py-2 text-sm text-gray-500">
                                No streams available
                              </div>
                            );
                          })()}
                        </SelectContent>
                      </Select>
                      {formState.errors.stream && (
                        <p className="text-destructive text-sm mt-1">
                          {formState.errors.stream.message}
                        </p>
                      )}
                    </div>
                  )}
                </div>
                <div className="w-full">
                  <Label
                    htmlFor="classTeacher"
                    className="text-sm font-medium text-gray-700"
                  >
                    Assign Teacher
                    <span className="text-gray-400">(Optional)</span>
                  </Label>
                  <Popover onOpenChange={setOpen} open={open}>
                    <PopoverTrigger asChild>
                      <Button
                        role="combobox"
                        aria-expanded={open}
                        variant="outline"
                        className="w-full mt-1 flex justify-between"
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
                                  setValue("teacher", String(teacher.id), {
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
                                    watch("teacher") === String(teacher.id)
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
              </>
            )}

            {watch("scope") === "school" && (
              <div className="w-full flex flex-col gap-4 max-h-[calc(100vh-30rem)] overflow-y-auto no-scrollbar">
                {isClassesLoading && <Loader />}

                {!isClassesLoading &&
                  classes?.length &&
                  classes
                    ?.filter((cls) => cls?.type === "class")
                    ?.map((cls, index) => (
                      <div
                        key={index}
                        className="w-full flex justify-between gap-4"
                      >
                        <div className="w-full">
                          <Label className="block text-sm">Class</Label>
                          {/* Hidden input for class ID */}
                          <input
                            {...register(
                              `class_assigned_subject_teacher.${index}.class`
                            )}
                            type="hidden"
                            value={String(cls.class_id)}
                          />
                          {/* Display input showing class name and level */}
                          <Input
                            disabled
                            value={`${cls.class_name} - ${cls.class_level_name}`}
                            placeholder="class"
                            className="border-2 border-black p-2 rounded-md w-full"
                          />
                        </div>
                        <div className="w-full">
                          <Label
                            htmlFor="teacher"
                            className="text-sm font-medium text-gray-700"
                          >
                            Assign Teacher
                            <span className="text-gray-400">(Optional)</span>
                          </Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                role="combobox"
                                variant="outline"
                                className="w-full flex justify-between"
                              >
                                {teachersLoading
                                  ? "Fetching teachers"
                                  : (() => {
                                      const selectedTeacherId = watch(
                                        `class_assigned_subject_teacher.${index}.teacher`
                                      );
                                      if (selectedTeacherId) {
                                        const teacher = teachers?.find(
                                          (t) =>
                                            String(t.id) === selectedTeacherId
                                        );
                                        return teacher
                                          ? `${teacher.first_name} ${teacher.last_name}`
                                          : "Select a teacher";
                                      }
                                      return "Select a teacher";
                                    })()}
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
                                    {/* Option to clear selection */}
                                    <CommandItem
                                      onSelect={() => {
                                        setValue(
                                          `class_assigned_subject_teacher.${index}.teacher`,
                                          "",
                                          {
                                            shouldValidate: true,
                                          }
                                        );
                                      }}
                                    >
                                      <X className="mr-2 h-4 w-4" />
                                      Clear selection
                                    </CommandItem>
                                    {teachers?.map((teacher, i) => (
                                      <CommandItem
                                        key={i}
                                        value={`${teacher.first_name} ${teacher.last_name}`}
                                        onSelect={(currentValue) => {
                                          setValue(
                                            `class_assigned_subject_teacher.${index}.teacher`,
                                            String(teacher.id),
                                            {
                                              shouldValidate: true,
                                            }
                                          );
                                        }}
                                      >
                                        {teacher.first_name} {teacher.last_name}
                                        <Check
                                          className={cn(
                                            "ml-auto",
                                            watch(
                                              `class_assigned_subject_teacher.${index}.teacher`
                                            ) === String(teacher.id)
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
                      </div>
                    ))}
              </div>
            )}

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
                Create Course
              </LoaderButton>
            </DialogFooter>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
