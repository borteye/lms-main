"use client";

import * as React from "react";
import { Toaster } from "@workspace/ui/components/sonner";
import { NuqsAdapter } from "nuqs/adapters/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <NuqsAdapter>
        {children}
        <Toaster richColors position="top-center" duration={10000} />
      </NuqsAdapter>
    </main>
  );
}
