import EditTeacherModal from "@/components/user-management/edit-teacher-modal";
import GoBack from "@workspace/common/components/go-back";
import {
  Award,
  BookOpen,
  Briefcase,
  Building2,
  Clock,
  Layers,
  Mail,
  Phone,
} from "lucide-react";

export default function TeacherDetails() {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex items-end gap-4 justify-between">
        <div>
          <GoBack>Back</GoBack>
          <h1 className="text-3xl font-semibold border-l-4 border-l-success pl-1">
            Mr. Kwame Amoah
          </h1>
          <p>Science Department</p>
        </div>
        <EditTeacherModal profile />
      </div>
      <div className="w-full h-0.5 bg-black" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border border-black rounded-md p-4 flex flex-col gap-3 w-full">
          <div className="flex items-center gap-2">
            <div className="bg-vivid-purple p-2 rounded-md w-fit border border-black">
              <Mail />
            </div>
            <h1 className="font-medium text-lg">Contact Information</h1>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Mail size={20} /> gabrielborteye@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <Phone size={20} /> +233 594863768
            </div>
          </div>
        </div>
        <div className="border border-black rounded-md p-4 flex flex-col gap-3 w-full">
          <div className="flex items-center gap-2">
            <div className="bg-yellow-400 p-2 rounded-md w-fit border border-black">
              <Briefcase />
            </div>
            <h1 className="font-medium text-lg">Employment Details</h1>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Clock size={20} /> Joined: 19/01/2025
            </div>
            <div className="flex items-center gap-2">
              <Building2 size={20} /> Department: Science
            </div>
            <div className="flex items-center gap-2">
              <Layers size={20} /> Class Teacher: Science B or N/A
            </div>
          </div>
        </div>
      </div>
      <div className="border border-black rounded-md p-4 flex flex-col gap-3 w-full">
        <div className="flex items-center gap-2">
          <div className="bg-teall p-2 rounded-md w-fit border border-black">
            <BookOpen />
          </div>
          <h1 className="font-medium text-lg">Subjects (2)</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          <p>Mathematics</p>
          <p>English</p>
        </div>
      </div>
      <div className="border border-black rounded-md p-4 flex flex-col gap-3 w-full">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-2 rounded-md w-fit border border-black">
            <Award />
          </div>
          <h1 className="font-medium text-lg">Qualifications (1)</h1>
        </div>
        <div className="flex flex-col flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <div className="bg-primary border border-black font-semibold w-2 h-2 rounded-full" />
            Mathematics
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-primary border border-black font-semibold w-2 h-2 rounded-full" />
            Science
          </div>
        </div>
      </div>
    </div>
  );
}
