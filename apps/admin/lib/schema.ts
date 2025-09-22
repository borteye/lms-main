import { z } from "@workspace/common/lib/server";

export const schoolProfileSchema = z.object({
  schoolName: z
    .string()
    .min(1, "School name is required")
    .min(2, "School name must be at least 2 characters"),
  institutionType: z.string().min(1, "Institution type is required"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State/Province is required"),
  zipCode: z.string().min(1, "ZIP/Postal code is required"),
  country: z.string().min(1, "Country is required"),
  contactEmail: z
    .string()
    .min(1, "Contact email is required")
    .email("Please enter a valid email address"),
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .min(10, "Please enter a valid phone number"),
  website: z.string().optional(),
  socialMedia: z.string().optional(),
  logo: z.any().optional(),
});

const termObject = z
  .object({
    name: z.string().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
  })
  .refine(
    (term) => {
      const values = [term.startDate, term.endDate];
      const filledCount = values.filter(Boolean).length;
      return filledCount === 0 || filledCount === values.length;
    },
    {
      message: "If you fill one field, all fields are required",
      path: ["startDate"],
    }
  );

const gradeObject = z
  .object({
    grade: z.string().optional(),
    minPercentage: z.string().optional(),
    maxPercentage: z.string().optional(),
    remark: z.string().optional(),
  })
  .refine(
    (grade) => {
      const values = [grade.minPercentage, grade.maxPercentage, grade.remark];
      const filledCount = values.filter(Boolean).length;
      return filledCount === 0 || filledCount === values.length;
    },
    {
      message: "If you fill one field, all fields are required",
      path: ["minPercentage"],
    }
  );

export const academicStructureSchema = z.object({
  levelSystem: z.string().min(1, "Academic level system is required"),
  departments: z.array(z.string()).optional(),
  subjects: z.array(z.string()).min(1, "At least one subject is required"),
  academicYearStart: z.string().min(1, "Academic year start date is required"),
  academicYearEnd: z.string().min(1, "Academic year end date is required"),
  termSystem: z.string().min(1, "Term system is required"),
  terms: z.array(termObject).optional(),
  currentTerm: z.string().min(1, "Current term is required"),
});

export const configurationSchema = z.object({
  gradingSystem: z.string().min(1, "Grading system is required"),
  gradeScale: z.array(gradeObject).optional(),
  passingGrade: z.string().min(1, "Passing grade is required"),
  timezone: z.string().min(1, "Timezone is required"),
});

export const optionalSetupSchema = z.object({
  studentImportMethod: z.string().optional(),
  excelFile: z.any().optional(),
});

export type SchoolProfileData = z.infer<typeof schoolProfileSchema>;
export type AcademicStructureData = z.infer<typeof academicStructureSchema>;
export type ConfigurationData = z.infer<typeof configurationSchema>;
export type OptionalSetupData = z.infer<typeof optionalSetupSchema>;

export const schoolOnboarding = z
  .object({
    step: z.number().min(1).max(4).optional(),
  })
  .merge(schoolProfileSchema)
  .merge(academicStructureSchema)
  .merge(configurationSchema)
  .merge(optionalSetupSchema)
  .partial();

export type SchoolOnboardingData = z.infer<typeof schoolOnboarding> & {
  schoolId?: string;
};

export const createDepartmentSchema = z.object({
  name: z.string().min(1, "Department name is required"),
  departmentCode: z.string().min(1, "Department code is required"),
  headOfDepartment: z.string().optional(),
});
export type CreateDepartmentData = z.infer<typeof createDepartmentSchema>;

export const createClassSchema = z.object({
  name: z.string().min(1, "Department name is required"),
  department: z.string().min(1, "Department is required"),
  level: z.string().min(1, "Level is required"),
  classTeacher: z.string().optional(),
});
export type CreateClassData = z.infer<typeof createClassSchema>;

export const createTeacherSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "First name is required"),
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .min(10, "Please enter a valid phone number"),
  contactEmail: z
    .string()
    .min(1, "Contact email is required")
    .email("Please enter a valid email address"),
  department: z.string().optional(),
  qualifications: z.array(z.string()).optional(),
});
export type CreateTeacherData = z.infer<typeof createTeacherSchema>;

export const createStudentSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "First name is required"),
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .min(10, "Please enter a valid phone number"),
  contactEmail: z
    .string()
    .min(1, "Contact email is required")
    .email("Please enter a valid email address"),
  class_id: z.string().optional(),
  stream: z.string().optional(),
});
export type CreateStudentData = z.infer<typeof createStudentSchema>;

export const createSubjectSchema = z.object({
  subjects: z.array(z.string()).min(1, "At least one subject is required"),
});
export type CreateSubjectData = z.infer<typeof createSubjectSchema>;

export const classAssignedSubjectTeacher = z.object({
  class: z.string().min(1, "Class is required"),
  teacher: z.string().optional(),
});

export const createCourseSchema = z.object({
  scope: z.string().min(1, "Scope is required"),
  subject: z.string().min(1, "Subject is required"),
  class: z.string().optional(),
  stream: z.string().optional(),
  teacher: z.string().optional(),
  class_assigned_subject_teacher: z
    .array(classAssignedSubjectTeacher)
    .optional(),
});
export type CreateCourseData = z.infer<typeof createCourseSchema>;
