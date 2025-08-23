import { montserrat } from "@workspace/common/lib/server";

import "@workspace/ui/globals.css";
import { Providers } from "@workspace/common/components/providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className}  font-sans antialiased `}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
