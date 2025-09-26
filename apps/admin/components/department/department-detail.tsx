"use client";

import { useMemo, useState } from "react";
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
import { DepartmentDetailsType } from "@workspace/common/types";
import { formatPrettyDate } from "@workspace/common/lib/utils";
import EditDepartment from "./edit-department";

export default function DepartmentDetails({
  data,
}: {
  data: DepartmentDetailsType;
}) {
  const [searchQuery, setSearchQuery] = useState("");

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

  // 🔹 Gather unique streams & classes
  const streams = useMemo(() => {
    const set = new Set(
      data?.students_in_department?.map((s) => s.student_stream).filter(Boolean) // remove null
    );
    return Array.from(set);
  }, [data?.students_in_department]);

  const classes = useMemo(() => {
    const set = new Set(
      data?.students_in_department?.map((s) => s.student_class)
    );
    return Array.from(set);
  }, [data?.students_in_department]);

  // 🔹 Filter students
  const filteredStudents = useMemo(() => {
    return data?.students_in_department?.filter((s) => {
      const matchStream = streamFilter
        ? s.student_stream === streamFilter
        : true;
      const matchClass = classFilter ? s.student_class === classFilter : true;
      const matchSearch = searchQuery
        ? s.student_name.toLowerCase().includes(searchQuery.toLowerCase())
        : true;

      return matchStream && matchClass && matchSearch;
    });
  }, [data?.students_in_department, streamFilter, classFilter, searchQuery]);

  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex items-end gap-4 justify-between">
        <div>
          <GoBack>Back</GoBack>
          <h1 className="text-3xl font-semibold border-l-4 border-l-success pl-1">
            {data?.department_name}
          </h1>
        </div>
        <EditDepartment data={data} />
      </div>

      {/* Department Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data?.department_stats?.map((stat, i) => (
          <StatisticsCard key={i} data={stat} />
        ))}
      </div>

      {/* Department Info */}
      <div className="border border-black p-4 rounded-lg">
        <h1 className="text-xl font-semibold">Department Info</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div>
            <p>Department Code</p>
            <h3 className="font-semibold">{data?.department_code}</h3>
          </div>
          <div>
            <p>Created Date</p>
            <h3 className="font-semibold">
              {formatPrettyDate(data?.department_created_at)}
            </h3>
          </div>
          <div>
            <p>Head of department</p>
            <h3 className="font-semibold">
              {data?.hod_name?.trim() ? data?.hod_name : "Not Assigned"}
            </h3>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div>
        <Tabs defaultValue="courses">
          <TabsList className="bg-vivid-purple/70 border-2 border-black p-2 self-end">
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="staff">Staff</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
          </TabsList>

          {/* Courses */}
          <TabsContent value="courses">
            {!data?.courses_in_department?.length ? (
              <h1 className="text-2xl font-semibold text-center">
                No current course under this department
              </h1>
            ) : (
              <div className="border-2 border-black rounded-lg p-4 ">
                <h1 className="text-xl font-semibold">Department courses</h1>
                <div className="flex flex-col gap-5 mt-4">
                  {data?.courses_in_department?.map((course, i) => (
                    <DepartmentCourseCard key={i} course={course} />
                  ))}
                </div>
              </div>
            )}
          </TabsContent>

          {/* Staff */}
          <TabsContent value="staff">
            {!data?.teachers_in_department?.length ? (
              <h1 className="text-2xl font-semibold text-center">
                No current staff assigned to this department
              </h1>
            ) : (
              <div className="border-2 border-black rounded-lg p-4 ">
                <h1 className="text-xl font-semibold">Department staff</h1>
                <div className="flex flex-col gap-5 mt-4">
                  {data?.teachers_in_department?.map((teacher, i) => (
                    <DepartmentStaffCard key={i} teacher={teacher} />
                  ))}
                </div>
              </div>
            )}
          </TabsContent>

          {/* Students */}
          <TabsContent value="students">
            <div className="border-2 border-black rounded-lg p-4 ">
              <h1 className="text-xl font-semibold">Department students</h1>

              {/* Filters */}
              <div className="flex items-center justify-end gap-4 my-12">
                <div className="relative w-1/2">
                  <Input
                    placeholder="Search student"
                    className="w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
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
                      ) : null}
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
                      {/* Stream Filter */}
                      <div>
                        <h1 className="font-semibold text-sm">Stream</h1>
                        <Select
                          value={streamFilter || ""}
                          onValueChange={setStreamFilter}
                          disabled={!streams.length} // disable if empty
                        >
                          <SelectTrigger className="w-full min-h-6 bg-transparent">
                            <SelectValue placeholder="Filter by stream" />
                          </SelectTrigger>
                          <SelectContent className="bg-teall text-white">
                            {streams.length > 0 ? (
                              streams.map((stream) => (
                                <SelectItem key={stream} value={stream!}>
                                  {stream}
                                </SelectItem>
                              ))
                            ) : (
                              <SelectItem value="-" disabled>
                                No streams available
                              </SelectItem>
                            )}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Class Filter */}
                      <div>
                        <h1 className="font-semibold text-sm">Class</h1>
                        <Select
                          value={classFilter || ""}
                          onValueChange={setClassFilter}
                          disabled={!classes.length} // disable if empty
                        >
                          <SelectTrigger className="w-full min-h-6 bg-transparent">
                            <SelectValue placeholder="Filter by class" />
                          </SelectTrigger>
                          <SelectContent className="bg-vivid-purple text-white">
                            {classes.length > 0 ? (
                              classes.map((cls) => (
                                <SelectItem key={cls} value={cls}>
                                  {cls}
                                </SelectItem>
                              ))
                            ) : (
                              <SelectItem value="-" disabled>
                                No classes available
                              </SelectItem>
                            )}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Filtered Students */}
              <div className="flex flex-col gap-5 mt-4">
                {!filteredStudents?.length ? (
                  <h1 className="text-2xl font-semibold text-center">
                    No students match the selected filters
                  </h1>
                ) : (
                  filteredStudents.map((student, i) => (
                    <DepartmentStudentCard
                      key={student.student_id}
                      student={student}
                    />
                  ))
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
