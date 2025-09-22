import StatisticsCard from "@workspace/common/components/cards/stat-card";
import { SchoolStats } from "@workspace/common/types";
import { Button } from "@workspace/ui/components/button";
import { Progress } from "@workspace/ui/components/progress";
import { BookOpen, Calendar, FileText } from "lucide-react";

export default function DashboardPage() {
  const dashboardStats: SchoolStats[] = [
    {
      id: "subjects",
      label: "Enrolled Courses",
      value: 8,
    },
    {
      id: "assignment",
      label: "Pending Assignments",
      value: 4,
    },
    {
      id: "overall_progress",
      label: "Overall Progress",
      value: 7,
    },
    {
      id: "average_grade",
      label: "Average Grade",
      value: 3,
    },
  ];

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-semibold pl-1">Welcome back, John Doe!</h1>
        <p className="text-sm">Class: JHS 3A • Stream: Science</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {dashboardStats?.map((stat, i) => (
          <StatisticsCard data={stat} key={i} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="border-2 border-black p-4 flex flex-col gap-4 rounded-md">
          <div className="flex items-center gap-2">
            <div className="border border-black p-2 bg-yellow-400 rounded-md w-fit text-white">
              <FileText />
            </div>
            <h1 className="text-xl font-semibold">Recent Assignments</h1>
          </div>
          <div className="flex flex-col gap-3">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="border border-black rounded-md p-4 flex flex-col gap-2 w-full"
              >
                <div className="flex items-center justify-between gap-4 w-full">
                  <div>
                    <h1 className="font-medium text-lg">Assignment Title</h1>
                    <p className="text-base">Course</p>
                    <div className="text-sm flex items-center gap-2">
                      Due Date:{" "}
                      <p className="text-xs border border-black bg-destructive/70 font-semibold w-fit px-2 rounded-full">
                        2025-01-24
                      </p>{" "}
                    </div>
                  </div>
                  <p className="bg-success w-fit text-sm px-2 font-medium rounded-full border border-black">
                    Graded
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Button className="bg-yellow-400/90">View All Assignments</Button>
        </div>
        <div className="border-2 border-black p-4 flex flex-col gap-4 rounded-md">
          <div className="flex items-center gap-2">
            <div className="border border-black p-2 bg-vivid-purple rounded-md w-fit text-white">
              <BookOpen />
            </div>
            <h1 className="text-xl font-semibold">My Courses</h1>
          </div>
          <div className="flex flex-col gap-3">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="border border-black rounded-md p-4 flex flex-col gap-2 w-full"
              >
                <h1 className="font-medium text-lg">Physics</h1>
                <div className="flex items-center gap-2">
                  <p className="text-base">Teacher:</p>
                  <h1 className="font-medium text-base">Mr. Sackey</h1>
                </div>
                <Progress value={50} />
                <p className="text-sm">50% complete</p>
              </div>
            ))}
          </div>
          <Button className="bg-vivid-purple">View All Course</Button>
        </div>
        <div className="border-2 border-black p-4 flex flex-col gap-4 rounded-md">
          <div className="flex items-center gap-2">
            <div className="border border-black p-2 bg-success rounded-md w-fit text-white">
              <Calendar />
            </div>
            <h1 className="text-xl font-semibold">Upcoming Deadlines</h1>
          </div>
          <div className="flex flex-col gap-3">
            <div className="border border-black rounded-md p-4 flex flex-col gap-2 w-full">
              <h1 className="font-medium text-lg">Physics</h1>
              <div className="flex flex-wrap items-center gap-4 justify-between">
                <h1 className="font-medium text-lg">
                  Mathematics Assignment Due
                </h1>
                <p className="text-xs border border-black bg-destructive/70 font-semibold w-fit px-2 rounded-full">
                  2025-01-24
                </p>
              </div>
              <div className="flex items-center gap-3 justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-base">Teacher:</p>
                  <h1 className="font-medium text-base">Mr. Sackey</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
