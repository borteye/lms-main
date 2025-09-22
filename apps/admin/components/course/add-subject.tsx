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
import { NotebookText, Plus, X } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";
import { colors } from "@workspace/common/lib/utils";
import useAddTeacher from "@/hooks/use-add-teacher";
import { Badge } from "@workspace/ui/components/badge";
import LoaderButton from "@workspace/ui/components/loading-button";
import {useAddSubject} from "@/hooks/use-courses";

export default function AddTeacher() {
  const {
    watch,
    formState,
    handleSubmit,
    onSubmit,
    newSubject,
    setNewSubject,
    addSubject,
    removeSubject,
    reset,
  } = useAddSubject();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-fit bg-yellow-400">
          <Plus /> Add Subject
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="bg-success p-2 rounded-md border border-black w-fit text-white">
              <NotebookText />
            </div>
            Add Subject
          </DialogTitle>
          <DialogDescription />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 mt-4"
          >
            <div>
              <Label className="text-sm font-medium text-gray-700">
                Subjects <span className="text-destructive">*</span>
              </Label>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter subject name (e.g., Science, Maths)"
                    value={newSubject}
                    onChange={(e) => setNewSubject(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addSubject()}
                  />
                  <Button type="button" onClick={addSubject} variant="outline">
                    Add
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="flex flex-wrap gap-2">
                    {watch("subjects")?.map((dept, index) => {
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
                            onClick={() => removeSubject(index)}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </Badge>
                      );
                    })}
                  </div>
                </div>
              </div>
              {formState.errors.subjects && (
                <p className="text-destructive text-sm mt-1">
                  {formState.errors.subjects.message}
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
                Create Subject
              </LoaderButton>
            </DialogFooter>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
