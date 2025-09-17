import { Button } from "@workspace/ui/components/button";
import {
  Dialog, DialogContent,
  DialogDescription, DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@workspace/ui/components/dialog";
import { BookOpen } from "lucide-react";

export default function ViewSubjectsModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <BookOpen /> Subjects
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <BookOpen /> Subjects
          </DialogTitle>
          <div className="flex flex-col gap-3 mt-3 h-[calc(100vh-200px)] no-scrollbar overflow-y-auto">
            <div className="border border-black rounded-md p-3 flex items-center justify-between gap-2">
              <h3 className="font-medium">Mathematics</h3>
              <div className="flex flex-col items-end">
                <p className="text-sm border w-fit border-black bg-vivid-purple font-semibold px-2 py-0.5 rounded-full">
                  Taught by:
                </p>
                <h2>Mr. Kofi Antwi, Mr. Kwame Owusu</h2>
              </div>
            </div>
            <div className="border border-black rounded-md p-3 flex items-center justify-between gap-2">
              <h3 className="font-medium">Mathematics</h3>
              <div className="flex flex-col items-end">
                <p className="text-sm border w-fit border-black bg-vivid-purple font-semibold px-2 py-0.5 rounded-full">
                  Taught by:
                </p>
                <h2>Mr. Kofi Antwi, Mr. Kwame Owusu</h2>
              </div>
            </div>
            <div className="border border-black rounded-md p-3 flex items-center justify-between gap-2">
              <h3 className="font-medium">Mathematics</h3>
              <div className="flex flex-col items-end">
                <p className="text-sm border w-fit border-black bg-vivid-purple font-semibold px-2 py-0.5 rounded-full">
                  Taught by:
                </p>
                <h2>Mr. Kofi Antwi, Mr. Kwame Owusu</h2>
              </div>
            </div>
            <div className="border border-black rounded-md p-3 flex items-center justify-between gap-2">
              <h3 className="font-medium">Mathematics</h3>
              <div className="flex flex-col items-end">
                <p className="text-sm border w-fit border-black bg-vivid-purple font-semibold px-2 py-0.5 rounded-full">
                  Taught by:
                </p>
                <h2>Mr. Kofi Antwi, Mr. Kwame Owusu</h2>
              </div>
            </div>
            <div className="border border-black rounded-md p-3 flex items-center justify-between gap-2">
              <h3 className="font-medium">Mathematics</h3>
              <div className="flex flex-col items-end">
                <p className="text-sm border w-fit border-black bg-vivid-purple font-semibold px-2 py-0.5 rounded-full">
                  Taught by:
                </p>
                <h2>Mr. Kofi Antwi, Mr. Kwame Owusu</h2>
              </div>
            </div>
            <div className="border border-black rounded-md p-3 flex items-center justify-between gap-2">
              <h3 className="font-medium">Mathematics</h3>
              <div className="flex flex-col items-end">
                <p className="text-sm border w-fit border-black bg-vivid-purple font-semibold px-2 py-0.5 rounded-full">
                  Taught by:
                </p>
                <h2>Mr. Kofi Antwi, Mr. Kwame Owusu</h2>
              </div>
            </div>
          </div>
          <DialogDescription />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
