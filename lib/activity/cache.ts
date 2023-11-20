import { revalidateTag } from "next/cache";

interface ActivityCacheRevalidateParams {
  authorId?: string;
}

export const activityCache = {
  tag: {
    byAuthorId: (authorId: string) => `activity:author-id-${authorId}`,
  },
  invalidate({ authorId }: ActivityCacheRevalidateParams) {
    if (authorId) {
      revalidateTag(this.tag.byAuthorId(authorId));
    }
  },
};
