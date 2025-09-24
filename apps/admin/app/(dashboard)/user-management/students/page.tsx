"use client";

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
import { Clock, Filter, LayoutGrid, Search, Table, User } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";
import DeleteModal from "@workspace/common/components/delete-modal";
import EllipseModal from "@workspace/common/components/ellipse-modal";
import AddStudent from "@/components/user-management/add-student";
import BulkStudentsUpload from "@/components/user-management/bulk-students-upload";
import EditStudentModal from "@/components/user-management/edit-student-modal";
import { UnderConstruction } from "@workspace/common/components/under-construction";

export default function StudentsPage() {
  return (
    <div className="flex flex-col gap-y-12">
      <div className="flex md:items-end flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold border-l-4 border-l-teall pl-1">
            Students
          </h1>
          <p className="text-sm">Manage student records and enrollment</p>
        </div>
        <div className="flex items-center gap-3">
          <AddStudent />
          <BulkStudentsUpload />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {/* {response &&
                response?.data?.map((stat, i) => (
                  <StatisticsCard data={stat} key={i} />
                ))} */}
        <StatisticsCard
          data={{ label: "Total Students", value: 12, id: "students" }}
        />
      </div>
      <div>
        <div className="border-2 border-black p-4 rounded-md flex flex-col lg:flex-row items-center justify-between gap-2">
          <div className="relative w-full lg:w-3/4">
            <Input placeholder="Search students" className="w-full" />
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
                <SelectValue placeholder="Class Level" />
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
          <TabsList className="border-2 border-black p-2 self-end bg-teall">
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
                  <div className="bg-teall rounded-md w-fit p-2 border border-black ">
                    <User size={28} />
                  </div>
                  <h2 className="font-medium text-lg">Joseph Nkrumah</h2>
                </div>

                <EllipseModal
                  link="/user-management/students/1"
                  children1={<EditStudentModal />}
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
                  <p>Status:</p>
                  <p
                    className={cn(
                      "font-medium text-sm p-2 rounded-md border border-black",
                      true ? "bg-teall" : "bg-primary/80"
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
          <TabsContent value="table">
            <div>
              <UnderConstruction
                title="Student Table"
                description="We're building a Student Table. Stay tuned for updates!"
                variant="minimal"
                size="lg"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
