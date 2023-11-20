"use client";

import { useEffect, useState } from "react";

import { diffInSeconds, formatDuration } from "@/lib/shared/time";

interface StopWatchProps {
  startedAt: Date;
  className?: string;
}

function durationUntilNow(from: Date): number {
  return diffInSeconds(from, new Date());
}

function StopWatch({ startedAt, className }: StopWatchProps) {
  startedAt = new Date(startedAt);

  const [duration, setDuration] = useState(() => durationUntilNow(startedAt));

  useEffect(() => {
    const updateDuration = () => setDuration(durationUntilNow(startedAt));
    const id = window.setInterval(updateDuration, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <p className={className} suppressHydrationWarning>
      {formatDuration(duration)}
    </p>
  );
}

export { StopWatch };
