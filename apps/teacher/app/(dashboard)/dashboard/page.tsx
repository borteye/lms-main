import RecentAnnouncementCard from "@/components/accouncement/recent-announcement-card";
import { dashboardStats } from "@/lib/loops";
import StatisticsCard from "@workspace/common/components/cards/stat-card";
import { Button } from "@workspace/ui/components/button";
import { Progress } from "@workspace/ui/components/progress";
import { BookOpen, Calendar, Church, Megaphone } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-y-12">
      <div className="admin_banner flex items-center justify-between px-6 py-12 text-white rounded-2xl border-2 border-black">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-3xl font-semibold">Welcome back, Mr. Mark!</h1>
          <p className="text-sm">
            Here's an overview of your school's learning management system.
          </p>
          <div className="flex items-center gap-2">
            <Church /> St. Mary's International Academy
          </div>
          <p className="text-sm font-semibold">Wednesday, 25th October, 2025</p>
        </div>

        <div className="p-5 bg-white/50 w-fit rounded-full">
          <Church size={52} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {dashboardStats?.map((stat, i) => (
          <StatisticsCard data={stat} key={i} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="border-2 border-black p-4 flex flex-col gap-4 rounded-md">
          <div className="flex items-center gap-2">
            <div className="border border-black p-2 bg-vivid-purple rounded-md w-fit text-white">
              <BookOpen />
            </div>
            <h1 className="text-xl font-semibold">My Courses</h1>
          </div>
          <div className="flex flex-col gap-3">
            <div className="border border-black rounded-md p-4 flex flex-col gap-2 w-full">
              <h1 className="font-medium text-lg">SHS 2 Science A</h1>
              <p className="text-base">30 students</p>
              <Progress value={50} />
              <p className="text-sm">50% complete</p>
            </div>
            <div className="border border-black rounded-md p-4 flex flex-col gap-2 w-full">
              <h1 className="font-medium text-lg">SHS 2 Science A</h1>
              <p className="text-base">30 students</p>
              <Progress value={50} />
              <p className="text-sm">50% complete</p>
            </div>
            <div className="border border-black rounded-md p-4 flex flex-col gap-2 w-full">
              <h1 className="font-medium text-lg">SHS 2 Science A</h1>
              <p className="text-base">30 students</p>
              <Progress value={50} />
              <p className="text-sm">50% complete</p>
            </div>
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
              <div className="flex flex-wrap items-center gap-4 justify-between">
                <h1 className="font-medium text-lg">
                  Mathematics Assignment Due
                </h1>
                <p className="text-xs border border-black bg-destructive/70 font-semibold w-fit px-2 rounded-full">
                  2025-01-24
                </p>
              </div>
              <h1 className="font-medium text-lg">SHS 2 Science A</h1>
              <div className="flex items-center gap-3 justify-between">
                <p className="text-base">Submissions: 24/30</p>
                <Progress value={50} className="w-2/5" />
              </div>
            </div>
            <div className="border border-black rounded-md p-4 flex flex-col gap-2 w-full">
              <div className="flex flex-wrap items-center gap-4 justify-between">
                <h1 className="font-medium text-lg">
                  Mathematics Assignment Due
                </h1>
                <p className="text-xs border border-black bg-destructive/70 font-semibold w-fit px-2 rounded-full">
                  2025-01-24
                </p>
              </div>
              <h1 className="font-medium text-lg">SHS 2 Science A</h1>
              <div className="flex items-center gap-3 justify-between">
                <p className="text-base">Submissions: 24/30</p>
                <Progress value={50} className="w-2/5" />
              </div>
            </div>
          </div>
          <Button className="bg-success">View All Assignments</Button>
        </div>
      </div>
      <div className="border border-black p-4 rounded-md">
        <div className="flex items-center gap-2">
          <div className="bg-primary text-white w-fit p-2.5 border border-black rounded-md">
            <Megaphone />
          </div>
          <h1 className="text-2xl font-semibold">Recent Announcements</h1>
        </div>
        <div className="flex flex-col gap-3 mt-6">
          {[...Array(3)].map((_, i) => (
            <RecentAnnouncementCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
