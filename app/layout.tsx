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
        
        {/* Fixed background grid */}
        <div className="fixed inset-0 z-0">
          <Squares 
            direction="diagonal" 
            speed={1} 
            borderColor="#333" 
            squareSize={40}
            hoverFillColor="#222"
          />
        </div>
        
        {/* Main content with higher z-index */}
        <div className="relative z-10">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}