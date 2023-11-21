import clsx from "clsx";

interface ProgressBarProps {
  percent: number;
  className?: string;
}

function ProgressBar({ percent, className }: ProgressBarProps) {
  return (
    <div className={clsx(className, "bg-carrot-200 h-2.5 w-full rounded-full")}>
      <div
        style={{ width: `${percent}%` }}
        className="bg-coffee-300 h-2.5 rounded-full"
      />
    </div>
  );
}

export { ProgressBar };
