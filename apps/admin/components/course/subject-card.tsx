import {
  Clock, NotebookText
} from "lucide-react";
import EllipseModal from "../../../../packages/common/src/components/ellipse-modal";
import DeleteModal from "../user-management/delete-modal";
import EditSubject from "./edit-subject";

export default function SubjectCard() {
  return (
    <div className="flex flex-col gap-3 border-2 border-black p-4 rounded-md bg-teall/50">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-2">
          <div className="bg-yellow-400 rounded-md w-fit p-2 border border-black ">
            <NotebookText size={28} />
          </div>
          <h2 className="font-medium text-lg">General Knowledge in Art</h2>
        </div>
        <EllipseModal
          children1={<EditSubject />}
          children2={<DeleteModal subject="subject" />}
        />
      </div>
  

      <div className="w-full h-0.5 bg-black" />
      <p className="flex items-center gap-1">
        <Clock size={20} /> <span className="font-medium"> Created at:</span>{" "}
        16/01/2023
      </p>
    </div>
  );
}
