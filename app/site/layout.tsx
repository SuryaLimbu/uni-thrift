"use client";
import { useRouter } from "next/navigation";
import NavbarUI from "../components/navbar/navbar";
import { getCookie } from "cookies-next";
export default function SiteLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <NavbarUI />
      {children}
    </section>
  );
}
