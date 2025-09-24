"use client";

import { Bell } from "lucide-react";
import { useEffect, useState } from "react";
import { MetaData } from "../types";
import Link from "next/link";
import { getInitials } from "../lib/utils";

export default function HeaderBar({ role }: { role?: string }) {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser ? JSON.parse(storedUser) : null);
  }, []);

  return (
    <div className="border-b backdrop-blur-sm drop-shadow-xs fixed top-0 right-0 w-full py-4 px-12">
      <div className="flex items-center justify-between">
        <div className="md:ml-[230px] w-full">
          <h1 className="text-black text-xl font-semibold">
            Dashboard Overview
          </h1>
          <p className="text-sm capitalize">
            TenaClass {user?.role ?? role} Panel
          </p>
        </div>
        <div className="flex items-center justify-end w-full gap-4">
          <Link
            href="/notifications"
            className="border border-black bg-vivid-purple p-2.5 rounded-full"
          >
            <Bell />
          </Link>
          <div className="flex items-center gap-2">
            <div className="bg-primary h-11.5 w-11.5 border border-black flex items-center justify-center rounded-full text-white font-medium text-lg">
              <p className="capitalize">
                {getInitials(user?.first_name || user?.firstName)}
              </p>
            </div>
            <div>
              <p className="text-sm font-bold capitalize">
                {(user?.first_name || user?.firstName) ?? ""}
              </p>
              <p className="text-xs font-medium capitalize">
                {user?.role ?? role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
