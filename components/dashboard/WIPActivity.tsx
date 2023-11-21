import { getCachedWorkInProgressActivity } from "@/lib/activity-log/services";

import { StopWatch } from "../shared/StopWatch";
import { StopActivity } from "./StopActivity";

interface WIPActivityProps {
  authorId: string;
}

async function WIPActivity({ authorId }: WIPActivityProps) {
  const activityLog = await getCachedWorkInProgressActivity(authorId);

  if (!activityLog) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-10">
      <div className="ring-gourd-900 hover:bg-carrot-100 flex cursor-pointer items-center justify-between px-6 py-4 ring-2 transition">
        <div>
          <StopWatch
            startedAt={new Date(activityLog.startedAt)}
            className="text-2xl font-medium"
          />
          <p>{activityLog.activity.title}</p>
        </div>
        <StopActivity activityLogId={activityLog.id} />
      </div>
    </div>
  );
}

export { WIPActivity };
