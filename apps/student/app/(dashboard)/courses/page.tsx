import { Button } from "@workspace/ui/components/button";
import { Progress } from "@workspace/ui/components/progress";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import { BookOpen, Download, Eye, File, FileText, User } from "lucide-react";

export default function CoursesPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold border-l-4 border-l-success pl-1">
        Enrolled Courses
      </h1>
      <div className="flex gap-8 w-full py-10">
        <div className="w-2/6">
          <div className="border-2 border-black bg-success/70 p-4 rounded-lg w-full flex flex-col gap-3">
            <h2 className="text-lg font-semibold">Mathematics</h2>
            <p>
              <span className="font-medium"> Teacher: </span>Mr. Asante
            </p>
            <div>
              <div className="flex items-center gap-3 justify-between ">
                <p>Progress</p>{" "}
                <h3 className="text-primary font-semibold">85%</h3>
              </div>
              <Progress value={85} />
            </div>
            <div className="flex items-center gap-2">
              <FileText size={18} /> 1 material(s)
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="border-2 border-black p-4 rounded-md flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="bg-primary rounded-md w-fit p-2 border border-black text-white">
                <BookOpen />
              </div>
              <h1 className="text-2xl font-semibold">Mathematics</h1>
            </div>
            <div className="flex items-center gap-2">
              <User size={24} />
              <p className="text-lg">Mr. Asante</p>
            </div>
            <Tabs defaultValue="course" className="w-full">
              <TabsList className="h-fit w-full bg-vivid-purple/50 border-2 border-black">
                <TabsTrigger value="course">Course Materials</TabsTrigger>
                <TabsTrigger value="announcements">Announcements</TabsTrigger>
              </TabsList>
              <TabsContent value="course">
                <div className="flex flex-col items-center gap-3 w-full py-4">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="w-full flex flex-col md:flex-row md:items-center justify-between gap-3 border border-black rounded-md p-4"
                    >
                      <div className="flex items-center gap-3 ">
                        <File size={20} />
                        <div>
                          <div className="flex items-center gap-2">
                            <h1 className="font-medium">
                              Chapter 1: Introduction to Algebra
                            </h1>
                            <p className="bg-yellow-200 w-fit text-xs border border-black px-2 rounded-full font-semibold">
                              file
                            </p>
                          </div>
                          <p className="text-wrap text-sm">
                            Basic concepts and formulas for algebraic
                            expressions
                          </p>
                          <p className="text-wrap text-xs">
                            Uploaded: Jan 24, 2025
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <Button variant="outline">
                          <Eye />
                          Preview
                        </Button>
                        <Button className="bg-vivid-purple">
                          <Download />
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="announcements">
                Change your announcements here.
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
