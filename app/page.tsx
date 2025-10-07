import ContactSection from "@/components/FooterContact";
import FAQSection from "@/components/FAQ";
import FeaturesList from "@/components/FeatureList";
import Footer from "@/components/Footer";
import EventsCarousel from "@/components/Events";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Subtitle from "@/components/Subtitle";
import './globals.css';

export default function Home() {
  return (
    <>
      <div className= "min-h-screen">
        <div id="secondnav">
          <a href="./#scrollhook">
          <button type="button" id="blogbutton">Blog</button>
          </a>
        </div>
      
        <HeroSection />
        <EventsCarousel />
        <FeaturesList />
<p id="scrollhook">Hook</p>
        <br />
        <br />
        <br />
        <br />
        
        <div id="blogsection">
      <h2 id="blogheading">
      Gridlocked
      </h2>
          <p id="blogtext">
            Access our elite blog.
          </p>
          <br />
          <br />
          <a href="./gridlocked">
          <button id="gridlockedbutton">↗</button>
          </a>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        
        <Subtitle />
        <FAQSection />
      </div>
    </>
  );
}
