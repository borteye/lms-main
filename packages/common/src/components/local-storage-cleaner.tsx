"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function LocalStorageCleaner() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/onboarding") {
      localStorage.removeItem("schoolId");
    }
  }, [pathname]);

  return null;
}
