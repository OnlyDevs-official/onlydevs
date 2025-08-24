import type { Metadata } from "next";
import { Inter, Yeseva_One } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });

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
      <Navbar />
      {children}
      <Footer />
    </body>
  </html>
);
}
