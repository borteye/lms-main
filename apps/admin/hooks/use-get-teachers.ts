import { getTeachersAction } from "@/action/school";
import { useSWR } from "@workspace/common/lib/client";
import { useState } from "react";

export default function useGetTeachers() {
  const [searchTeacher, setSearchTeacher] = useState("");
  const [teacherName, setTeacherName] = useState("");

  const { data, isLoading } = useSWR(
    "/api/admin/school/teachers",
    async () => {
      const [response, error] = await getTeachersAction();
      if (error) {
        console.error("Error fetching teachers:", error);
        return;
      }
      return response?.data;
    },
    { revalidateOnMount: true }
  );

  const filteredTeachers = data?.filter((teacher) => {
    if (!searchTeacher) return true;

    const firstName = (teacher.first_name || "").toString().trim();
    const lastName = (teacher.last_name || "").toString().trim();

    const fullName = `${firstName} ${lastName}`.toLowerCase().trim();
    const searchTerm = searchTeacher.toLowerCase().trim();

    return fullName.includes(searchTerm);
  });

  return {
    data: filteredTeachers,
    isLoading,
    setSearchTeacher,
    searchTeacher,
    teacherName,
    setTeacherName,
  };
}
