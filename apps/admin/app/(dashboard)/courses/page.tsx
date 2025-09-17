import StatisticsCard from "@workspace/common/components/cards/stat-card";
import CourseCard from "@/components/course/course-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Input } from "@workspace/ui/components/input";
import { BookOpen, Filter, Search, Table } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import AddCourses from "@/components/course/add-course";
import AddSubject from "@/components/course/add-subject";
import SubjectCard from "@/components/course/subject-card";

export default function CoursesPage() {
  const stats = [
    { id: "subjects", label: "Courses", value: 42 },
    { id: "students", label: "Total Enrollments", value: 1280 },
    { id: "teachers", label: "Instructors", value: 34 },
    { id: "classes", label: "Active Classes", value: 57 },
  ];

  const courses = [
    {
      code: "CS101",
      title: "Introduction to Computer Science",
      department: "Computer Science",
      level: "100 Level",
      enrolled: 180,
      instructors: 3,
      status: "active" as const,
    },
    {
      code: "MTH201",
      title: "Calculus II",
      department: "Mathematics",
      level: "200 Level",
      enrolled: 120,
      instructors: 2,
      status: "active" as const,
    },
    {
      code: "ENG305",
      title: "Technical Writing",
      department: "English",
      level: "300 Level",
      enrolled: 95,
      instructors: 1,
      status: "draft" as const,
    },
    {
      code: "PHY110",
      title: "General Physics I",
      department: "Physics",
      level: "100 Level",
      enrolled: 210,
      instructors: 2,
      status: "active" as const,
    },
    {
      code: "BIO450",
      title: "Molecular Biology",
      department: "Biology",
      level: "400 Level",
      enrolled: 60,
      instructors: 2,
      status: "archived" as const,
    },
  ];

  return (
    <div className="flex flex-col gap-y-12">
      <div className="flex md:items-end flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold border-l-4 border-l-primary pl-1">
            Courses Management
          </h1>
          <p className="text-sm">
            Manage courses, instructors and enrollments across all departments
          </p>
        </div>
        <div className="flex gap-3">
          <AddCourses />
          <AddSubject />
        </div>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item) => (
          <StatisticsCard key={item.id} data={item as any} />
        ))}
      </section>

      <div>
        <Tabs defaultValue="cards">
          <TabsList className="border-2 border-black bg-primary/50 p-2 self-end">
            <TabsTrigger value="cards">
              <BookOpen /> Courses
            </TabsTrigger>
            <TabsTrigger value="table">
              <Table /> Subjects
            </TabsTrigger>
          </TabsList>
          <TabsContent value="cards">
            <div className="border-2 border-black p-4 my-8 rounded-md flex flex-col lg:flex-row items-center justify-between gap-2">
              <div className="relative w-full lg:w-3/4">
                <Input placeholder="Search course" className="w-full" />
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
                    <SelectValue placeholder="Scope" />
                  </SelectTrigger>
                  <SelectContent className="bg-yellow-400 text-white">
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              <CourseCard />
              <CourseCard />
            </div>
          </TabsContent>
          <TabsContent
            value="table"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8"
          >
            <SubjectCard />
            <SubjectCard />
            <SubjectCard />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
