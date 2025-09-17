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
  SelectContent, SelectTrigger,
  SelectValue
} from "@workspace/ui/components/select";
import { Label } from "@workspace/ui/components/label";
import {
  BookOpen, SquarePen
} from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";
import LoaderButton from "@workspace/ui/components/loading-button";
import useAddStudent from "@/hooks/use-add-student";

export default function EditCourse() {
  const {
    formState,
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    onSubmit,
  } = useAddStudent();
  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-2">
        <SquarePen /> Edit Course
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-md border border-black w-fit text-white">
              <BookOpen />
            </div>
            Edit Course
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
                {/* <div className="flex w-full flex-1 border border-red-500"> */}
                <Select
                  value={watch("class")}
                  onValueChange={(value) => setValue("class", value)}
                >
                  <SelectTrigger className={cn("mt-1 w-full")}>
                    <SelectValue
                      placeholder={
                        "hi"
                        //   classroomLevelsLoading
                        //     ? "Fetching classroom levels"
                        //     : "Select class level"
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {/* {classroomLevels?.map((level, i) => (
                            <SelectItem value={String(level?.id)} key={i}>
                              {level?.name}
                            </SelectItem>
                          ))} */}
                  </SelectContent>
                </Select>
                {/* </div> */}

                {formState.errors.class && (
                  <p className="text-destructive text-sm mt-1">
                    {formState.errors.class.message}
                  </p>
                )}
              </div>
              <div className="w-full">
                <Label
                  htmlFor="class"
                  className="text-sm font-medium text-gray-700"
                >
                  Scope <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={watch("class")}
                  onValueChange={(value) => setValue("class", value)}
                >
                  <SelectTrigger className={cn("mt-1 w-full")}>
                    <SelectValue
                      placeholder={
                        "hi"
                        //   classroomLevelsLoading
                        //     ? "Fetching classroom levels"
                        //     : "Select class level"
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {/* {classroomLevels?.map((level, i) => (
                            <SelectItem value={String(level?.id)} key={i}>
                              {level?.name}
                            </SelectItem>
                          ))} */}
                  </SelectContent>
                </Select>
                {formState.errors.class && (
                  <p className="text-destructive text-sm mt-1">
                    {formState.errors.class.message}
                  </p>
                )}
              </div>
            </div>
            <div className="w-full flex justify-between gap-4">
              <div className="w-full">
                <Label
                  htmlFor="class"
                  className="text-sm font-medium text-gray-700"
                >
                  Class <span className="text-gray-400">(Optional)</span>
                </Label>
                {/* <div className="flex w-full flex-1 border border-red-500"> */}
                <Select
                  value={watch("class")}
                  onValueChange={(value) => setValue("class", value)}
                >
                  <SelectTrigger className={cn("mt-1 w-full")}>
                    <SelectValue
                      placeholder={
                        "hi"
                        //   classroomLevelsLoading
                        //     ? "Fetching classroom levels"
                        //     : "Select class level"
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {/* {classroomLevels?.map((level, i) => (
                            <SelectItem value={String(level?.id)} key={i}>
                              {level?.name}
                            </SelectItem>
                          ))} */}
                  </SelectContent>
                </Select>
                {/* </div> */}

                {formState.errors.class && (
                  <p className="text-destructive text-sm mt-1">
                    {formState.errors.class.message}
                  </p>
                )}
              </div>
              <div className="w-full">
                <Label
                  htmlFor="class"
                  className="text-sm font-medium text-gray-700"
                >
                  Stream <span className="text-gray-400">(Optional)</span>
                </Label>
                <Select
                  value={watch("class")}
                  onValueChange={(value) => setValue("class", value)}
                >
                  <SelectTrigger className={cn("mt-1 w-full")}>
                    <SelectValue
                      placeholder={
                        "hi"
                        //   classroomLevelsLoading
                        //     ? "Fetching classroom levels"
                        //     : "Select class level"
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {/* {classroomLevels?.map((level, i) => (
                            <SelectItem value={String(level?.id)} key={i}>
                              {level?.name}
                            </SelectItem>
                          ))} */}
                  </SelectContent>
                </Select>
                {formState.errors.class && (
                  <p className="text-destructive text-sm mt-1">
                    {formState.errors.class.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <Label
                htmlFor="stream"
                className="text-sm font-medium text-gray-700"
              >
                Assign Teachers
                <span className="text-gray-400">(Optional)</span>
              </Label>
              <Select
                value={watch("stream")}
                onValueChange={(value) => setValue("stream", value)}
              >
                <SelectTrigger className={cn("mt-1 w-full")}>
                  <SelectValue
                    placeholder={
                      "hi"
                      //   classroomLevelsLoading
                      //     ? "Fetching classroom levels"
                      //     : "Select class level"
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  {/* {classroomLevels?.map((level, i) => (
                            <SelectItem value={String(level?.id)} key={i}>
                              {level?.name}
                            </SelectItem>
                          ))} */}
                </SelectContent>
              </Select>
              {formState.errors.stream && (
                <p className="text-destructive text-sm mt-1">
                  {formState.errors.stream.message}
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
                Edit Course
              </LoaderButton>
            </DialogFooter>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
