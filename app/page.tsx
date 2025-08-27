import ContactSection from "@/components/FooterContact";
import FAQSection from "@/components/FAQ";
import FeaturesList from "@/components/FeatureList";
import Footer from "@/components/Footer";
import EventsCarousel from "@/components/Events";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Subtitle from "@/components/Subtitle";

export default function Home() {
  return (
    <>
      <div className="bg-black min-h-screen">
        <HeroSection />
        <EventsCarousel />
        <FeaturesList />
        <Subtitle />
        <FAQSection />
      </div>
    </>
  );
}
