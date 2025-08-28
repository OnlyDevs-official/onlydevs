import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/Cursor";
import Gridbg from "@/components/Gridbg";

export const metadata: Metadata = {
  title: "OnlyDevs",
  description: "Revolutionising Design & Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
return (
  <html lang="en">
    <body className="aeonik-bold">
      <CustomCursor />
      <Gridbg />
      <Navbar />
      {children}
      <Footer />
    </body>
  </html>
);
}
