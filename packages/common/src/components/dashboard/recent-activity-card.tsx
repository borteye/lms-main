import { UserPlus } from "lucide-react";

export default function RecentActivityCard() {
  return (
    <div className="flex items-start gap-4 hover:bg-accent p-4 rounded-lg">
      <div className="bg-success p-2 w-fit rounded-md border border-black">
        <UserPlus size={22} className="text-white" />
      </div>
      <div className="w-full text-base">
        <div className="flex items-center justify-between gap-2">
          <h1 className="font-semibold ">New student enrolled</h1>
          <p className="bg-success border border-black rounded-full font-semibold text-sm text-white py-1 px-2 w-fit">
            enrollment
          </p>
        </div>
        <h1>Kwame Ashante joined SHS Science B</h1>
        <p className="text-sm">2 mins ago</p>
      </div>
    </div>
  );
}
