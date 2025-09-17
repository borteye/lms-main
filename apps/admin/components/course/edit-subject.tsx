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
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import {
  NotebookText, SquarePen
} from "lucide-react";
import LoaderButton from "@workspace/ui/components/loading-button";
import useAddStudent from "@/hooks/use-add-student";

export default function EditSubject() {
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
        <SquarePen /> Edit Subject
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="bg-yellow-400 p-2 rounded-md border border-black w-fit text-white">
              <NotebookText />
            </div>
            Edit Subject
          </DialogTitle>
          <DialogDescription />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 mt-4"
          >
            <div>
              <Label
                htmlFor="first_name"
                className="text-sm font-medium text-gray-700"
              >
                Subject Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="first_name"
                {...register("first_name")}
                placeholder="Subject"
                className="mt-1"
              />
              {formState.errors.first_name && (
                <p className="text-destructive text-sm mt-1">
                  {formState.errors.first_name.message}
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
                Edit Subject
              </LoaderButton>
            </DialogFooter>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
