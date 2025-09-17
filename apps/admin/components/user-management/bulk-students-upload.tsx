"use client";

import { Button } from "@workspace/ui/components/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { File, FileText, Upload } from "lucide-react";
export default function BulkStudentsUpload() {
  const handleExcelUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("file", file);
      // setValue("excelFile", file);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-fit bg-teall">
          <File /> Bulk Upload
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="bg-teall p-2 rounded-md border border-black w-fit text-white">
              <File />
            </div>
            Bulk Upload
          </DialogTitle>
          <DialogDescription />
          <div className="p-3 bg-vivid-purple rounded-lg border-2 border-black">
            <h5 className="font-medium text-gray-900 mb-2">
              Excel Format Requirements:
            </h5>
            <ul className="text-sm text-white space-y-1">
              <li>• Required columns: First Name, Last Name, Email</li>
              <li>• Optional columns: Department</li>
              <li>• First row should contain column headers</li>
              <li>• Maximum 1,000 teachers per file</li>
            </ul>
          </div>
          <Label
            htmlFor="excelFile"
            className="text-sm font-medium text-gray-700"
          >
            Upload Excel File
          </Label>
          <div className="mt-1 flex items-center gap-3">
            <div className="flex-1 p-4 border-2 border-dashed border-black rounded-lg text-center">
              <div className="flex items-center justify-center gap-2">
                <FileText className="w-5 h-5 text-teall" />
                <span className="text-sm text-gray-900">
                  hi
                  {/* {watch("excelFile")?.name} */}
                </span>
              </div>
            </div>
          </div>
          <Input
            id="excelFile"
            type="file"
            accept=".xlsx, .xls"
            onChange={handleExcelUpload}
            className="hidden"
          />
          <Button
            type="button"
            // variant="outline"
            size="sm"
            onClick={() => document.getElementById("excelFile")?.click()}
            className="mt-2"
          >
            Choose File
          </Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
