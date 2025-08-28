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
        
        {/* Background with explicit sizing */}
        <div className="squares-background">
          <Squares 
            direction="diagonal" 
            speed={1} 
            borderColor="#666" 
            squareSize={40}
            hoverFillColor="#333"
          />
        </div>
        
        <div className="relative">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}