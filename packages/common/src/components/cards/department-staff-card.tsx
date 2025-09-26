import { DepartmentStaff } from "@workspace/common/types";
import { Mail, Phone } from "lucide-react";

export default function DepartmentStaffCard({
  teacher,
}: {
  teacher: DepartmentStaff;
}) {
  return (
    <div className="flex gap-4 justify-between items-center p-4 border-2 border-black rounded-lg hover:scale-102 transition-all duration-300 ease-in-out">
      <div>
        <h2 className="font-medium">{teacher?.teacher_name}</h2>
        <p className="-mt-1 text-sm">{teacher?.role}</p>
        <div>
          <div className="flex items-center gap-1 mt-5">
            <Mail size={20} /> <p>{teacher?.teacher_email}</p>
          </div>
          <div className="flex items-center gap-1 mt-5">
            <Phone size={20} /> <p>{teacher?.teacher_phone}</p>
          </div>
        </div>
      </div>
      <h2 className="font-semibold">{teacher?.total_courses} courses</h2>
    </div>
  );
}
