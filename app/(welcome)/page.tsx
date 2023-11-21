import { Metadata } from "next";

import { getCachedUsers } from "@/lib/user/services";
import { AvatarLink } from "@/components/welcome/AvatarLink";

export const metadata: Metadata = {
  title: "Welcome",
};

async function Home() {
  const users = await getCachedUsers();

  return (
    // TODO: Fix padding-top to another number that makes more sense
    <div className="inset-x-1/2 mx-auto w-[250px] pt-[200px]">
      <p className="mb-4 text-2xl font-medium">Who are you?</p>
      <div className="flex justify-between">
        {users.map((user) => (
          <AvatarLink key={user.id} user={user} width={100} height={100} />
        ))}
      </div>
    </div>
  );
}

export default Home;
