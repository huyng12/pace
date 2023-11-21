import { TopNavigation } from "@/components/shared/TopNavigation";

interface AuthenticatedLayoutProps {
  children: React.ReactNode;
}

export default function AuthenticatedLayout(props: AuthenticatedLayoutProps) {
  return (
    <>
      <TopNavigation />
      <div className="py-[80px]">{props.children}</div>
    </>
  );
}
