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
import { Eye, FileText, Plus, SquarePen } from "lucide-react";
import LoaderButton from "@workspace/ui/components/loading-button";

export default function EditAssignment() {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-2">
        <SquarePen />
        Edit Assignment
      </DialogTrigger>
      <DialogContent className="min-w-[50%]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="bg-vivid-purple p-2 rounded-md border border-black w-fit text-white">
              <FileText />
            </div>
            Edit Assignment
          </DialogTitle>
          <DialogDescription />
          <div className="h-[calc(100vh-10rem)] overflow-y-auto no-scrollbar">
            <form action="" className="flex flex-col gap-5">
              <div>
                <Label>
                  Assignment Title <span className="text-destructive">*</span>
                </Label>
                <Input className="mt-2" />
              </div>
              <div>
                <Label>
                  Assignment Description
                  <span className="text-destructive">*</span>
                </Label>
                <textarea
                  className="mt-2 border border-black rounded-md p-4 w-full"
                  rows={4}
                />
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="w-full">
                  <Label>
                    Class<span className="text-destructive">*</span>
                  </Label>
                  <Select>
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
                <div className="w-full">
                  <Label>
                    Stream<span className="text-destructive">*</span>
                  </Label>
                  <Select>
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
                <div className="w-full">
                  <Label>
                    Level<span className="text-destructive">*</span>
                  </Label>
                  <Select>
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
              </div>
              <div className="w-full">
                <Label>
                  Course<span className="text-destructive">*</span>
                </Label>
                <Select>
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
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="w-full">
                  <Label>
                    Due Date<span className="text-destructive">*</span>
                  </Label>
                  <Select>
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
                <div className="w-full">
                  <Label>
                    Max Score<span className="text-destructive">*</span>
                  </Label>
                  <Select>
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
              </div>
              <div className="w-full">
                <Label>
                  Status<span className="text-destructive">*</span>
                </Label>
                <Select>
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
              <div className="border-2 border-dashed border-black rounded-md p-6 text-center">
                <h3 className="font-medium">
                  Click to upload files or drag and drop
                </h3>
                <p className="text-xs">PDF, DOC, DOCX, XLS, XLSX (Max 10MB)</p>
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
                  Edit Assignment
                </LoaderButton>
              </DialogFooter>
            </form>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
