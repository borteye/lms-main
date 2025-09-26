import StatisticsCard from "@workspace/common/components/cards/stat-card";
import { LayoutGrid, Table } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import DepartmentCard from "@workspace/common/components/cards/department-card";
import AddDepartment from "@/components/department/add-department";
import EditDepartment from "@/components/department/edit-department";
import { getSchoolStatsForDepartment } from "@/action/stats";
import { UnderConstruction } from "@workspace/common/components/under-construction";
import { getDepartmentsAction } from "@/action/department";
import { Departments } from "@workspace/common/types";
import { cn } from "@workspace/ui/lib/utils";

export default async function DepartmentsPage() {
  const [[schoolStats, schoolStatsError], [departments, departmentsError]] =
    await Promise.all([getSchoolStatsForDepartment(), getDepartmentsAction()]);

  return (
    <div className="flex flex-col gap-y-12">
      <div className="flex md:items-end flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold border-l-4 border-l-primary pl-1">
            Department Management
          </h1>
          <p className="text-sm">
            Manage your school's academic departments and their structure.
          </p>
        </div>
        <AddDepartment />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {schoolStats &&
          schoolStats?.data?.map((stat, i) => (
            <StatisticsCard data={stat} key={i} />
          ))}
      </div>
      <div>
        <Tabs defaultValue="cards">
          <TabsList className="border-2 border-black p-2 self-end">
            <TabsTrigger value="cards">
              <LayoutGrid /> Card
            </TabsTrigger>
            <TabsTrigger value="table">
              <Table /> Table
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="cards"
            className={cn(
              "gap-4 mt-8",
              !departments || departments?.data?.length === 0
                ? ""
                : "grid grid-cols-1 md:grid-cols-2"
            )}
          >
            {departments &&
              departments?.data?.map((department, i) => (
                <DepartmentCard key={i} data={department}>
                  <EditDepartment data={department}  />
                </DepartmentCard>
              ))}
            {(!departments || departments?.data?.length === 0) && (
              <h1 className="text-2xl font-semibold text-center">
                No Department available at the moment
              </h1>
            )}
          </TabsContent>
          <TabsContent value="table">
            <div>
              <UnderConstruction
                title="Department Table"
                description="We're building a Department Table. Stay tuned for updates!"
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
