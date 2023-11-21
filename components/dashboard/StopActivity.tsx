"use client";

import { useCallback } from "react";

import { stopActivityLog } from "@/lib/activity-log/services";

import { StopSolid } from "../icons/StopSolid";

interface StopActivityProps {
  activityLogId: string;
}

function StopActivity({ activityLogId }: StopActivityProps) {
  const handleStopActivityLog = useCallback(() => {
    stopActivityLog({ activityLogId });
  }, [activityLogId]);

  return (
    <button
      className="flex h-10 w-10 items-center justify-center rounded-full bg-red-400 ring-4 ring-red-200 hover:bg-red-500"
      onClick={handleStopActivityLog}
    >
      <StopSolid className="text-carrot-50 text-2xl" />
    </button>
  );
}

export { StopActivity };
