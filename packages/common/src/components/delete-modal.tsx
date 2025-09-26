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
import LoaderButton from "@workspace/ui/components/loading-button";
import { Trash2 } from "lucide-react";

export default function DeleteModal({
  subject,
  onDelete,
  loading: isLoading,
}: {
  subject?: string;
  onDelete?: () => void;
  loading?: boolean;
}) {
  return (
    <Dialog>
      <DialogTrigger>
        <p className="flex items-center gap-2">
          <Trash2 /> Delete
        </p>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <div className="bg-destructive/20 text-destructive w-fit border border-black rounded-full p-3 mx-auto">
              <Trash2 />
            </div>
          </DialogTitle>
          <DialogDescription className="text-center text-black text-lg font-semibold">
            Delete {subject ? subject : "user"}
          </DialogDescription>
          <DialogDescription className="text-center">
            Are you sure you would like to do this?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <LoaderButton
            size="default"
            loading={isLoading as boolean}
            className="bg-destructive"
            onClick={onDelete}
          >
            {isLoading ? "Deleting..." : "Confirm"}
          </LoaderButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
