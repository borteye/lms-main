import { montserrat } from "@workspace/common/lib/server";

import "@workspace/ui/globals.css";
import { Providers } from "@workspace/common/components/providers";
import { LocalStorageCleaner } from "@workspace/common/components/local-storage-cleaner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className}  font-sans antialiased `}>
        <LocalStorageCleaner />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
