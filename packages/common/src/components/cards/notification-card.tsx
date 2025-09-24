import { getRandomBgColor } from "@workspace/common/lib/utils";
import { Notification1 } from "@workspace/common/types";
import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import {
  AlertCircle,
  CheckCircle,
  Download,
  File,
  FileText,
} from "lucide-react";
import Link from "next/link";

type NotificationType = "file" | "alert" | "success";

interface NotificationCardProps {
  type: NotificationType;
}

export default function NotificationCard({ data }: { data: Notification1 }) {
  const getTypeIcon = () => {
    switch (data?.type) {
      case "file":
        return <FileText className="h-5 w-5 text-blue-600" />;
      case "alert":
        return <AlertCircle className="h-5 w-5 text-red-600" />;
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-600" />;
    }
  };
  return (
    <div
      className={cn(
        "border border-l-4 border-l-destructive border-black rounded-lg flex items-center p-4 gap-4",
        `${getRandomBgColor()}/40`
      )}
    >
      {getTypeIcon()}{" "}
      <div className="w-full">
        <div className="flex items-center justify-between gap-4">
          <h1 className="font-semibold text-lg">{data?.title}</h1>
          <a href={data?.file_url} download style={{ textDecoration: "none" }}>
            <Button>
              <Download /> Download
            </Button>
          </a>
        </div>

        <div>
          <p className="text-sm">
            <span>Description: </span>
            {data?.message}
          </p>
          <div>
            <p className="text-sm font-semibold">Details:</p>
            <div className="flex gap-5">
              {data?.metadata &&
                (
                  Object.entries(data.metadata) as [
                    keyof typeof data.metadata,
                    number,
                  ][]
                ).map(([key, value]) => (
                  <p key={key}>
                    {key}: {value}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
