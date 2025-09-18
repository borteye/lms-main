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
import { BookCopy, Plus } from "lucide-react";
import LoaderButton from "@workspace/ui/components/loading-button";
import { useState } from "react";

export default function AddCourseMaterial() {
  const [type, setType] = useState("");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus />
          Add Materials
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="bg-yellow-400 p-2 rounded-md border border-black w-fit text-white">
              <BookCopy />
            </div>
            Add New Material
          </DialogTitle>

          <DialogDescription />
        </DialogHeader>
        <form className="flex flex-col gap-4">
          <div>
            <Label>
              Title <span className="text-destructive">*</span>
            </Label>
            <Input className="mt-2" />
          </div>
          <div>
            <Label>
              Description <span className="text-destructive">*</span>
            </Label>
            <textarea
              className="mt-2 p-4 border border-black rounded-md w-full"
              rows={2}
            />
          </div>
          <div>
            <Label>
              Course Material<span className="text-destructive">*</span>
            </Label>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger className="w-full mt-4">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="file">File</SelectItem>
                <SelectItem value="video">Video</SelectItem>
                <SelectItem value="text">Text</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {type === "video" && (
            <div>
              <Label>
                URL <span className="text-destructive">*</span>
              </Label>
              <Input className="mt-2" placeholder="Enter video url" />
            </div>
          )}
          {type === "file" && (
            <div>
              <Label>
                File <span className="text-destructive">*</span>
              </Label>
              <Input className="mt-2" />
            </div>
          )}
          {type === "text" && (
            <div>
              <Label>
                Course Text <span className="text-destructive">*</span>
              </Label>
              <textarea
                className="mt-2 p-4 border border-black rounded-md w-full"
                rows={5}
              />
            </div>
          )}
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
              Add Material
            </LoaderButton>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
