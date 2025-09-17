"use client";

import { Bell } from "lucide-react";
import { useEffect, useState } from "react";
import { MetaData } from "../types";

export default function HeaderBar() {
  const [user, setUser] = useState<MetaData | null>(null);

  useEffect(() => {
    try {
      const session = sessionStorage.getItem("user");
      if (session) {
        setUser(JSON.parse(session));
      }
    } catch (err) {
      console.error("Failed to parse user session:", err);
    }
  }, []);

  return (
    <div className="border-b backdrop-blur-sm drop-shadow-xs fixed top-0 right-0 w-full py-4 px-12">
      <div className="flex items-center justify-between">
        <div className="md:ml-[230px] w-full">
          <h1 className="text-black text-xl font-semibold">
            Dashboard Overview
          </h1>
          <p className="text-sm">TenaClass Admin Panel</p>
        </div>
        <div className="flex items-center justify-end w-full gap-4">
          <div className="border border-black bg-vivid-purple p-2.5 rounded-full">
            <Bell />
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-primary h-11.5 w-11.5 border border-black flex items-center justify-center rounded-full text-white font-medium text-lg">
              <p>B</p>
            </div>
            <div>
              <p className="text-sm font-bold capitalize">
                {user?.first_name ?? ""}
              </p>
              <p className="text-xs font-medium capitalize">
                {user?.role ?? ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
