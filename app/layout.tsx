import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Your Name — Developer Portfolio",
  description: "Senior developer building apps that ship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans bg-[#0a0a0a] text-zinc-100 min-h-screen selection:bg-zinc-800 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}