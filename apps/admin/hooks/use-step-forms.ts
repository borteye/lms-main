"use client";

import {
  AcademicStructureData,
  academicStructureSchema,
  ConfigurationData,
  configurationSchema,
  OptionalSetupData,
  optionalSetupSchema,
  SchoolProfileData,
  schoolProfileSchema,
} from "@workspace/common/lib/admin-onboarding-schema";
import { useReactHookForm, zodResolver } from "@workspace/ui/lib/client";

export default function useStepForms() {
  const schoolProfileForm = useReactHookForm<SchoolProfileData>({
    resolver: zodResolver(schoolProfileSchema),
    defaultValues: {
      schoolName: "",
      institutionType: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      contactEmail: "",
      phoneNumber: "",
      website: "",
      socialMedia: "",
      logo: null,
    },
  });

  const academicStructureForm = useReactHookForm<AcademicStructureData>({
    resolver: zodResolver(academicStructureSchema),
    defaultValues: {
      levelSystem: "",
      departments: [],
      subjects: [],
      academicYearStart: "",
      academicYearEnd: "",
      termSystem: "",
      terms: [],
    },
  });

  const configurationForm = useReactHookForm<ConfigurationData>({
    resolver: zodResolver(configurationSchema),
    defaultValues: {
      gradingSystem: "",
      gradeScale: [],
      passingGrade: "",
      timezone: "",
    },
  });

  const optionalSetupForm = useReactHookForm<OptionalSetupData>({
    resolver: zodResolver(optionalSetupSchema),
    defaultValues: {
      studentImportMethod: "",
      excelFile: null,
    },
  });

  return {
    schoolProfileForm,
    academicStructureForm,
    configurationForm,
    optionalSetupForm,
  };
}
