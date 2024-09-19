import ContactSection from "@/components/FooterContact";
import FAQSection from "@/components/FAQ";
import FeaturesList from "@/components/FeatureList";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div className="bg-black min-h-screen">
        <HeroSection />
        <FeaturesList />
        <FAQSection />
      </div>
    </>
  );
}
