import clsx from "clsx";

interface GreetingProps {
  name: string;
  className?: string;
}

function Greeting({ name, className }: GreetingProps) {
  return (
    <div className={clsx("text-xl font-medium", className)}>
      <p>Hi {name},</p>
      <p>Let&apos;s see your progress...</p>
    </div>
  );
}

export { Greeting };
