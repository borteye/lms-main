// import AddAnnouncement from "@/components/announcements/add-announcement";
import { Input } from "@workspace/ui/components/input";
import { Filter, Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import AddAnnouncement from "@/components/accouncement/add-announcement";
import AnnouncementCard from "@/components/accouncement/announcement-card";
// import AnnouncementCard from "@/components/announcements/announcement-card";

export default function AnnouncementsPage() {
  return (
    <div className="flex flex-col gap-y-12">
      <div className="flex md:items-end flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold border-l-4 border-l-vivid-purple pl-1">
            Announcements
          </h1>
          <p className="text-sm">Manage school announcements</p>
        </div>
        <AddAnnouncement />
      </div>
      <div className="border-2 border-black p-4 my-8 rounded-md flex flex-col lg:flex-row items-center justify-between gap-2">
        <div className="relative w-full lg:w-3/4">
          <Input placeholder="Search announcement" className="w-full" />
          <Search className="absolute top-1.5 right-4" />
        </div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <Filter />
            <SelectValue placeholder="Recipients" />
          </SelectTrigger>
          <SelectContent className="bg-vivid-purple text-white">
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <AnnouncementCard />
      </div>
    </div>
  );
}
