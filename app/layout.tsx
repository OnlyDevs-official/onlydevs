import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/Cursor";

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
      <Navbar />
      {children}
      <Footer />
    </body>
  </html>
);
}
