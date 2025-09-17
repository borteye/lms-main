import { School } from "lucide-react";
import EllipseModal from "../../../../packages/common/src/components/ellipse-modal";
import EditClassroom from "./edit-classroom";
import DeleteModal from "@workspace/common/components/delete-modal";

interface ClassroomCardProps {
  children?: React.ReactNode;
}

export default function ClassroomCard({ children }: ClassroomCardProps) {
  return (
    <div className="p-4 border-2 border-black rounded-lg bg-vivid-purple/50 flex flex-col gap-6">
      <div className="flex items-center gap-2 justify-between">
        <div className="flex gap-2">
          <div className="bg-primary text-white w-fit p-2.5 border border-black rounded-md">
            <School />
          </div>
          <div>
            <h1 className="text-lg font-medium">Science A</h1>
            <p className="text-sm">Science</p>
          </div>
        </div>
        <EllipseModal
          children1={<EditClassroom />}
          children2={<DeleteModal subject="Classroom" />}
        />
      </div>
      <div className="flex items-center gap-2 justify-between">
        <p>Level:</p>
        <p className="font-medium text-xs border border-black py1 px-2 rounded-full">
          SHS 1
        </p>
      </div>
      <div className="flex items-center gap-2 justify-between">
        <p>Streams:</p>
        <div className="flex items-center gap-2 font-medium">
          <p className="bg-primary text-white text-center flex items-center justify-center w-7 h-7 border border-black rounded-full">
            A
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 justify-between">
        <p>Class Teacher:</p>
        <p className="font-medium">Mrs. Abena Kyei</p>
      </div>

      <div className="w-full h-0.5 bg-black" />
      <div className="flex items-center justify-evenly gap-4">
        <div className="text-center">
          <h1 className="text-xl font-semibold">12</h1>
          <p>Students</p>
        </div>
        <div className="text-center">
          <h1 className="text-xl font-semibold">12</h1>
          <p>Subjects</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4">{children}</div>
    </div>
  );
}
