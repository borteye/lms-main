import { Button } from "@workspace/ui/components/button";
import { Building2, EllipsisVertical, Eye, SquarePen } from "lucide-react";
import Link from "next/link";

interface DepartmentCardProps {
  children?: React.ReactNode;
}

export default function DepartmentCard({ children }: DepartmentCardProps) {
  return (
    <div className="p-4 border-2 border-black rounded-lg bg-vivid-purple/50 flex flex-col gap-6">
      <div className="flex items-center gap-2 justify-between">
        <div className="flex gap-2">
          <div className="bg-primary text-white w-fit p-2.5 border border-black rounded-md">
            <Building2 />
          </div>
          <div>
            <h1 className="text-lg font-medium">PRIMARY</h1>
            <p className="text-sm">PRIMARY</p>
          </div>
        </div>
        <div className="bg-vivid-purple hover:bg-primary hover:text-white p-1.5 rounded-md border border-black cursor-pointer">
          <EllipsisVertical size={20} />
        </div>
      </div>
      <p>Classes 1-6 with stream support</p>
      <div className="flex items-center gap-2 justify-between">
        <p>HOD:</p>
        <p className="font-medium">Adolph</p>
      </div>
      <div className="flex items-center gap-2 justify-between">
        <p>Class Range:</p>
        <p className="font-medium">Class 1 - Class 6</p>
      </div>
      <div className="flex items-center gap-2 justify-between">
        <p>Available Streams:</p>
        <div className="flex items-center gap-2 font-medium">
          <p className="bg-primary text-white text-center flex items-center justify-center w-7 h-7 border border-black rounded-full">
            A
          </p>
          <p className="bg-vivid-purple text-white text-center flex items-center justify-center w-7 h-7 border border-black rounded-full">
            A
          </p>
        </div>
      </div>
      <div className="w-full h-0.5 bg-black" />
      <div className="flex items-center justify-evenly gap-4">
        <div className="text-center">
          <h1 className="text-xl font-semibold">12</h1>
          <p>Classes</p>
        </div>
        <div className="text-center">
          <h1 className="text-xl font-semibold">12</h1>
          <p>Students</p>
        </div>
        <div className="text-center">
          <h1 className="text-xl font-semibold">12</h1>
          <p>Teachers</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <Link href="/departments/business">
          <Button>
            <Eye /> View
          </Button>
        </Link>
        {children}
      </div>
    </div>
  );
}
