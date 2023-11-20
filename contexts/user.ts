import { createServerContext } from "react";
import { User } from "@prisma/client";

type UserContext = Omit<User, "createdAt" | "updatedAt"> | null;

export const UserContext = createServerContext<UserContext>("user", null);
