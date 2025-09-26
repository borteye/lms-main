import { DepartmentCourse } from "@workspace/common/types";

export default function DepartmentCourseCard({
  course,
}: {
  course: DepartmentCourse;
}) {
  return (
    <div className="flex gap-4 justify-between p-4 border-2 border-black rounded-lg hover:scale-102 transition-all duration-300 ease-in-out">
      <div>
        <h2 className="font-medium">{course?.course_name}</h2>
      </div>
      <div>
        <h2 className="font-medium">{course?.total_students}</h2>
        <p>{course?.course_name}</p>
      </div>
    </div>
  );
}
