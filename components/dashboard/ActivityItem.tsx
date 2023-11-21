"use client";

import { useCallback, useMemo } from "react";
import { Activity, ActivityLog } from "@prisma/client";

import { startActivity } from "@/lib/activity-log/services";
import { diffInSeconds, formatDuration } from "@/lib/shared/time";

import { PlaySolid } from "../icons/PlaySolid";
import { ProgressBar } from "../shared/ProgressBar";

interface ExtendedActivity extends Activity {
  activityLogs: ActivityLog[];
}

interface ActivityItemProps {
  activity: ExtendedActivity;
}

interface FormattedActivity {
  title: string;
  progressPercent: number;
  maxDuration: { value: number; text: string };
  totalDuration: { value: number; text: string };
}

function formatActivity(activity: ExtendedActivity): FormattedActivity {
  const maxDuration = activity.maxDuration * 60;

  const totalDuration = activity.activityLogs.reduce(
    (total, log) =>
      total + diffInSeconds(new Date(log.startedAt), new Date(log.endedAt!)),
    0,
  );

  return {
    title: activity.title,
    maxDuration: {
      value: maxDuration,
      text: formatDuration(maxDuration),
    },
    totalDuration: {
      value: totalDuration,
      text: formatDuration(totalDuration),
    },
    progressPercent: Math.max(
      Math.min((totalDuration / maxDuration) * 100, 100),
      3, // which is the minimum percent that the progress bar can display well
    ),
  };
}

function ActivityItem({ activity }: ActivityItemProps) {
  const formattedActivity = useMemo(() => formatActivity(activity), [activity]);

  const handleStartActivity = useCallback(() => {
    startActivity({ activityId: activity.id });
  }, [activity.id]);

  return (
    <div
      className="ring-primary flex w-full cursor-pointer flex-col rounded-lg px-4 py-2 shadow ring-1 transition hover:bg-neutral-50"
      onClick={handleStartActivity}
    >
      <div className="flex justify-between gap-4">
        <p className="grow truncate">{formattedActivity.title}</p>
        <p className="shrink-0">{formattedActivity.totalDuration.text}</p>
      </div>
      <div className="flex items-center justify-between gap-2">
        <ProgressBar percent={formattedActivity.progressPercent} />
        <PlaySolid className="text-xl" />
      </div>
    </div>
  );
}

export { ActivityItem };
