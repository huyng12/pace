export const userCache = {
  tag: {
    all: "users",
    byUsername: (username: string) => `user:username-${username}`,
  },
};
