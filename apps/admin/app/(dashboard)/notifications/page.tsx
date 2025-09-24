import { getNotificationsAction } from "@/action/school";
import NotificationCard from "@workspace/common/components/cards/notification-card";

export default async function NotificationPage() {
  const [response, _] = await getNotificationsAction();

  return (
    <div>
      <h1 className="text-3xl font-semibold pl-1 border-l-4 border-l-success">
        Notifications
      </h1>
      <div className="flex flex-col gap-3 mt-6">
        {response && response?.data?.length ? (
          response?.data?.map((data) => <NotificationCard data={data} />)
        ) : (
          <h1>No notifications</h1>
        )}
      </div>
    </div>
  );
}
