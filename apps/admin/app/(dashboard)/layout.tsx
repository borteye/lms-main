import {
    SidebarProvider
} from "@workspace/ui/components/sidebar";
import { AppSidebar } from "@workspace/common/components/app-sidebar";
import HeaderBar from "@workspace/common/components/header-bar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar role="admin" />
      <main className="w-full h-screen overflow-hidden">
        <HeaderBar />
        <div className="px-3 pt-22 xl:px-6 overflow-y-scroll h-[calc(100vh-9px)]">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
