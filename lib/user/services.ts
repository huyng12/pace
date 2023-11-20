"use server";

import { unstable_cache } from "next/cache";
import prisma from "@/prisma/client";

import { DEFAULT_SERVICE_CACHE_REVALIDATE } from "../shared/constants";
import { userCache } from "./cache";

export async function getCachedUsers() {
  async function getUsers() {
    return await prisma.user.findMany();
  }

  return unstable_cache(getUsers, [`get-users`], {
    tags: [userCache.tag.all],
    revalidate: DEFAULT_SERVICE_CACHE_REVALIDATE,
  })();
}

export async function getCachedUser(username: string) {
  async function getUser() {
    return await prisma.user.findUnique({
      where: {
        username,
      },
    });
  }

  return unstable_cache(getUser, [`get-user:username-${username}`], {
    tags: [userCache.tag.byUsername(username)],
    revalidate: DEFAULT_SERVICE_CACHE_REVALIDATE,
  })();
}
