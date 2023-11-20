"use server";

import { unstable_cache } from "next/cache";
import prisma from "@/prisma/client";

import { activityLogCache } from "../activity-log/cache";
import { DEFAULT_SERVICE_CACHE_REVALIDATE } from "../shared/constants";
import { activityCache } from "./cache";

export async function getCachedActivities(authorId: string) {
  async function getActivities() {
    return await prisma.activity.findMany({
      where: {
        authorId,
        deletedAt: null,
        // TODO: Filter today's activity logs only
        // NOTE: Should support timezone
        // activityLogs: {},
      },
      include: {
        activityLogs: {
          where: {
            endedAt: { not: null },
          },
        },
      },
      orderBy: { id: "asc" },
    });
  }

  return unstable_cache(getActivities, [`get-activities-${authorId}`], {
    tags: [
      activityCache.tag.byAuthorId(authorId),
      activityLogCache.tag.byAuthorId(authorId),
    ],
    revalidate: DEFAULT_SERVICE_CACHE_REVALIDATE,
  })();
}

interface CreateActivityParams {
  title: string;
  maxDuration: number;
  authorId: string;
}

export async function createActivity({
  title,
  maxDuration,
  authorId,
}: CreateActivityParams) {
  const newActivity = await prisma.activity.create({
    data: {
      title,
      maxDuration,
      authorId,
    },
  });

  activityCache.invalidate({ authorId });

  return newActivity;
}
