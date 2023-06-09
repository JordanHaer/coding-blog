import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jordan's Coding Chronicles",
  description:
    "Welcome to my coding blog where I share my journey and insights about programming, web development, and more.",
  author: "Jordan Haer",
  keywords: "coding, programming, web development, software engineering, technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
