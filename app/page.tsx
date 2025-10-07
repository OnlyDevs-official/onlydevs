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
        <button onClick="document.location='./#blogsection'" id="blogbutton">Blog</button>
        </div>
      
        <HeroSection />
        <EventsCarousel />
        <FeaturesList />
        
        <div id="blogsection">
      <h2 id="blogheading">
      Gridlocked
      </h2>
          <p id="blogtext">
            Access our elite blog.
          </p>
          <img src="./GridLocked-comingsoon.png" alt="gridlocked_placeholder_img" width="600" height="500" />
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
