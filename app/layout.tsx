import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./layuots/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Mini Projects",
  description: "a list of my mini projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
