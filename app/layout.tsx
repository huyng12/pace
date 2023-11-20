import "@/styles/globals.css";

import type { Metadata } from "next";
import clsx from "clsx";

import { fontSans } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "PACE",
  description: "Our progress, our wins",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={clsx(fontSans.variable, "font-sans text-base antialiased")}
    >
      <body className="mx-auto flex max-w-xl flex-col">{props.children}</body>
    </html>
  );
}
