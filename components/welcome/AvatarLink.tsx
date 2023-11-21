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
      className="hover:bg-carrot-100 block rounded-xl transition"
    >
      <Avatar
        src={user.avatarUrl!}
        alt={`Avatar of ${user.name}`}
        width={width}
        height={height}
        className="rounded-lg"
      />
      <p className="mt-2 text-center text-xl">{user.name}</p>
    </Link>
  );
}

export { AvatarLink };
