"use client";

import StatisticsCard from "@workspace/common/components/cards/stat-card";
import GoBack from "@workspace/common/components/go-back";
import { Button } from "@workspace/ui/components/button";
import { Filter, Search } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import { Input } from "@workspace/ui/components/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import DepartmentCourseCard from "@workspace/common/components/cards/department-course-card";
import DepartmentStaffCard from "@workspace/common/components/cards/department-staff-card";
import DepartmentStudentCard from "@workspace/common/components/cards/department-student-card";
import { parseAsString, useQueryState } from "@workspace/common/lib/client";
import EditDepartment from "./edit-department";

export default function DepartmentDetails() {
  const [streamFilter, setStreamFilter] = useQueryState(
    "studentFilters[stream][value]",
    parseAsString
  );

  const [classFilter, setClassFilter] = useQueryState(
    "studentFilters[class][value]",
    parseAsString
  );

  const resetAllFilters = () => {
    setStreamFilter(null);
    setClassFilter(null);
  };

  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex items-end gap-4 justify-between">
        <div>
          <GoBack>Back</GoBack>
          <h1 className="text-3xl font-semibold border-l-4 border-l-success pl-1">
            Business Department
          </h1>
        </div>
        <EditDepartment />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <StatisticsCard />
      </div>
      <div className="border border-black p-4 rounded-lg">
        <h1 className="text-xl font-semibold">Department Info</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div>
            <p>Department Code</p>
            <h3 className="font-semibold">BUS</h3>
          </div>
          <div>
            <p>Created Date</p>
            <h3 className="font-semibold">BUS</h3>
          </div>
          <div>
            <p>Head of department</p>
            <h3 className="font-semibold">BUS</h3>
          </div>
        </div>
      </div>
      <div>
        <Tabs defaultValue="courses">
          <TabsList className="bg-vivid-purple/70 border-2 border-black p-2 self-end">
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="staff">Staff</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
          </TabsList>
          <TabsContent value="courses">
            <div className="border-2 border-black rounded-lg p-4 ">
              <h1 className="text-xl font-semibold">Department courses</h1>
              <div className="flex flex-col gap-5 mt-4">
                <DepartmentCourseCard />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="staff">
            <div className="border-2 border-black rounded-lg p-4 ">
              <h1 className="text-xl font-semibold">Department staff</h1>
              <div className="flex flex-col gap-5 mt-4">
                <DepartmentStaffCard />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="students">
            <div className="border-2 border-black rounded-lg p-4 ">
              <h1 className="text-xl font-semibold">Department students</h1>
              <div className="flex items-center justify-end gap-4 my-12">
                <div className="relative w-1/2">
                  <Input placeholder="Search student" className="w-full" />
                  <Search className="absolute top-1.5 right-4" />
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <div className="relative text-primary w-fit">
                      <Filter />
                      {streamFilter || classFilter ? (
                        <p className="absolute -top-4 -right-1 bg-primary w-2 h-2 p-1.5 text-xs text-center rounded-xs text-white border border-black flex items-center justify-center font-semibold">
                          {streamFilter && classFilter ? 2 : 1}
                        </p>
                      ) : (
                        false
                      )}
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[300px] p-4">
                    <div className="flex items-center font-semibold justify-between gap-8">
                      <h1>Filters</h1>
                      <Button
                        variant="ghost"
                        className="text-destructive text-sm w-fit p-0"
                        onClick={resetAllFilters}
                      >
                        Reset
                      </Button>
                    </div>
                    <div className="flex flex-col gap-6 mt-4">
                      <div>
                        <h1 className="font-semibold text-sm">Stream</h1>
                        <Select
                          value={(streamFilter as string) || ""}
                          onValueChange={setStreamFilter}
                        >
                          <SelectTrigger className="w-full min-h-6 bg-transparent">
                            <SelectValue
                              placeholder="Filter by stream"
                              className="placeholder:text-black placeholder:opacity-100"
                            />
                          </SelectTrigger>
                          <SelectContent className="bg-teall text-white">
                            <SelectItem value="Student">Stream A</SelectItem>
                            <SelectItem value="Teacher">Stream B</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <h1 className="font-semibold text-sm">Class</h1>
                        <Select
                          value={(classFilter as string) || ""}
                          onValueChange={setClassFilter}
                        >
                          <SelectTrigger className="w-full min-h-6 bg-transparent">
                            <SelectValue
                              placeholder="Filter by class"
                              className="placeholder:text-black placeholder:opacity-100"
                            />
                          </SelectTrigger>
                          <SelectContent className="bg-vivid-purple text-white">
                            <SelectItem value="Student">Class 6A</SelectItem>
                            <SelectItem value="Teacher">Class 5B</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="flex flex-col gap-5 mt-4">
                <DepartmentStudentCard />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
