"use client";

import { AcademicStructureData } from "@/lib/schema";
import { colors } from "@workspace/common/lib/utils";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
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
import { cn } from "@workspace/ui/lib/utils";
import { BookOpen, Building2, Calendar, GraduationCap, X } from "lucide-react";
import { useState } from "react";

export default function StepTwo({
  academicStructureForm,
}: {
  academicStructureForm: UseFormReturn<AcademicStructureData>;
}) {
  const [newDepartment, setNewDepartment] = useState("");
  const [newSubject, setNewSubject] = useState("");

  const { getValues, setValue, watch, formState, register } =
    academicStructureForm;

  const terms = watch("terms");

  const addDepartment = () => {
    if (newDepartment.trim()) {
      const currentDepartments = getValues("departments");
      if (!currentDepartments?.includes(newDepartment.trim())) {
        setValue("departments", [
          ...((currentDepartments ?? []) as string[]),
          newDepartment.trim(),
        ]);
        setNewDepartment("");
      }
    }
  };

  const removeDepartment = (index: number) => {
    const currentDepartments = getValues("departments");
    setValue(
      "departments",
      ((currentDepartments ?? []) as string[]).filter((_, i) => i !== index)
    );
  };

  const addSubject = () => {
    if (newSubject.trim()) {
      const currentSubjects = getValues("subjects");
      if (!currentSubjects.includes(newSubject.trim())) {
        setValue("subjects", [...currentSubjects, newSubject.trim()]);
        setNewSubject("");
      }
    }
  };

  const removeSubject = (index: number) => {
    const currentSubjects = getValues("subjects");
    setValue(
      "subjects",
      currentSubjects.filter((_, i) => i !== index)
    );
  };

  const termSystems: Record<string, number> = {
    semester: 2,
    trimester: 3,
    quarter: 4,
  };

  const handleSystemChange = (system: string) => {
    setValue("termSystem", system);

    const count = termSystems[system] || 0;
    setValue(
      "terms",
      Array.from({ length: count }, (_, i) => ({
        name: `${system} ${i + 1}`,
        startDate: "",
        endDate: "",
      }))
    );
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6 text-teall">
        <h3 className="text-xl font-semibold mb-2">
          Configure your academic structure
        </h3>
        <p>
          Set up grade levels, departments, subjects, and academic calendar.
        </p>
      </div>

      {/* Academic Levels */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-lg font-medium text-primary">
          <GraduationCap className="w-5 h-5" />
          Academic Levels
        </div>

        <div>
          <Label
            htmlFor="levelSystem"
            className="text-sm font-medium text-gray-700"
          >
            Level System <span className="text-destructive">*</span>
          </Label>
          <Select
            value={watch("levelSystem")}
            onValueChange={(value) => setValue("levelSystem", value)}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select your level system" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="primary">Primary</SelectItem>
              <SelectItem value="secondary">Secondary</SelectItem>
            </SelectContent>
          </Select>
          {formState.errors.levelSystem && (
            <p className="text-destructive text-sm mt-1">
              {formState.errors.levelSystem.message}
            </p>
          )}
        </div>
      </div>

      {/* Departments */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-lg font-medium text-vivid-purple">
          <Building2 className="w-5 h-5" />
          Departments & Classes
        </div>

        <div>
          <Label className="text-sm font-medium text-gray-700">
            Departments <span className="text-gray-400">(Optional)</span>
          </Label>
          <p className="text-xs text-gray-500 mb-2">
            Add departments or class divisions if applicable
          </p>
          <div className="space-y-2">
            <div className="flex gap-2">
              <Input
                placeholder="Enter department name (e.g., Science, General Art, JHS 1, JHS 3, Grade 5)"
                value={newDepartment}
                onChange={(e) => setNewDepartment(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addDepartment()}
              />
              <Button type="button" onClick={addDepartment} variant="outline">
                Add
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="flex flex-wrap gap-2">
                {watch("departments")?.map((dept, index) => {
                  const bg = colors[index % colors.length];
                  return (
                    <Badge
                      key={index}
                      variant="secondary"
                      className={cn(
                        "flex items-center gap-1 text-white border-2 border-black",
                        bg
                      )}
                    >
                      {dept}
                      <Button
                        variant="ghost"
                        className="p-0 hover:bg-destructive hover:text-white"
                        onClick={() => removeDepartment(index)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </Badge>
                  );
                })}
              </div>
            </div>
          </div>
          {formState.errors.departments && (
            <p className="text-destructive text-sm mt-1">
              {formState.errors.departments.message}
            </p>
          )}
        </div>
      </div>

      {/* Subjects */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-lg font-medium text-yellow-400">
          <BookOpen className="w-5 h-5" />
          Subjects & Courses
        </div>

        <div>
          <Label className="text-sm font-medium text-gray-700">
            Subjects/Courses Offered <span className="text-destructive">*</span>
          </Label>
          <p className="text-xs text-gray-500 mb-2">
            Add the main subjects or courses taught at your school
          </p>
          <div className="space-y-2">
            <div className="flex gap-2">
              <Input
                placeholder="Enter subject name (e.g., Mathematics, English Literature)"
                value={newSubject}
                onChange={(e) => setNewSubject(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addSubject()}
              />
              <Button type="button" onClick={addSubject} variant="outline">
                Add
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {watch("subjects").map((subject, index) => {
                const bg = colors[index % colors.length];
                return (
                  <Badge
                    key={index}
                    variant="secondary"
                    className={cn(
                      "flex text-white border-2 border-black items-center gap-1",
                      bg
                    )}
                  >
                    {subject}
                    <Button
                      variant="ghost"
                      className="p-0 hover:bg-destructive hover:text-white"
                      onClick={() => removeSubject(index)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </Badge>
                );
              })}
            </div>
          </div>
          {formState.errors.subjects && (
            <p className="text-destructive text-sm mt-1">
              {formState.errors.subjects.message}
            </p>
          )}
        </div>
      </div>

      {/* Academic Calendar */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-lg font-medium text-success">
          <Calendar className="w-5 h-5" />
          Academic Calendar
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label
              htmlFor="academicYearStart"
              className="text-sm font-medium text-gray-700"
            >
              Academic Year Start <span className="text-destructive">*</span>
            </Label>
            <Input
              id="academicYearStart"
              type="date"
              {...register("academicYearStart")}
              className="mt-1"
            />
            {formState.errors.academicYearStart && (
              <p className="text-destructive text-sm mt-1">
                {formState.errors.academicYearStart.message}
              </p>
            )}
          </div>

          <div>
            <Label
              htmlFor="academicYearEnd"
              className="text-sm font-medium text-gray-700"
            >
              Academic Year End <span className="text-destructive">*</span>
            </Label>
            <Input
              id="academicYearEnd"
              type="date"
              {...register("academicYearEnd")}
              className="mt-1"
            />
            {formState.errors.academicYearEnd && (
              <p className="text-destructive text-sm mt-1">
                {formState.errors.academicYearEnd.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <Label
            htmlFor="termSystem"
            className="text-sm font-medium text-gray-700"
          >
            Term System <span className="text-destructive">*</span>
          </Label>
          <Select
            value={watch("termSystem")}
            onValueChange={handleSystemChange}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select term system" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="semester">Semester (2 terms)</SelectItem>
              <SelectItem value="trimester">Trimester (3 terms)</SelectItem>
              <SelectItem value="quarter">Quarter (4 terms)</SelectItem>
            </SelectContent>
          </Select>
          {formState.errors.termSystem && (
            <p className="text-destructive text-sm mt-1">
              {formState.errors.termSystem.message}
            </p>
          )}
        </div>

        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2">
            Terms <span className="text-gray-400">(Optional)</span>
          </Label>
          <div className="flex flex-col gap-4">
            {terms?.map((_, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 bg-gray-50 border border-black p-3 rounded-md"
              >
                <div>
                  <Label className="block text-sm">Term Name</Label>
                  <Input
                    {...register(`terms.${index}.name`)}
                    disabled
                    placeholder="Semester 1 or First Term"
                    className="border-2 border-teall p-2 rounded-md w-full"
                  />
                  {formState.errors.terms?.[index]?.name && (
                    <p className="text-destructive text-sm">
                      {formState.errors.terms[index]?.name?.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label className="block text-sm">Start Date</Label>
                  <Input
                    type="date"
                    {...register(`terms.${index}.startDate`)}
                    className="border-2 border-primary p-2 rounded-md w-full"
                  />
                  {formState.errors.terms?.[index]?.startDate && (
                    <p className="text-destructive text-sm">
                      {formState.errors.terms[index]?.startDate?.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label className="block text-sm">End Date</Label>
                  <Input
                    type="date"
                    {...register(`terms.${index}.endDate`)}
                    className="border-2 border-success p-2 rounded-md w-full"
                  />
                  {formState.errors.terms?.[index]?.endDate && (
                    <p className="text-destructive text-sm">
                      {formState.errors.terms[index]?.endDate?.message}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Label
            htmlFor="currentTerm"
            className="text-sm font-medium text-gray-7"
          >
            Current Term <span className="text-destructive">*</span>
          </Label>
          <Select
            value={watch("currentTerm")}
            onValueChange={(value) => setValue("currentTerm", value)}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select current term" />
            </SelectTrigger>
            <SelectContent>
              {getValues("terms")?.map((term, index) => (
                <SelectItem key={index} value={term?.name as string}>
                  {term?.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {formState.errors.currentTerm && (
            <p className="text-destructive text-sm mt-1">
              {formState.errors.currentTerm.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
