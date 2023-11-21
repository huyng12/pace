import "@/styles/globals.css";

import type { Metadata, Viewport } from "next";
import clsx from "clsx";

import { fontSans } from "@/lib/fonts";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  // TODO: Design and insert icons here
  // icons: {
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon-16x16.png",
  //   apple: "/apple-touch-icon.png",
  // },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "light" },
    { media: "(prefers-color-scheme: dark)", color: "dark" },
  ],
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
      <body className="bg-carrot-50 text-gourd-950 mx-auto flex max-w-xl flex-col">
        {props.children}
      </body>
    </html>
  );
}
