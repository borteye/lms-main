import {
  Settings,
  LayoutDashboard,
  BookOpen,
  FileText,
  GraduationCap,
  LogOut,
  Users,
  School,
  Building2,
  Megaphone,
} from "lucide-react";

export const navigationItems = [
  {
    id: "dashboard",
    label: "Overview",
    icon: LayoutDashboard,
    href: "/dashboard",
    permissions: ["teacher", "admin", "student"],
  },
  {
    id: "department",
    label: "Departments",
    icon: Building2,
    href: "/departments",
    permissions: ["admin"],
  },
  {
    id: "class",
    label: "Classrooms",
    icon: School,
    href: "/classrooms",
    permissions: ["admin"],
  },
  {
    id: "users",
    label: "User Management",
    icon: Users,
    href: "#",
    permissions: ["admin"],
    children: [
      {
        id: "teachers",
        label: "Teachers",
        href: "/user-management/teachers",
        permissions: ["admin"],
      },
      {
        id: "students",
        label: "Students",
        href: "/user-management/students",
        permissions: ["admin"],
      },
    ],
  },
  {
    id: "courses",
    label: "My Courses",
    icon: BookOpen,
    href: "/courses",
    permissions: ["student", "teacher"],
  },
  {
    id: "assignments",
    label: "Assignments",
    icon: FileText,
    href: "/assignments",
    permissions: ["student", "teacher"],
  },
  {
    id: "courses",
    label: "Courses",
    icon: BookOpen,
    href: "/courses",
    permissions: ["admin"],
  },
  {
    id: "assignments",
    label: "Assignments",
    icon: FileText,
    href: "/assignments",
    permissions: ["student"],
  },
  {
    id: "grades",
    label: "Grades",
    icon: GraduationCap,
    href: "/grades",
    permissions: ["student"],
  },
  {
    id: "announcement",
    label: "Announcements",
    icon: Megaphone,
    href: "/announcements",
    permissions: ["teacher", "admin", "student"],
  },
];

export const bottomItems = [
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    href: "/settings",
    permissions: ["teacher", "admin", "student"],
  },
  {
    id: "logout",
    label: "Log Out",
    icon: LogOut,
    href: "/logout",
    permissions: ["teacher", "admin", "student"],
  },
];
