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
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { Plus, User } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";
import LoaderButton from "@workspace/ui/components/loading-button";
import useAddStudent from "@/hooks/use-add-student";

export default function AddStudent() {
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
      <DialogTrigger asChild>
        <Button className="w-fit bg-teall">
          <Plus /> Add Student
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="bg-teall p-2 rounded-md border border-black w-fit text-white">
              <User />
            </div>
            Add Student
          </DialogTitle>
          <DialogDescription />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 mt-4"
          >
            <div className="flex justify-between gap-4">
              <div>
                <Label
                  htmlFor="first_name"
                  className="text-sm font-medium text-gray-700"
                >
                  First Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="first_name"
                  {...register("first_name")}
                  placeholder="Enter first name"
                  className="mt-1"
                />
                {formState.errors.first_name && (
                  <p className="text-destructive text-sm mt-1">
                    {formState.errors.first_name.message}
                  </p>
                )}
              </div>
              <div>
                <Label
                  htmlFor="last_name"
                  className="text-sm font-medium text-gray-700"
                >
                  Last Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="last_name"
                  {...register("last_name")}
                  placeholder="Enter last name"
                  className="mt-1"
                />
                {formState.errors.last_name && (
                  <p className="text-destructive text-sm mt-1">
                    {formState.errors.last_name.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-between gap-4">
              <div>
                <Label
                  htmlFor="contactEmail"
                  className="text-sm font-medium text-gray-700"
                >
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="contactEmail"
                  {...register("contactEmail")}
                  placeholder="Enter email"
                  className="mt-1"
                />
                {formState.errors.contactEmail && (
                  <p className="text-destructive text-sm mt-1">
                    {formState.errors.contactEmail.message}
                  </p>
                )}
              </div>
              <div>
                <Label
                  htmlFor="phoneNumber"
                  className="text-sm font-medium text-gray-700"
                >
                  Phone Number <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="phoneNumber"
                  {...register("phoneNumber")}
                  placeholder="Enter phone number"
                  className="mt-1"
                />
                {formState.errors.phoneNumber && (
                  <p className="text-destructive text-sm mt-1">
                    {formState.errors.phoneNumber.message}
                  </p>
                )}
              </div>
            </div>
            <div>
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
            <div>
              <Label
                htmlFor="level"
                className="text-sm font-medium text-gray-700"
              >
                Class Level <span className="text-gray-400">(Optional)</span>
              </Label>
              <Select
                value={watch("level")}
                onValueChange={(value) => setValue("level", value)}
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
              {formState.errors.level && (
                <p className="text-destructive text-sm mt-1">
                  {formState.errors.level.message}
                </p>
              )}
            </div>
            <div>
              <Label
                htmlFor="stream"
                className="text-sm font-medium text-gray-700"
              >
                Stream <span className="text-gray-400">(Optional)</span>
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
                Create Student
              </LoaderButton>
            </DialogFooter>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
