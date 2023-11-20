"use client";

import clsx from "clsx";

interface ProgressBarProps {
  percent: number;
  className?: string;
}

function ProgressBar({ percent, className }: ProgressBarProps) {
  return (
    <div className={clsx(className, "h-2.5 w-full rounded-full bg-gray-200")}>
      <div
        style={{ width: `${percent}%` }}
        className="h-2.5 rounded-full bg-primary-600"
      />
    </div>
  );
}

export { ProgressBar };
