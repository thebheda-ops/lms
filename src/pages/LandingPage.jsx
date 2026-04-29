import { motion } from 'framer-motion';
import TopBar from '../components/TopBar';
import Navigation from '../components/Navigation';
import Hero from '../sections/Hero';
import Features from '../sections/Features';
import Academics from '../sections/Academics';
import NewsEvents from '../sections/NewsEvents';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      <Hero />
      <Features />
      <Academics />
      <NewsEvents />
      <Footer />
    </div>
  );
};

export default LandingPage;