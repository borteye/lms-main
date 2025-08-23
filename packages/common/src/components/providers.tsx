"use client";

import * as React from "react";
import { Toaster } from "@workspace/ui/components/sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <main>
      {children}
      <Toaster richColors position="top-center" duration={10000} />
    </main>
  );
}
