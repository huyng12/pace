import { revalidateTag } from "next/cache";

interface ActivityLogCacheRevalidateParams {
  authorId?: string;
}

export const activityLogCache = {
  tag: {
    byAuthorId: (authorId: string) => `activity-log:author-id-${authorId}`,
  },
  invalidate({ authorId }: ActivityLogCacheRevalidateParams) {
    if (authorId) {
      revalidateTag(this.tag.byAuthorId(authorId));
    }
  },
};
