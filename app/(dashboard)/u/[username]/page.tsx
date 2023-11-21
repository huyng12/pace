import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getCachedUser } from "@/lib/user/services";
import { ActivityList } from "@/components/dashboard/ActivityList";
import { Greeting } from "@/components/dashboard/Greeting";
import { WIPActivity } from "@/components/dashboard/WIPActivity";

interface DashboardProps {
  params: {
    username: string;
  };
}

// TODO: Generate metadata based on user's information
// https://nextjs.org/docs/app/building-your-application/optimizing/metadata#dynamic-metadata
// https://nextjs.org/docs/app/building-your-application/caching#request-memoization
// export function generateMetadata(
//   _props: DashboardProps,
//   _parent: ResolvingMetadata,
// ): Promise<Metadata> {
//   throw "Not implemented";
// }

export const metadata: Metadata = {
  title: "Dashboard",
};

async function Dashboard({ params }: DashboardProps) {
  const user = await getCachedUser(params.username);

  if (!user) {
    notFound();
  }

  return (
    <div className="px-3 py-8">
      <Greeting name={user.name} className="mb-6" />
      <ActivityList authorId={user.id} />
      <WIPActivity authorId={user.id} />
    </div>
  );
}

export default Dashboard;
