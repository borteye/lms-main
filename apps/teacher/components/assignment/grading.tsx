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
import LoaderButton from "@workspace/ui/components/loading-button";
import { BookOpenCheck, Eye, SquarePen } from "lucide-react";

export default function Grading() {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-2">
        <BookOpenCheck />
        Grade Submission
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Grade Submission - Kofi Asante</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <form action="" className="flex flex-col gap-4">
          <div>
            <Label>Score (out of 100)</Label>
            <Input className="mt-2" />
          </div>
          <div>
            <Label>Feedback</Label>
            <textarea
              className="mt-2 border border-black rounded-md p-4 w-full"
              rows={4}
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                //   onClick={() => reset()}
                variant="outline"
                disabled={false}
              >
                Close
              </Button>
            </DialogClose>
            <LoaderButton loading={false} type="submit">
              Save Grade
            </LoaderButton>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
