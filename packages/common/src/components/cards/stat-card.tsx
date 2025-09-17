import { SchoolStats } from "@workspace/common/types";
import { cn } from "@workspace/ui/lib/utils";
import {
  Users,
  BookOpen,
  GraduationCap,
  Layers,
  FolderOpen,
  Building2,
  TrendingUp,
  ClipboardList,
  Trophy,
} from "lucide-react";

const colors: Record<
  string,
  { bg: string; icon_bg: string; hover_bg: string; text: string }
> = {
  department: {
    bg: "bg-vivid-purple/80",
    hover_bg: "hover:bg-vivid-purple",
    icon_bg: "bg-yellow-400",
    text: "text-yellow-400",
  },
  students: {
    bg: "bg-primary/80",
    hover_bg: "hover:bg-primary",
    icon_bg: "bg-success",
    text: "text-success",
  },
  teachers: {
    bg: "bg-yellow-200",
    hover_bg: "hover:bg-yellow-400",
    icon_bg: "bg-teall",
    text: "text-teall",
  },
  classes: {
    bg: "bg-success/80",
    hover_bg: "hover:bg-success",
    icon_bg: "bg-vivid-purple",
    text: "text-vivid-purple",
  },
  subjects: {
    bg: "bg-teall/80",
    hover_bg: "hover:bg-teall",
    icon_bg: "bg-primary",
    text: "text-primary",
  },
  average_class_size: {
    bg: "bg-vivid-purple/80",
    hover_bg: "hover:bg-vivid-purple",
    icon_bg: "bg-yellow-400",
    text: "text-yellow-400",
  },
  pending_grading: {
    bg: "bg-vivid-purple/80",
    hover_bg: "hover:bg-vivid-purple",
    icon_bg: "bg-yellow-400",
    text: "text-yellow-400",
  },
  average_grade: {
    bg: "bg-success/80",
    hover_bg: "hover:bg-success",
    icon_bg: "bg-vivid-purple",
    text: "text-vivid-purple",
  },
};

const icons: Record<string, React.ElementType> = {
  department: Building2,
  students: Users,
  teachers: GraduationCap,
  classes: Layers,
  subjects: BookOpen,
  average_class_size: TrendingUp,
  pending_grading: ClipboardList,
  average_grade: Trophy,
};

export default function StatisticsCard({ data }: { data?: SchoolStats }) {
  const selectedColor =
    data?.id && colors[data.id as keyof typeof colors]
      ? colors[data.id as keyof typeof colors]
      : undefined;

  const Icon = data?.id ? icons[data.id as keyof typeof icons] : null;
  return (
    <div
      className={cn(
        "border-2 border-black rounded-lg w-full p-4 flex flex-col gap-4 hover:scale-102 hover:-translate-y-3 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out",
        selectedColor?.bg,
        selectedColor?.hover_bg
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-medium">{data?.label}</h3>
        <div
          className={cn(
            "p-1.5 rounded-md border border-black",
            selectedColor?.icon_bg
          )}
        >
          {Icon && <Icon size={22} className="w-6 h-6 text-white" />}
        </div>
      </div>
      <div>
        <h1 className={cn("text-4xl font-semibold", selectedColor?.text)}>
          {data?.value}
        </h1>
      </div>
    </div>
  );
}
