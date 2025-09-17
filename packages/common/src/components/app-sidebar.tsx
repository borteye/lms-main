"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar";
import { usePathname } from "next/navigation";
import { bottomItems, navigationItems } from "@workspace/common/lib/loops";
import { Role } from "../types";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export function AppSidebar({ role }: { role?: Role }) {
  const [openTab, setOpenTab] = useState<string | null>(null);
  const path = usePathname();

  useEffect(() => {
    const activeParent = navigationItems
      .filter((item) => item.permissions.includes(role ?? "student"))
      .find((item) =>
        item.children?.some((child) => path.includes(child.href))
      );

    if (activeParent && openTab !== activeParent.label) {
      setOpenTab(activeParent.label);
    }
  }, [path, role, openTab]);

  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <div className="w-14 h-14 border-2 border-black bg-primary rounded-lg  flex items-center justify-center">
            <span className="text-white font-bold text-3xl">T</span>
          </div>
          <div className="text-white">
            <h1 className="text-lg font-bold">TenaClass</h1>
            <p className="text-sm text-black font-medium capitalize">
              {role} Panel
            </p>
          </div>
        </div>

        <div className="w-full h-1 bg-gradient-to-r from-teall via-black to-teall" />
      </SidebarHeader>
      <SidebarContent className="no-scrollbar">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems
                .filter((item) => item.permissions.includes(role ?? "student"))
                .map((item) => {
                  // Check if any child is active
                  const hasActiveChild = item.children?.some((child) =>
                    path.includes(child.href)
                  );

                  // Only make parent active if no child is active
                  const isParentActive =
                    path.includes(item.href) && !hasActiveChild;
                  return (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton isActive={isParentActive} asChild>
                        <a
                          href={item.href}
                          onClick={(e) => {
                            if (item.children) {
                              e.preventDefault(); // prevent page navigation
                              setOpenTab(
                                openTab === item.label ? null : item.label
                              );
                            }
                          }}
                        >
                          <item.icon />
                          <span>{item.label}</span>

                          {item.children && (
                            <ChevronDown
                              className={`ml-auto h-2 w-2 transition-transform ${
                                openTab === item.label ? "rotate-180" : ""
                              }`}
                            />
                          )}
                        </a>
                      </SidebarMenuButton>
                      {/* Sub items */}
                      {item.children && openTab === item.label && (
                        <div className="relative ml-6 mt-1 space-y-1">
                          {/* vertical line */}
                          <div className="absolute left-0 top-0 h-full w-[2px] bg-vivid-purple" />

                          <div className="pl-4 space-y-1">
                            {item.children.map((sub, j) => (
                              <SidebarMenuButton
                                asChild
                                key={j}
                                isActive={path.includes(sub.href)}
                              >
                                <a href={sub.href}>{sub.label}</a>
                              </SidebarMenuButton>
                            ))}
                          </div>
                        </div>
                      )}
                    </SidebarMenuItem>
                  );
                })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-10">
          <SidebarGroupContent>
            <SidebarMenu>
              {bottomItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.href.includes(path)}
                  >
                    <a href={item.href} className="flex items-center gap-3">
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t-2 border-black">
        <div className="p-4">
          <div className="flex items-center gap-2 text-sm text-black">
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            <span>TenaClass @2025</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
