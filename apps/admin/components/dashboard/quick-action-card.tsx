import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";
import { JSX } from "react";

interface QuickActionCardProps {
  id: number;
  title: string;
  button: string;
  sub: string;
  icon: JSX.Element;
  color: string;
  card: string;
  link: string;
}

export default function QuickActionCard({
  action,
}: {
  action: QuickActionCardProps;
}) {
  return (
    <div
      className={cn(
        "flex items-start border-2 border-black rounded-md gap-4 p-4",
        action?.card
      )}
    >
      <div
        className={cn(
          "border border-black rounded-md p-2 w-fit",
          action?.color
        )}
      >
        {action?.icon}
      </div>
      <div className="w-full flex flex-col gap-2">
        <h1 className="font-semibold">{action?.title}</h1>
        <p>{action?.sub}</p>
        <Link href={action?.link}>
          <Button
            className={cn("border border-black w-full", action?.color)}
          >
            <Plus /> {action?.button}
          </Button>
        </Link>
      </div>
    </div>
  );
}
