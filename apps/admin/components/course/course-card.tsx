import { BookOpen, Clock, Users } from "lucide-react";
import EllipseModal from "../../../../packages/common/src/components/ellipse-modal";
import EditCourse from "./edit-course";
import DeleteModal from "../user-management/delete-modal";

export default function CourseCard() {
  return (
    <div className="flex flex-col gap-3 border-2 border-black p-4 rounded-md bg-teall/50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-primary rounded-md w-fit p-2 border border-black ">
            <BookOpen size={28} />
          </div>
          <h2 className="font-medium text-lg">General Knowledge in Art</h2>
        </div>
        <EllipseModal
          children1={<EditCourse />}
          children2={<DeleteModal subject="course" />}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 justify-between">
          <p>Scope:</p>
          <p className="font-medium">School</p>
        </div>
        <div className="flex items-center gap-2">
          <Users size={22} />
          <div className="flex flex-wrap">Mr. Kwame, Kwame, Kwesi,</div>
        </div>
        <div className="flex items-center gap-2 justify-between">
          <p>Class:</p>
          <p className="font-medium">Science B - SHS1 or N/A or All Levels</p>
        </div>
      </div>

      <div className="w-full h-0.5 bg-black" />
      <p className="flex items-center gap-1">
        <Clock size={20} /> <span className="font-medium"> Created at:</span>{" "}
        16/01/2023
      </p>
    </div>
  );
}
