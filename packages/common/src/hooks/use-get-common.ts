import useSWR from "swr";
import {
  getClassroomLevelsAction,
  getDepartmentsAction,
} from "../actions/common";

export function useGetClassroomLevels() {
  const { data, isLoading } = useSWR(
    "/api/class-levels",
    async () => {
      const [response, error] = await getClassroomLevelsAction();
      if (error) {
        console.error("Error fetching classroom levels:", error);
        return;
      }
      return response?.data;
    },
    { revalidateOnMount: true }
  );
  return {
    data,
    isLoading,
  };
}
export function useGetDepartments() {
  const { data, isLoading } = useSWR(
    "/api/departments",
    async () => {
      const [response, error] = await getDepartmentsAction();
      if (error) {
        console.error("Error fetching departments:", error);
        return;
      }
      return response?.data;
    },
    { revalidateOnMount: true }
  );
  return {
    data,
    isLoading,
  };
}
