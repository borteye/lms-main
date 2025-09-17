import { Button } from "@workspace/ui/components/button";
import {
    Dialog,
    DialogContent, DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@workspace/ui/components/dialog";
import { Download, Eye, File } from "lucide-react";
import AddCourseMaterial from "./add-course-material";
import EllipseModal from "@workspace/common/components/ellipse-modal";
import EditCourseMaterial from "./edit-course-meterial";
import DeleteModal from "@workspace/common/components/delete-modal";

export default function CourseMaterialModal() {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-2">
        <Eye /> View Materials
      </DialogTrigger>
      <DialogContent className="min-w-[70%]">
        <DialogHeader>
          <DialogTitle>Course Materials - Advanced Mathematics</DialogTitle>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="font-medium">Course Materials</h1>
              <p className="text-sm text-wrap">
                Manage files, videos, links, and notes for Advanced Mathematics
              </p>
            </div>
            <AddCourseMaterial />
          </div>
          <div className="flex flex-col items-center gap-3 w-full mt-8 h-[calc(100vh-15rem)] overflow-y-auto no-scrollbar">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-full flex flex-col md:flex-row md:items-center justify-between gap-3 border border-black rounded-md p-4"
              >
                <div className="flex items-center gap-3 ">
                  <File size={20} />
                  <div>
                    <div className="flex items-center gap-2">
                      <h1>Chapter 1: Introduction to Algebra</h1>
                      <p className="bg-yellow-200 w-fit text-xs border border-black px-2 rounded-full font-semibold">
                        file
                      </p>
                    </div>
                    <p className="text-wrap text-sm">
                      Basic concepts and formulas for algebraic expressions
                    </p>
                    <p className="text-wrap text-xs">Uploaded: Jan 24, 2025</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline">
                    <Eye />
                    View
                  </Button>
                  <Button className="bg-vivid-purple">
                    <Download />
                    Download
                  </Button>
                  <EllipseModal
                    children1={<EditCourseMaterial />}
                    children2={<DeleteModal subject="course material" />}
                  />
                </div>
              </div>
            ))}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
