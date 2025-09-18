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
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { Megaphone, Plus } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";
import LoaderButton from "@workspace/ui/components/loading-button";
// import useAddStudent from "@/hooks/use-add-student";

export default function AddAnnouncement() {
  // const {
  //   formState,
  //   register,
  //   handleSubmit,
  //   reset,
  //   setValue,
  //   watch,
  //   onSubmit,
  // } = useAddStudent();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-fit bg-vivid-purple">
          <Plus /> Add Announcement
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="bg-vivid-purple p-2 rounded-md border border-black w-fit text-white">
              <Megaphone />
            </div>
            Create New Announcements
          </DialogTitle>
          <DialogDescription />
          <form
            // onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 mt-4"
          >
            <div>
              <Label
                htmlFor="first_name"
                className="text-sm font-medium text-gray-700"
              >
                Title <span className="text-destructive">*</span>
              </Label>
              <Input
                id="first_name"
                // {...register("first_name")}
                placeholder="TItle"
                className="mt-1"
              />
              {/* {formState.errors.first_name && (
                <p className="text-destructive text-sm mt-1">
                  {formState.errors.first_name.message}
                </p>
              )} */}
            </div>
            <div>
              <Label
                htmlFor="first_name"
                className="text-sm font-medium text-gray-700"
              >
                Message <span className="text-destructive">*</span>
              </Label>
              <textarea
                id="first_name"
                // {...register("first_name")}
                placeholder="Enter announcement message..."
                className="mt-1 border border-black rounded-md w-full p-2"
                rows={5}
              />
              {/* {formState.errors.first_name && (
                <p className="text-destructive text-sm mt-1">
                  {formState.errors.first_name.message}
                </p>
              )} */}
            </div>
            <div className="w-full">
              <Label
                htmlFor="class"
                className="text-sm font-medium text-gray-700"
              >
                Department <span className="text-gray-400">(Optional)</span>
              </Label>
              <Select
                // value={watch("class")}
                // onValueChange={(value) => setValue("class", value)}
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
            </div>
            <div className="w-full">
              <Label
                htmlFor="class"
                className="text-sm font-medium text-gray-700"
              >
                Recipients <span className="text-destructive">*</span>
              </Label>
              <Select
                // value={watch("class")}
                // onValueChange={(value) => setValue("class", value)}
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
            </div>
            <div className="space-y-2">
              <Label>Preview</Label>
              <div className="border border-black rounded-lg p-4 bg-muted/30">
                <h4 className="font-semibold text-foreground mb-2">
                  General Submission
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Recipients: Everyone
                </p>
                <p className="text-foreground">
                  Your announcement message will appear here
                </p>
              </div>
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button
                  // onClick={() => reset()}
                  variant="outline"
                  // disabled={formState.isSubmitting}
                >
                  Close
                </Button>
              </DialogClose>
              <LoaderButton
                // disabled={formState.isSubmitting}
                loading={false}
                type="submit"
              >
                Create Announcement
              </LoaderButton>
            </DialogFooter>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
