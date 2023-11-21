"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { SettingSolid } from "../icons/SettingSolid";

interface TopNavigationProps {}

const navigationConfig: Record<string, { title: string }> = {
  u: { title: "Timer" },
};

function getNavigationConfig(segment: string | null) {
  segment = segment ?? "";
  return navigationConfig[segment];
}

function TopNavigation(_props: TopNavigationProps) {
  const segment = useSelectedLayoutSegment();

  const config = useMemo(() => getNavigationConfig(segment), [segment]);

  if (!config) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 top-0 z-10">
      <div className="flex items-end px-4 pt-4">
        {/* Font have a padding bottom itself, that's why leading-none is not enough */}
        {/* TODO: Migrate to another font */}
        <p className="mb-[-2px] grow text-2xl font-medium leading-none">
          {config.title}
        </p>
        <div className="contents">
          <Link href="/settings">
            <SettingSolid className="text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export { TopNavigation };
