import EllipseModal from "@workspace/common/components/ellipse-modal";
import { Users } from "lucide-react";
import DeleteModal from "@workspace/common/components/delete-modal";
import EditAnnouncement from "./edit-announcement";

export default function AnnouncementCard() {
  return (
    <div className="border-2 border-black p-4 flex flex-col gap-5 rounded-lg bg-success/50">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-items gap-4">
          <h1 className="text-lg font-semibold">Academic Term Opening</h1>
          <div className="text-sm flex items-center gap-2 border border-black w-fit bg-primary py-0.5 px-3 rounded-full text-white">
            <Users size={16} /> Everyone
          </div>
        </div>
        <EllipseModal
          children1={<EditAnnouncement />}
          children2={<DeleteModal subject="announcement" />}
        />
      </div>

      <div className="flex flex-col gap-2">
        <div>
          <span className="font-medium">By Admin</span> . 1/10/2024
        </div>
        <div>
          <span className="font-medium">Department:</span> Science
        </div>
      </div>
      <p>
        Welcome back students and teachers! The new academic term begins on
        Monday, January 15th. Please ensure all necessary preparations are
        complete.
      </p>
    </div>
  );
}
