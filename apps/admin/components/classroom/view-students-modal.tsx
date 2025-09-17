import { Button } from "@workspace/ui/components/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog";
import { Input } from "@workspace/ui/components/input";
import { Search, Users } from "lucide-react";

export default function ViewStudentsModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Users /> Students
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Users /> Students
          </DialogTitle>
          <div className="relative mt-4">
            <Input
              placeholder="Search student by name or stream"
              className="w-full"
            />
            <Search className="absolute top-1.5 right-4" />
          </div>
          <div className="flex flex-col gap-3 mt-3 h-[calc(100vh-200px)] no-scrollbar overflow-y-auto">
            <div className="flex justify-between gap-4 border border-black rounded-md p-3">
              <h3>Kwaku Gyamfi</h3>
              <div>
                <h2 className="w-fit border border-black bg-vivid-purple font-semibold text-sm px-2 py-0.5 rounded-full mb-1">
                  Stream A
                </h2>
                <p className="text-sm">Enrolled: 9/1/2023</p>
              </div>
            </div>
            <div className="flex justify-between gap-4 border border-black rounded-md p-3">
              <h3>Kwaku Gyamfi</h3>
              <div>
                <h2 className="w-fit border border-black bg-vivid-purple font-semibold text-sm px-2 py-0.5 rounded-full mb-1">
                  Stream A
                </h2>
                <p className="text-sm">Enrolled: 9/1/2023</p>
              </div>
            </div>
            <div className="flex justify-between gap-4 border border-black rounded-md p-3">
              <h3>Kwaku Gyamfi</h3>
              <div>
                <h2 className="w-fit border border-black bg-vivid-purple font-semibold text-sm px-2 py-0.5 rounded-full mb-1">
                  Stream A
                </h2>
                <p className="text-sm">Enrolled: 9/1/2023</p>
              </div>
            </div>
            <div className="flex justify-between gap-4 border border-black rounded-md p-3">
              <h3>Kwaku Gyamfi</h3>
              <div>
                <h2 className="w-fit border border-black bg-vivid-purple font-semibold text-sm px-2 py-0.5 rounded-full mb-1">
                  Stream A
                </h2>
                <p className="text-sm">Enrolled: 9/1/2023</p>
              </div>
            </div>
            <div className="flex justify-between gap-4 border border-black rounded-md p-3">
              <h3>Kwaku Gyamfi</h3>
              <div>
                <h2 className="w-fit border border-black bg-vivid-purple font-semibold text-sm px-2 py-0.5 rounded-full mb-1">
                  Stream A
                </h2>
                <p className="text-sm">Enrolled: 9/1/2023</p>
              </div>
            </div>
            <div className="flex justify-between gap-4 border border-black rounded-md p-3">
              <h3>Kwaku Gyamfi</h3>
              <div>
                <h2 className="w-fit border border-black bg-vivid-purple font-semibold text-sm px-2 py-0.5 rounded-full mb-1">
                  Stream A
                </h2>
                <p className="text-sm">Enrolled: 9/1/2023</p>
              </div>
            </div>
            <div className="flex justify-between gap-4 border border-black rounded-md p-3">
              <h3>Kwaku Gyamfi</h3>
              <div>
                <h2 className="w-fit border border-black bg-vivid-purple font-semibold text-sm px-2 py-0.5 rounded-full mb-1">
                  Stream A
                </h2>
                <p className="text-sm">Enrolled: 9/1/2023</p>
              </div>
            </div>
          </div>
          <DialogDescription />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
