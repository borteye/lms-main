import { Label } from "@workspace/ui/components/label";
import { Check, FileText, Link, Upload, Users } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { UseFormReturn } from "@workspace/ui/lib/client";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { OptionalSetupData } from "@/lib/schema";

export default function StepFour({
  optionalSetupForm,
}: {
  optionalSetupForm: UseFormReturn<OptionalSetupData>;
}) {
  const { watch, setValue } = optionalSetupForm;

  const handleExcelUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setValue("excelFile", file);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6 text-yellow-400">
        <h3 className="text-xl font-semibold  mb-2">
          Optional integrations and setup
        </h3>
        <p>
          Connect with popular tools and import your student data. You can skip
          this and set it up later.
        </p>
      </div>

      {/* Integrations */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-lg font-medium text-teall">
          <Link className="w-5 h-5" />
          Third-Party Integrations
        </div>

        <p className="text-sm text-gray-600 mb-4">
          Connect with popular educational tools to enhance your LMS experience.
        </p>

        <div className="border border-gray-400 rounded-lg h-40 text-gray-400 text-xl flex items-center justify-center">
          <p>Coming Soon</p>
        </div>
      </div>

      {/* Student Import */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-lg font-medium text-vivid-purple">
          <Users className="w-5 h-5" />
          Student Data Import
        </div>

        <p className="text-sm text-gray-600 mb-4">
          Import your existing student data to get started quickly.
        </p>

        <div>
          <Label
            htmlFor="studentImportMethod"
            className="text-sm font-medium text-gray-700"
          >
            Import Method
          </Label>
          <Select
            value={watch("studentImportMethod")}
            onValueChange={(value) => setValue("studentImportMethod", value)}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select import method (optional)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="excel">Excel File Upload</SelectItem>
              <SelectItem value="manual">Manual Entry Later</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {watch("studentImportMethod") === "excel" && (
          <div className="space-y-4">
            <div>
              <Label
                htmlFor="excelFile"
                className="text-sm font-medium text-gray-700"
              >
                Upload Excel File
              </Label>
              <div className="mt-1 flex items-center gap-3">
                <div className="flex-1 p-4 border-2 border-dashed border-black rounded-lg text-center">
                  {true ? (
                    <div className="flex items-center justify-center gap-2">
                      <FileText className="w-5 h-5 text-success" />
                      <span className="text-sm text-gray-900">
                        {watch("excelFile")?.name}
                      </span>
                    </div>
                  ) : (
                    <div>
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        excel files only, up to 10MB
                      </p>
                    </div>
                  )}
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
                variant="outline"
                size="sm"
                onClick={() => document.getElementById("excelFile")?.click()}
                className="mt-2"
              >
                Choose File
              </Button>
            </div>

            <div className="p-3 bg-vivid-purple rounded-lg border-2 border-black">
              <h5 className="font-medium text-gray-900 mb-2">
                Excel Format Requirements:
              </h5>
              <ul className="text-sm text-white space-y-1">
                <li>
                  • Required columns: firstname, lastname, contactemail,
                  contactphonenumber
                </li>
                {/* <li>• Optional columns: Grade Level, Class, Phone, Address</li> */}
                <li>• First row should contain column headers</li>
                <li>• Maximum 1,000 students per file</li>
              </ul>
            </div>
          </div>
        )}

        {watch("studentImportMethod") === "manual" && (
          <div className="p-4 bg-primary border-2 border-black rounded-lg">
            <div className="flex items-center gap-2 text-gray-800 mb-2">
              <Users className="w-4 h-4" />
              <span className="font-medium">Manual Entry</span>
            </div>
            <p className="text-sm ">
              You can add students manually after completing the onboarding
              process. This option is great for smaller schools or when you want
              to start with a pilot group.
            </p>
          </div>
        )}
      </div>

      {/* Summary */}
      <div className="p-4 bg-green-50 border-2 border-success rounded-lg">
        <div className="flex items-center gap-2 text-green-800 mb-2">
          <Check className="w-4 h-4" />
          <span className="font-medium">Almost Done!</span>
        </div>
        <p className="text-sm text-green-700">
          You're ready to complete your LearnMate setup. You can always
          configure additional integrations and import more data from your
          dashboard later.
        </p>
      </div>
    </div>
  );
}
