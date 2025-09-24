import { getSchoolStatsForClasses } from "@/action/stats";
import AddClassroom from "@/components/classroom/add-classroom";
import ViewStudentsModal from "@/components/classroom/view-students-modal";
import ViewSubjectsModal from "@/components/classroom/view-subjects-modal";
import ClassroomCard from "@/components/classroom/classroom-card";
import StatisticsCard from "@workspace/common/components/cards/stat-card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import { LayoutGrid, Table } from "lucide-react";
import { UnderConstruction } from "@workspace/common/components/under-construction";

export default async function ClassesPage() {
  const [response, _] = await getSchoolStatsForClasses();
  return (
    <div className="flex flex-col gap-y-12">
      <div className="flex md:items-end flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold border-l-4 border-l-yellow-400 pl-1">
            Classes Management
          </h1>
          <p className="text-sm">
            Manage classes and streams across all departments
          </p>
        </div>
        <AddClassroom />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {response &&
          response?.data?.map((stat, i) => (
            <StatisticsCard data={stat} key={i} />
          ))}
      </div>
      <div>
        <Tabs defaultValue="cards">
          <TabsList className="border-2 border-black bg-vivid-purple p-2 self-end">
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
            <ClassroomCard>
              <ViewStudentsModal />
              <ViewSubjectsModal />
            </ClassroomCard>
          </TabsContent>
          <TabsContent value="table">
            <div>
              <UnderConstruction
                title="Classroom Table"
                description="We're building a Classroom Table. Stay tuned for updates!"
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
