"use client";
import HeroSection from "./component/HeroSection";
import AboutSection from "./component/AboutSection";
import OfferSection from "./component/OfferSection";
import WhyChooseUs from "./component/WhyChooseUsSection";
import Testimonials from "./component/Testimonials";
import ContactSection from "./component/ContactSection";
import MeetOurMudaris from "./component/MeetOurMudaris";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-start px-4 sm:px-6 md:px-12 gap-12 bg-gradient-to-b from-emerald-50 via-white to-amber-50">
      {/* Hero Section */}
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <OfferSection></OfferSection>
      <WhyChooseUs></WhyChooseUs>
      <MeetOurMudaris></MeetOurMudaris>
      <Testimonials></Testimonials>
      <ContactSection></ContactSection>
    </main>
  );
};

export default Home;
