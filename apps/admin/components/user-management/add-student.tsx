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
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { Plus, User } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";
import LoaderButton from "@workspace/ui/components/loading-button";
import useAddStudent from "@/hooks/use-add-student";
import { useSWR } from "@workspace/common/lib/client";
import {
  getClassesAction,
  getClassroomLevelsAction,
} from "@workspace/common/actions/common";

export default function AddStudent() {
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
                Class <span className="text-destructive">*</span>
              </Label>
              <Select
                value={watch("class_id")}
                onValueChange={(value) => setValue("class_id", value)}
              >
                <SelectTrigger className={cn("mt-1 w-full")}>
                  <SelectValue
                    placeholder={
                      isClassesLoading ? "Fetching classes" : "Select class "
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  {classes
                    ?.filter((cls) => cls?.type === "class")
                    ?.map((cls) => (
                      <SelectItem
                        value={String(cls?.class_id)}
                        key={cls?.class_id}
                      >
                        {`${cls?.class_name} - ${cls?.class_level_name}`}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              {formState.errors.class_id && (
                <p className="text-destructive text-sm mt-1">
                  {formState.errors.class_id.message}
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
                      isClassesLoading ? "Fetching streams" : "Select stream "
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  {(() => {
                    const filteredStreams =
                      classes?.filter(
                        (cls) =>
                          cls?.type === "stream" &&
                          cls?.class_id === Number(watch("class_id"))
                      ) || [];

                    return filteredStreams.length > 0 ? (
                      filteredStreams.map((stream) => (
                        <SelectItem
                          value={String(stream?.stream_id)}
                          key={stream?.stream_id}
                        >
                          {stream?.stream_name ?? `Stream ${stream?.stream_id}`}
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
