"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function GoBack({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <div
      className="flex items-center gap-2 mb-4 cursor-pointer"
      onClick={() => router.back()}
    >
      <ChevronLeft />
      {children}
    </div>
  );
}
