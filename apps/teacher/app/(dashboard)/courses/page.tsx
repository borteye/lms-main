import CourseCard from "@/components/course/course-card";
import { Input } from "@workspace/ui/components/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Filter, Search } from "lucide-react";

export default function CoursesPage() {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-semibold border-l-4 border-l-primary pl-1">
          Courses Management
        </h1>
        <p className="text-sm">
          Manage courses, course materials across classes
        </p>
      </div>
      <div className="border-2 border-black p-4 my-8 rounded-md flex flex-col lg:flex-row items-center justify-between gap-2">
        <div className="relative w-full lg:w-3/4">
          <Input placeholder="Search course" className="w-full" />
          <Search className="absolute top-1.5 right-4" />
        </div>
        <div className="flex flex-col md:flex-row lg:items-center justify-between gap-3 w-full lg:w-fit">
          <Select>
            <SelectTrigger className="w-[180px]">
              <Filter />
              <SelectValue placeholder="All Classes" />
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
            <SelectContent className="bg-vivid-purple text-white">
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CourseCard />
      </div>
    </div>
  );
}
