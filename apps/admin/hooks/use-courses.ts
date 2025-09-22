import { createCourseAction, createSubjectAction } from "@/action/school";
import {
  CreateCourseData,
  createCourseSchema,
  CreateSubjectData,
  createSubjectSchema,
} from "@/lib/schema";
import { useReactHookForm, zodResolver } from "@workspace/ui/lib/client";
import { toast } from "@workspace/ui/lib/server";
import { useState } from "react";

export function useAddSubject() {
  const [newSubject, setNewSubject] = useState("");

  const defaultValues = {
    subjects: [],
  };

  const { formState, watch, setValue, handleSubmit, reset, getValues } =
    useReactHookForm<CreateSubjectData>({
      defaultValues,
      resolver: zodResolver(createSubjectSchema),
    });

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

  const onSubmit: (values: CreateSubjectData) => Promise<void> = async (
    values: CreateSubjectData
  ) => {
    const [response, error] = await createSubjectAction(values);
    if (error) {
      const errorMessage =
        error.message ||
        error.errors?.[0]?.errorMessage ||
        "Creating subject failed. Please try again.";
      toast.error(errorMessage);
    } else if (response) {
      reset();
      toast.success(response.message);
      window.location.reload();
    }
  };

  return {
    watch,
    formState,
    handleSubmit,
    onSubmit,
    newSubject,
    setNewSubject,
    addSubject,
    removeSubject,
    reset,
  };
}

export function useAddCourse() {
  const [open, setOpen] = useState(false);

  const defaultValues = {
    scope: "",
    subject: "",
    class: "",
    stream: "",
    teacher: "",
    class_assigned_subject_teacher: [],
  };

  const { formState, watch, setValue, handleSubmit, reset, register } =
    useReactHookForm<CreateCourseData>({
      defaultValues,
      resolver: zodResolver(createCourseSchema),
    });

  const onSubmit: (values: CreateCourseData) => Promise<void> = async (
    values: CreateCourseData
  ) => {
    console.log("courses", values);
    const [response, error] = await createCourseAction(values);
    if (error) {
      const errorMessage =
        error.message ||
        error.errors?.[0]?.errorMessage ||
        "Creating course failed. Please try again.";
      toast.error(errorMessage);
    } else if (response) {
      reset();
      toast.success(response.message);
      window.location.reload();
    }
  };

  return {
    open,
    setOpen,
    watch,
    formState,
    handleSubmit,
    onSubmit,
    reset,
    setValue,
    register,
  };
}
