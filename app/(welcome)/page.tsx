import Link from "next/link";

import { getCachedUsers } from "@/lib/user/services";

async function Home() {
  const users = await getCachedUsers();

  return (
    <main>
      <p>Who are you?</p>
      <div>
        {users.map((user) => (
          <Link key={user.id} href={`/u/${user.username}`}>
            <button>{user.name}</button>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Home;
