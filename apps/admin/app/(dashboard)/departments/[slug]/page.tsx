import { getSingleDepartmentAction } from "@/action/department";
import DepartmentDetails from "@/components/department/department-detail";
import { DepartmentDetailsType } from "@workspace/common/types";

export default async function DepartmentDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [response, _] = await getSingleDepartmentAction(slug);
  
  return <DepartmentDetails data={response?.data?.[0] as DepartmentDetailsType}  />;
}
