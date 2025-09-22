import AddTeacher from "@/components/user-management/add-teacher";
import BulkTeachersUpload from "@/components/user-management/bulk-teachers-upload";
import StatisticsCard from "@workspace/common/components/cards/stat-card";
import { Input } from "@workspace/ui/components/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import {
  Clock,
  Filter,
  GraduationCap,
  LayoutGrid,
  Search,
  Table,
} from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";
import EditTeacherModal from "@/components/user-management/edit-teacher-modal";
import DeleteModal from "@workspace/common/components/delete-modal";
import EllipseModal from "@workspace/common/components/ellipse-modal";

export default function TeachersPage() {
  return (
    <div className="flex flex-col gap-y-12">
      <div className="flex md:items-end flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold border-l-4 border-l-success pl-1">
            Teachers
          </h1>
          <p className="text-sm">Manage teacher assignments and workloads</p>
        </div>
        <div className="flex items-center gap-3">
          <AddTeacher />
          <BulkTeachersUpload />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <StatisticsCard
          data={{ label: "Teachers", value: 12, id: "teachers" }}
        />
      </div>
      <div>
        <div className="border-2 border-black p-4 rounded-md flex flex-col lg:flex-row items-center justify-between gap-2">
          <div className="relative w-full lg:w-3/4">
            <Input placeholder="Search teacher" className="w-full" />
            <Search className="absolute top-1.5 right-4" />
          </div>
          <div className="flex flex-col md:flex-row lg:items-center justify-between gap-3 w-full lg:w-fit">
            <Select>
              <SelectTrigger className="w-[180px]">
                <Filter />
                <SelectValue placeholder="All Departments" />
              </SelectTrigger>
              <SelectContent className="bg-vivid-purple text-white">
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Subjects" />
              </SelectTrigger>
              <SelectContent className="bg-yellow-400 text-white">
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent className="bg-primary text-white">
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div>
        <Tabs defaultValue="cards">
          <TabsList className="border-2 border-black p-2 self-end bg-success">
            <TabsTrigger value="cards">
              <LayoutGrid /> Card
            </TabsTrigger>
            <TabsTrigger value="table">
              <Table /> Table
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="cards"
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8"
          >
            <div className="flex flex-col gap-3 border-2 border-black p-4 rounded-md bg-vivid-purple/70">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-success rounded-md w-fit p-2 border border-black ">
                    <GraduationCap size={28} />
                  </div>
                  <h2 className="font-medium text-lg">Joseph Nkrumah</h2>
                </div>
                <EllipseModal
                  link="/user-management/teachers/1"
                  children1={<EditTeacherModal />}
                  children2={<DeleteModal />}
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 justify-between">
                  <p>Department:</p>
                  <p className="font-medium">Science</p>
                </div>
                <div className="flex flex-col gap-2 justify-between">
                  <p>Courses:</p>
                  <p className="font-medium -mt-2">Mathematics, Science</p>
                </div>
                <div className="flex items-center gap-2 justify-between">
                  <p>Class Teacher:</p>
                  <p className="font-medium">Science B - SHS1 or N/A</p>
                </div>
                <div className="flex items-center gap-2 justify-between">
                  <p>Status:</p>
                  <p
                    className={cn(
                      "font-medium text-sm p-2 rounded-md border border-black",
                      true ? "bg-success" : "bg-primary/80"
                    )}
                  >
                    Active or Inactive
                  </p>
                </div>
              </div>

              <div className="w-full h-0.5 bg-black" />
              <p className="flex items-center gap-1">
                <Clock size={20} />{" "}
                <span className="font-medium"> Joined:</span> 16/01/2023
              </p>
            </div>
          </TabsContent>
          <TabsContent value="table"></TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
