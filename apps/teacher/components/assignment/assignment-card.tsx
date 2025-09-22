import EllipseModal from "@workspace/common/components/ellipse-modal";
import { Progress } from "@workspace/ui/components/progress";
import { BookOpen, Clock, FileText, Users } from "lucide-react";
import EditAssignment from "./edit-assignment";
import DeleteModal from "@workspace/common/components/delete-modal";
import AssignmentSubmissions from "./assignment-submissions";

export default function AssignmentCard() {
  return (
    <div className="flex flex-col gap-3 border-2 border-black p-4 rounded-md bg-vivid-purple/50">
      <div className="flex items-center justify-between">
        <p className="font-medium text-xs bg-primary border border-black text-white w-fit px-2 rounded-full ">
          Active
        </p>
        <EllipseModal
          children1={<AssignmentSubmissions ellipse />}
          children2={<EditAssignment />}
          children3={<DeleteModal />}
        />
      </div>

      <div className="flex items-center gap-2">
        <div className="bg-yellow-400 rounded-md w-fit p-2 border border-black ">
          <BookOpen size={28} />
        </div>
        <h2 className="font-medium text-lg">General Knowledge in Art</h2>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 justify-between">
          <p>Class/Stream:</p>
          <p className="font-medium">Science A</p>
        </div>
        <div className="flex items-center gap-2 justify-between">
          <p>Level:</p>
          <p className="font-medium">SHS 2</p>
        </div>
        <div className="flex items-center gap-2 justify-between">
          <p>Due Date:</p>
          <p className="font-medium text-sm bg-destructive/60 border border-black px-2 rounded-full">
            Jan 25, 2025
          </p>
        </div>
        <div className="flex items-center gap-2 justify-between">
          <p>Max Score:</p>
          <p className="font-medium">80</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 justify-between">
            <p>Submissions:</p>
            <p className="text-primary font-bold">24/50</p>
          </div>
          <Progress value={72} className="bg-yellow-400/50" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <FileText size={20} />1 attachment(s)
      </div>

      <div className="w-full h-0.5 bg-black" />
      <p className="flex items-center gap-1">
        <Clock size={20} /> <span className="font-medium"> Created at:</span>{" "}
        16/01/2023
      </p>
      <AssignmentSubmissions />
    </div>
  );
}
