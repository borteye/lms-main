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
import { GraduationCap, Plus, X } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";
import { colors } from "@workspace/common/lib/utils";
import useAddTeacher from "@/hooks/use-add-teacher";
import { Badge } from "@workspace/ui/components/badge";
import LoaderButton from "@workspace/ui/components/loading-button";

export default function AddTeacher() {
  const {
    addQualification,
    removeQualification,
    qualifications,
    setQualifications,
    formState,
    register,
    getValues,
    handleSubmit,
    reset,
    setValue,
    watch,
    onSubmit,
  } = useAddTeacher();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-fit bg-success">
          <Plus /> Add Teacher
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="bg-success p-2 rounded-md border border-black w-fit text-white">
              <GraduationCap />
            </div>
            Add Teacher
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
                htmlFor="department"
                className="text-sm font-medium text-gray-700"
              >
                Department <span className="text-gray-400">(Optional)</span>
              </Label>
              <Select
                value={watch("department")}
                onValueChange={(value) => setValue("department", value)}
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
              {formState.errors.department && (
                <p className="text-destructive text-sm mt-1">
                  {formState.errors.department.message}
                </p>
              )}
            </div>

            <div>
              <Label className="text-sm font-medium text-gray-700">
                Qualifications <span className="text-gray-400">(Optional)</span>
              </Label>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter qualification name (e.g., Science, Maths)"
                    value={qualifications}
                    onChange={(e) => setQualifications(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addQualification()}
                  />
                  <Button
                    type="button"
                    onClick={addQualification}
                    variant="outline"
                  >
                    Add
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="flex flex-wrap gap-2">
                    {watch("qualifications")?.map((dept, index) => {
                      const bg = colors[index % colors.length];
                      return (
                        <Badge
                          key={index}
                          variant="secondary"
                          className={cn(
                            "flex items-center gap-1 text-white border-2 border-black",
                            bg
                          )}
                        >
                          {dept}
                          <Button
                            variant="ghost"
                            className="p-0 hover:bg-destructive hover:text-white"
                            onClick={() => removeQualification(index)}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </Badge>
                      );
                    })}
                  </div>
                </div>
              </div>
              {formState.errors.qualifications && (
                <p className="text-destructive text-sm mt-1">
                  {formState.errors.qualifications.message}
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
                Create Teacher
              </LoaderButton>
            </DialogFooter>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
