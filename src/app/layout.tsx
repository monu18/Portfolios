import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import { Ubuntu, Ubuntu_Mono } from "next/font/google";
import portfolioData from "@/utils/portfolioData";

const ubuntu = Ubuntu({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

const ubuntuMono = Ubuntu_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu-mono",
});

export const metadata: Metadata = {
  title: portfolioData.name,
  description: "Portfolio of "+portfolioData.name,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.variable} ${ubuntuMono.variable} antialiased`}
      >
        <Navbar />
        {/* <main className="p-4">{children}</main> */}
        {children}
      </body>
    </html>
  );
}
