import { Building2, GraduationCap, Settings, Puzzle } from "lucide-react";

export const steps = [
  {
    id: 1,
    title: "School Profile",
    description: "Basic school information",
    icon: <Building2 className="text-lg" />,
    bgColor: "bg-primary",
    color: "text-primary",
  },
  {
    id: 2,
    title: "Academic Structure",
    description: "Configure academic levels",
    icon: <GraduationCap className="text-lg" />,
    bgColor: "bg-teall",
    color: "text-teall",
  },
  {
    id: 3,
    title: "Configuration",
    description: "Grading & permissions",
    icon: <Settings className="text-lg" />,
    bgColor: "bg-vivid-purple",
    color: "text-vivid-purple",
  },
  {
    id: 4,
    title: "Optional Setup",
    description: "Integrations & imports",
    icon: <Puzzle className="text-lg" />,
    bgColor: "bg-yellow-400",
    color: "text-yellow-400",
  },
];
