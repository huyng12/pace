"use server";

import { unstable_cache } from "next/cache";
import prisma from "@/prisma/client";

import { activityCache } from "../activity/cache";
import { DEFAULT_SERVICE_CACHE_REVALIDATE } from "../shared/constants";
import { activityLogCache } from "./cache";

export async function getCachedWorkInProgressActivity(authorId: string) {
  async function getWorkInProgressActivity() {
    return await prisma.activityLog.findFirst({
      where: {
        endedAt: null,
        activity: {
          authorId,
          deletedAt: null,
        },
      },
      include: {
        activity: true,
      },
    });
  }

  return unstable_cache(
    getWorkInProgressActivity,
    [`get-work-in-progress-activity-${authorId}`],
    {
      tags: [
        activityCache.tag.byAuthorId(authorId),
        activityLogCache.tag.byAuthorId(authorId),
      ],
      revalidate: DEFAULT_SERVICE_CACHE_REVALIDATE,
    },
  )();
}

interface StartActivityParams {
  activityId: string;
}

export async function startActivity({ activityId }: StartActivityParams) {
  // TODO: Validate work in progress activity
  const newActivityLog = await prisma.activityLog.create({
    data: {
      activityId,
    },
    include: {
      activity: true,
    },
  });

  activityLogCache.invalidate({
    authorId: newActivityLog.activity.authorId,
  });

  return newActivityLog;
}

interface StopActivityLogParams {
  activityLogId: string;
}

export async function stopActivityLog({
  activityLogId,
}: StopActivityLogParams) {
  const updatedActivityLog = await prisma.activityLog.update({
    where: { id: activityLogId },
    // TODO: Should receive endedAt from client for more precise
    data: { endedAt: new Date() },
    include: { activity: true },
  });

  activityLogCache.invalidate({
    authorId: updatedActivityLog.activity.authorId,
  });

  return updatedActivityLog;
}
