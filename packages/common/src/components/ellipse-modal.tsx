"use client";

import { EllipsisVertical, Eye } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import Link from "next/link";
import React from "react";

interface Props {
  link?: string;
  children1: React.ReactNode;
  children2?: React.ReactNode;
  children3?: React.ReactNode;
}

export default function EllipseModal({
  link,
  children1,
  children2,
  children3,
}: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="bg-primary hover:bg-yellow-400 hover:text-white p-1.5 rounded-md border border-black cursor-pointer">
          <EllipsisVertical size={20} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {link && (
          <DropdownMenuItem>
            <Link
              href={(link as string) ?? "#"}
              className="flex items-center gap-2"
            >
              <Eye /> View
            </Link>
          </DropdownMenuItem>
        )}

        {children1 && (
          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
            {children1}
          </DropdownMenuItem>
        )}
        {children2 && (
          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
            {children2}
          </DropdownMenuItem>
        )}
        {children3 && (
          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
            {children3}
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
