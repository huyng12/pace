import Link from "next/link";
import { User } from "@prisma/client";

import { Avatar } from "./Avatar";

// TODO: Make props more specific
interface AvatarLinkProps {
  user: User;
  width: number;
  height: number;
}

function AvatarLink({ user, width, height }: AvatarLinkProps) {
  return (
    <Link
      href={`/u/${user.username}`}
      className="block rounded-xl transition hover:bg-neutral-200"
    >
      <Avatar
        src={user.avatarUrl!}
        alt={`Avatar of ${user.name}`}
        width={width}
        height={height}
        className="rounded-lg"
      />
      <p className="text-center text-xl">{user.name}</p>
    </Link>
  );
}

export { AvatarLink };
