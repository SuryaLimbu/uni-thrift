import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import NavbarUI from "./components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uni-Thrift",
  description:
    "UniThrift: Your Campus Marketplace - Buy, sell, or give away secondhand items. Join our eco-friendly community today! 🌱🛍️",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="mx-auto max-w-screen-xl px-4  sm:px-6 sm:py-12 lg:px-8">
            {children}
          </main>
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
