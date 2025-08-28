import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/Cursor";
import Squares from "@/components/ui/Squares";

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
        <Squares
          speed={0.5}
          squareSize={40}
          direction='diagonal'
          borderColor='#1a003b'
          hoverFillColor='#0000'
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}