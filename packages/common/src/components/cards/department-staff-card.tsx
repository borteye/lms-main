import { Mail } from "lucide-react";

export default function DepartmentStaffCard() {
  return (
    <div className="flex gap-4 justify-between items-center p-4 border-2 border-black rounded-lg hover:scale-102 transition-all duration-300 ease-in-out">
      <div>
        <h2 className="font-medium">Mrs. Akosua Mensah</h2>
        <p className="-mt-1 text-sm">Head of Department</p>

        <div className="flex items-center gap-1 mt-5">
          <Mail size={20} /> <p>akosua.mensah@school.edu.gh</p>
        </div>
      </div>
      <h2 className="font-semibold">2 courses</h2>
    </div>
  );
}
