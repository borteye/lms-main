import EditStudentModal from "@/components/user-management/edit-student-modal";
import EditTeacherModal from "@/components/user-management/edit-teacher-modal";
import GoBack from "@workspace/common/components/go-back";
import {
  ArrowBigUpDash,
  Award,
  BookOpen,
  Briefcase,
  Building2,
  Calendar,
  Clock,
  GraduationCap,
  Layers,
  Layers2,
  Mail,
  Phone,
  Podcast,
  User,
} from "lucide-react";

export default function StudentDetails() {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex items-end gap-4 justify-between">
        <div>
          <GoBack>Back</GoBack>
          <h1 className="text-3xl font-semibold border-l-4 border-l-teall pl-1">
            Joseph Nkrumah
          </h1>
          <p>Science Department</p>
        </div>
        <EditStudentModal profile />
      </div>
      <div className="w-full h-0.5 bg-black" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border border-black rounded-md p-4 flex flex-col gap-3 w-full">
          <div className="flex items-center gap-2">
            <div className="bg-vivid-purple p-2 rounded-md w-fit border border-black">
              <User />
            </div>
            <h1 className="font-medium text-lg">Personal Information</h1>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="font-medium">Full Name: </span>Gabriel Borteye
            </div>
          </div>
        </div>
        <div className="border border-black rounded-md p-4 flex flex-col gap-3 w-full">
          <div className="flex items-center gap-2">
            <div className="bg-yellow-400 p-2 rounded-md w-fit border border-black">
              <GraduationCap />
            </div>
            <h1 className="font-medium text-lg">Academic Information</h1>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Building2 size={20} /> Department: Science
            </div>
            <div className="flex items-center gap-2">
              <Layers size={20} /> Class: SHS 1
            </div>
            <div className="flex items-center gap-2">
              <ArrowBigUpDash size={20} /> Class Level: SHS 1
            </div>
            <div className="flex items-center gap-2">
              <Podcast size={20} /> Stream: Science B or N/A
            </div>
          </div>
        </div>
      </div>
      <div className="border border-black rounded-md p-4 flex flex-col gap-3 w-full">
        <div className="flex items-center gap-2">
          <div className="bg-teall p-2 rounded-md w-fit border border-black">
            <BookOpen />
          </div>
          <h1 className="font-medium text-lg">Courses (2)</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          <p>Mathematics</p>
          <p>English</p>
        </div>
      </div>
      <div className="border border-black rounded-md p-4 flex flex-col gap-3 w-full">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-2 rounded-md w-fit border border-black">
            <Calendar />
          </div>
          <h1 className="font-medium text-lg">TImeline</h1>
        </div>
        <div className="flex flex-col flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <div className="bg-primary border border-black font-semibold w-2 h-2 rounded-full" />
            Joined: 16/01/2025
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-success border border-black font-semibold w-2 h-2 rounded-full" />
            Status: Active
          </div>
        </div>
      </div>
    </div>
  );
}
