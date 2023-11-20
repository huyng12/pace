import { getCachedActivities } from "@/lib/activity/services";

import { ActivityItem } from "./ActivityItem";

interface ActivityListProps {
  authorId: string;
}

async function ActivityList({ authorId }: ActivityListProps) {
  const activities = await getCachedActivities(authorId);

  return (
    <div className="flex flex-col gap-3">
      {activities.map((activity) => (
        <ActivityItem key={activity.id} activity={activity} />
      ))}
    </div>
  );
}

export { ActivityList };
