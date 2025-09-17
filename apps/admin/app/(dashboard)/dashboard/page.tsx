import QuickActionCard from "@/components/dashboard/quick-action-card";
import StatisticsCard from "@workspace/common/components/cards/stat-card";
import RecentActivityCard from "@workspace/common/components/dashboard/recent-activity-card";
import { quickActions } from "@/lib/loop";
import { Church } from "lucide-react";
import { getSchoolStatsForDashboard } from "@/action/stats";

export default async function Dashboard() {
  const [response, _] = await getSchoolStatsForDashboard();
  return (
    <div className="flex flex-col gap-y-12">
      <div className="admin_banner flex items-center justify-between px-6 py-12 text-white rounded-2xl border-2 border-black">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-3xl font-semibold">Welcome back, Gustavo!</h1>
          <p className="text-sm">
            Here's an overview of your school's learning management system.
          </p>
          <div className="flex items-center gap-2">
            <Church /> St. Mary's International Academy
          </div>
          <p className="text-sm font-semibold">Wednesday, 24th October, 2023</p>
        </div>

        <div className="p-5 bg-white/50 w-fit rounded-full">
          <Church size={52} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {response &&
          response?.data?.map((stat, i) => (
            <StatisticsCard data={stat} key={i} />
          ))}
      </div>
      <div className="border border-black rounded-lg p-4">
        <h1 className="text-xl font-semibold">Recent Activities</h1>
        <p className="text-sm">Latest updates and changes in your school</p>
        <RecentActivityCard />
      </div>
      <div className="border border-black rounded-lg p-4">
        <h1 className="text-xl font-semibold">Quick Actions</h1>
        <p className="text-sm">Commonly used administrative tasks</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {quickActions.map((action, i) => (
            <QuickActionCard action={action} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
