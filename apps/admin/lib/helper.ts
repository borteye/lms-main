import { SchoolOnboardingData } from "@workspace/common/lib/admin-onboarding-schema";

export const createSchoolOnboardingFormData = (values: SchoolOnboardingData): FormData => {
  const formData = new FormData();

  const stringFields = [
    "schoolName",
    "institutionType",
    "address",
    "city",
    "state",
    "zipCode",
    "country",
    "contactEmail",
    "phoneNumber",
    "website",
    "socialMedia",
    "levelSystem",
    "academicYearStart",
    "academicYearEnd",
    "termSystem",
    "gradingSystem",
    "passingGrade",
    "timezone",
    "studentImportMethod",
  ];
  const fileFields = ["logo", "excelFile"];
  const arrayFields = ["departments", "subjects", "terms", "gradeScale"];

  stringFields.forEach((field) => {
    const value = values[field as keyof typeof values];
    if (value != null || value !== undefined || value !== "") {
      formData.append(field, value);
    }
  });

  fileFields.forEach((field) => {
    const value = values[field as keyof typeof values];
    if (value != null || value !== undefined || value !== "") {
      formData.append(field, value);
    }
  });

  arrayFields.forEach((field) => {
    const value = values[field as keyof typeof values];
    if (value != null || value !== undefined || value !== "") {
      formData.append(field, JSON.stringify(value));
    }
  });

  return formData;
};
