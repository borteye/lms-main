import EllipseModal from "@workspace/common/components/ellipse-modal";
import { Progress } from "@workspace/ui/components/progress";
import { BookOpen, Clock, FileText, Users } from "lucide-react";
import CourseMaterialModal from "./course-material-modal";

export default function CourseCard() {
  return (
    <div className="flex flex-col gap-3 border-2 border-black p-4 rounded-md bg-yellow-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-primary rounded-md w-fit p-2 border border-black ">
            <BookOpen size={28} />
          </div>
          <h2 className="font-medium text-lg">General Knowledge in Art</h2>
        </div>
        <EllipseModal children1={<CourseMaterialModal />} />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 justify-between">
          <p>Scope:</p>
          <p className="font-medium">School</p>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Users size={22} />
            <p className="flex flex-wrap">Students:</p>
          </div>
          <p className="font-semibold">30</p>
        </div>
        <div className="flex items-center gap-2 justify-between">
          <p>Class:</p>
          <p className="font-medium">Science B - SHS1 or N/A or All Levels</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 justify-between">
            <p>Progress:</p>
            <p className="text-primary font-bold">72%</p>
          </div>
          <Progress value={72} />
        </div>
      </div>
      <div className="flex justify-evenly items-center gap-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <FileText size={20} />
            24
          </div>
          <p className="font-semibold text-sm">Materials</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <BookOpen size={20} />6
          </div>
          <p className="font-semibold text-sm">Assignment</p>
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
