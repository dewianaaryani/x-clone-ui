import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "X Social Media Clone",
  description: "X Social Media Clone",
};
export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
