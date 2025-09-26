import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import SpecialOffers from '../components/SpecialOffers.jsx';
import OurServices from '../components/OurServices.jsx';
import PlanVisit from '../components/PlanVisit.jsx';
import VideoSection from '../components/VideoSection.jsx';
import AboutUs from '../components/AboutUs.jsx';
import EventsFeedback from '../components/EventsFeedback.jsx';
import Clientfeedback from '../components/Clientfeedback.jsx';
import Stories from '../components/Stories.jsx';
import FAQFooter from '../components/FAQFooter.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar isFixed = {true} />
      <Hero />
      <OurServices />
      <SpecialOffers />
      <PlanVisit />
      <VideoSection />
      <AboutUs />
      <EventsFeedback />
      <Clientfeedback />
      <Stories />
      <FAQFooter />
      <Footer />
    </div>
  );
};

export default Home;