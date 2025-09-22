import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog";
import { Eye, FileText, Filter, Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table";
import { Input } from "@workspace/ui/components/input";
import EllipseModal from "@workspace/common/components/ellipse-modal";
import Grading from "./grading";
import { Button } from "@workspace/ui/components/button";

export default function AssignmentSubmissions({
  ellipse,
}: {
  ellipse?: boolean;
}) {
  return (
    <Dialog>
      {ellipse ? (
        <DialogTrigger className="flex items-center gap-2">
          <Eye /> View Submissions
        </DialogTrigger>
      ) : (
        <DialogTrigger asChild>
          <Button>View Submissions </Button>
        </DialogTrigger>
      )}

      <DialogContent className="min-w-[70%] h-[calc(100vh-5rem)] overflow-y-auto no-scrollbar">
        <DialogHeader>
          <DialogTitle>
            Submissions - Quadratic Equations Problem Set
          </DialogTitle>
          <div>
            <h1 className="font-medium text-lg">Assignment Submissions</h1>
            <p>Quadratic Equations Problem Set (Max Score: 100 points)</p>
          </div>
          <DialogDescription />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-full border-2 border-black p-4 rounded-md text-center"
              >
                <h1 className="text-4xl font-semibold text-vivid-purple">4</h1>
                <p>Submitted</p>
              </div>
            ))}
          </div>
          <div className="border-2 border-black p-4 my-8 rounded-md flex flex-col lg:flex-row items-center justify-between gap-2">
            <div className="relative w-full lg:w-3/4">
              <Input placeholder="Search students" className="w-full" />
              <Search className="absolute top-1.5 right-4" />
            </div>
            <div className="flex flex-col md:flex-row lg:items-center justify-between gap-3 w-full lg:w-fit">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <Filter />
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent className="bg-vivid-purple text-white">
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="border border-black rounded-lg overflow-hidden p-4">
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow className="text-base">
                  <TableHead>Student</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Submitted At</TableHead>
                  <TableHead>File</TableHead>
                  <TableHead>Score</TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[...Array(5)].map((_, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium py-6">
                      Kofi Asante
                    </TableCell>
                    <TableCell>
                      <span className="bg-vivid-purple/40 text-vivid-purple border border-black font-semibold text-xs px-2 py-0.5 rounded-full">
                        Pending
                      </span>
                    </TableCell>
                    <TableCell>2024-01-18 14:30</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <FileText size={18} />
                        assignment1_kofi.pdf
                      </div>
                    </TableCell>
                    <TableCell>
                      <p className="font-semibold text-vivid-purple">85/100</p>
                    </TableCell>
                    <TableCell>
                      <EllipseModal children1={<Grading />} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
