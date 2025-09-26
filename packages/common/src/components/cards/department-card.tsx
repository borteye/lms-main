"use client";

import { getRandomCardColor } from "@workspace/common/lib/utils";
import { Departments } from "@workspace/common/types";
import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import { Building2, Eye } from "lucide-react";
import Link from "next/link";
import EllipseModal from "../ellipse-modal";
import DeleteModal from "../delete-modal";
import { useDeleteDepartment } from "@workspace/common/hooks/use-delete-common";

interface DepartmentCardProps {
  data: Departments;
  children?: React.ReactNode;
}

export default function DepartmentCard({
  children,
  data,
}: DepartmentCardProps) {
  const { handleDelete, isLoading } = useDeleteDepartment();
  const cardColor = getRandomCardColor();

  const allStreams =
    data?.classes_with_streams?.flatMap((cls) => cls.streams ?? []) ?? [];

  return (
    <div
      className={cn(
        "p-4 border-2 border-black rounded-lg flex flex-col gap-6",
        cardColor?.bg
      )}
    >
      <div className="flex items-center gap-2 justify-between">
        <div className="flex gap-2">
          <div
            className={cn(
              "text-white w-fit p-2.5 border border-black rounded-md",
              cardColor?.icon_bg
            )}
          >
            <Building2 />
          </div>
          <div>
            <h1 className="text-lg font-medium">{data?.department_name}</h1>
            <p className="text-sm capitalize">
              {data?.department_code ?? "DEPARTMENT CODE: N/A"}
            </p>
          </div>
        </div>
        <EllipseModal
          children1={
            <DeleteModal
              subject={data?.department_name + " " + "department"}
              onDelete={() => handleDelete(data?.department_id)}
              loading={isLoading}
            />
          }
        />
      </div>
      {/* <p>Classes 1-6 with stream support</p> */}
      <div className="flex items-center gap-2 justify-between">
        <p>HOD:</p>
        <p className="font-medium">
          {data?.hod?.trim() ? data?.hod : "Not Assigned"}
        </p>
      </div>
      <div className="flex items-center gap-2 justify-between">
        <p>Available Streams:</p>
        <div className="flex items-center gap-2 font-medium">
          {allStreams && allStreams.length > 0 ? (
            allStreams.map((stream) => (
              <p
                key={stream.stream_id}
                className="bg-primary text-white text-center flex items-center justify-center w-7 h-7 border border-black rounded-full"
              >
                {stream.stream_name}
              </p>
            ))
          ) : (
            <p>N/A</p>
          )}
        </div>
      </div>
      <div className="w-full h-0.5 bg-black" />
      <div className="flex items-center justify-evenly gap-4">
        <div className="text-center">
          <h1 className="text-xl font-semibold">{data?.total_classes}</h1>
          <p>Classes</p>
        </div>
        <div className="text-center">
          <h1 className="text-xl font-semibold">{data?.total_students}</h1>
          <p>Students</p>
        </div>
        <div className="text-center">
          <h1 className="text-xl font-semibold">{data?.total_teachers}</h1>
          <p>Teachers</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <Link href={`/departments/${data?.department_id}`}>
          <Button className={cn(cardColor?.icon_bg)}>
            <Eye /> View
          </Button>
        </Link>
        {children}
      </div>
    </div>
  );
}
