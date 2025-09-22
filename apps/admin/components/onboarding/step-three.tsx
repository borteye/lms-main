import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { UseFormReturn } from "@workspace/ui/lib/client";
import { Award, Settings, Shield } from "lucide-react";
import { moment } from "@workspace/common/lib/client";
import { ConfigurationData } from "@/lib/schema";

export default function StepThree({
  configurationForm,
}: {
  configurationForm: UseFormReturn<ConfigurationData>;
}) {
  const timezones = moment.tz.names();

  const { setValue, watch, formState, register, getValues } = configurationForm;

  const gradeSystems: Record<
    string,
    {
      grade: string;
      minPercentage: string;
      maxPercentage: string;
      remark: string;
    }[]
  > = {
    primary: [
      { grade: "1", minPercentage: "", maxPercentage: "", remark: "" },
      { grade: "2", minPercentage: "", maxPercentage: "", remark: "" },
      { grade: "3", minPercentage: "", maxPercentage: "", remark: "" },
      { grade: "4", minPercentage: "", maxPercentage: "", remark: "" },
      { grade: "5", minPercentage: "", maxPercentage: "", remark: "" },
      { grade: "6", minPercentage: "", maxPercentage: "", remark: "" },
      { grade: "7", minPercentage: "", maxPercentage: "", remark: "" },
      { grade: "8", minPercentage: "", maxPercentage: "", remark: "" },
      { grade: "9", minPercentage: "", maxPercentage: "", remark: "" },
    ],
    secondary: [
      { grade: "A1", minPercentage: "", maxPercentage: "", remark: "" },
      { grade: "B2", minPercentage: "", maxPercentage: "", remark: "" },
      { grade: "B3", minPercentage: "", maxPercentage: "", remark: "" },
      { grade: "C4", minPercentage: "", maxPercentage: "", remark: "" },
      { grade: "C5", minPercentage: "", maxPercentage: "", remark: "" },
      { grade: "C6", minPercentage: "", maxPercentage: "", remark: "" },
      { grade: "D7", minPercentage: "", maxPercentage: "", remark: "" },
      { grade: "E8", minPercentage: "", maxPercentage: "", remark: "" },
      { grade: "F9", minPercentage: "", maxPercentage: "", remark: "" },
    ],
  };

  const handleSystemChange = (system: string) => {
    setValue("gradingSystem", system);

    const gradeScale = gradeSystems[system];
    setValue("gradeScale", gradeScale);
  };
  return (
    <div className="space-y-6">
      <div className="text-center mb-6 text-vivid-purple">
        <h3 className="text-xl font-semibold mb-2">
          Configure system settings
        </h3>
        <p>Set up grading system, user roles, and basic preferences.</p>
      </div>
      {/* Grading System */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-lg font-medium text-yellow-4">
          <Award className="w-5 h-5" />
          Grading System
        </div>

        <div>
          <Label
            htmlFor="gradingSystem"
            className="text-sm font-medium text-gray-7"
          >
            Grading System <span className="text-destructive">*</span>
          </Label>
          <Select
            value={watch("gradingSystem")}
            onValueChange={handleSystemChange}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select grading system" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="primary">Number Grades (1-9)</SelectItem>
              <SelectItem value="secondary">Letter Grades (A1-F9)</SelectItem>
            </SelectContent>
          </Select>
          {formState.errors.gradingSystem && (
            <p className="text-destructive text-sm mt-1">
              {formState.errors.gradingSystem.message}
            </p>
          )}
        </div>
      </div>
      <div>
        <Label className="text-sm font-medium text-gray-7 mb-2">
          Grade Scale <span className="text-gray-4">(Optional)</span>
        </Label>
        <div className="flex flex-col gap-4">
          {watch("gradeScale")?.map((_, index) => (
            <div
              key={index}
              className="grid grid-cols-3 gap-4 bg-gray-5 border border-black p-3 rounded-md"
            >
              <div>
                <Label className="block text-sm">Grade</Label>
                <Input
                  {...register(`gradeScale.${index}.grade`)}
                  disabled
                  placeholder="Grade e.g A,F9"
                  className="border-2 border-teall p-2 rounded-md w-full"
                />
                {formState.errors.gradeScale?.[index]?.grade && (
                  <p className="text-destructive text-sm">
                    {formState.errors.gradeScale[index]?.grade?.message}
                  </p>
                )}
              </div>
              <div>
                <Label className="block text-sm">Min %</Label>
                <Input
                  {...register(`gradeScale.${index}.minPercentage`)}
                  type="number"
                  placeholder="e.g 2"
                  className="border-2 border-primary p-2 rounded-md w-full"
                />
                {formState.errors.gradeScale?.[index]?.minPercentage && (
                  <p className="text-destructive text-sm">
                    {formState.errors.gradeScale[index]?.minPercentage?.message}
                  </p>
                )}
              </div>
              <div>
                <Label className="block text-sm">Max %</Label>
                <Input
                  {...register(`gradeScale.${index}.maxPercentage`)}
                  type="number"
                  placeholder="e.g 1"
                  className="border-2 border-success p-2 rounded-md w-full"
                />
                {formState.errors.gradeScale?.[index]?.maxPercentage && (
                  <p className="text-destructive text-sm">
                    {formState.errors.gradeScale[index]?.maxPercentage?.message}
                  </p>
                )}
              </div>
              <div>
                <Label className="block text-sm">Remark</Label>
                <Input
                  {...register(`gradeScale.${index}.remark`)}
                  placeholder="e.g Excellent"
                  className="border-2 border-yellow-400 p-2 rounded-md w-full"
                />
                {formState.errors.gradeScale?.[index]?.remark && (
                  <p className="text-destructive text-sm">
                    {formState.errors.gradeScale[index]?.remark?.message}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Label
          htmlFor="passingGrade"
          className="text-sm font-medium text-gray-7"
        >
          Minimum Passing Grade <span className="text-destructive">*</span>
        </Label>
        <Select
          value={watch("passingGrade")}
          onValueChange={(value) => setValue("passingGrade", value)}
        >
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Select grading system" />
          </SelectTrigger>
          <SelectContent>
            {getValues("gradeScale")?.map((grade, index) => (
              <SelectItem
                key={index}
                value={grade?.grade as string}
              >{`${grade.grade} (${grade.minPercentage}% - ${grade.maxPercentage})`}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {formState.errors.passingGrade && (
          <p className="text-destructive text-sm mt-1">
            {formState.errors.passingGrade.message}
          </p>
        )}
      </div>

      {/* Roles & Permissions */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-lg font-medium text-primary">
          <Shield className="w-5 h-5" />
          User Roles & Permissions
        </div>
        <div className="border border-gray-4 rounded-lg h-40 text-gray-4 text-xl flex items-center justify-center">
          <p>Coming Soon</p>
        </div>
      </div>

      {/* System Preferences */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-lg font-medium text-teall">
          <Settings className="w-5 h-5" />
          System Preferences
        </div>

        <div>
          <Label htmlFor="timezone" className="text-sm font-medium text-gray-7">
            Timezone <span className="text-destructive">*</span>
          </Label>
          <Select
            value={watch("timezone")}
            onValueChange={(value) => setValue("timezone", value)}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select timezone" />
            </SelectTrigger>
            <SelectContent>
              {timezones?.map((timezone, i) => (
                <SelectItem key={i} value={timezone}>
                  {timezone}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {formState.errors.timezone && (
            <p className="text-destructive text-sm mt-1">
              {formState.errors.timezone.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
