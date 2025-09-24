"use client";

import { Church } from "lucide-react";
import { formatNow } from "../lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Banner() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser ? JSON.parse(storedUser) : null);
  }, []);

  return (
    <div className="admin_banner flex items-center justify-between px-6 py-12 text-white rounded-2xl border-2 border-black">
      <div className="flex flex-col gap-y-4">
        <h1 className="text-3xl font-semibold">
          Welcome back,{" "}
          <span className="capitalize">
            {user?.firstName || user?.first_name}!
          </span>
        </h1>
        <p className="text-sm">
          Here's an overview of your school's learning management system.
        </p>
        <div className="flex items-center gap-2">
          <Church /> {user?.schoolName}
        </div>
        <p className="text-sm font-semibold">{formatNow}</p>
      </div>

      {user?.schoolLogo ? (
        <div className="p-6 bg-white/50 w-fit rounded-full">
          <Image
            src={user?.schoolLogo || ""}
            alt="logo"
            width={1000}
            height={1000}
            className="w-22 h-22"
          />
        </div>
      ) : (
        <div className="p-5 bg-white/50 w-fit rounded-full">
          <Church size={52} />
        </div>
      )}
    </div>
  );
}
