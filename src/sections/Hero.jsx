import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/ui/Button';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/hero1.jpg',
      title: 'Welcome to TIA',
      subtitle: 'Excellence in Education',
      description: 'Providing quality education for over 25 years'
    },
    {
      image: '/hero2.jpg',
      title: 'Modern Facilities',
      subtitle: 'State-of-the-Art Learning Environment',
      description: 'Equipped with the latest technology and resources'
    },
    {
      image: '/hero3.jpg',
      title: 'Holistic Development',
      subtitle: 'Beyond Academic Excellence',
      description: 'Nurturing character, creativity, and leadership'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1
          key={`title-${currentSlide}`}
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {slides[currentSlide].title}
        </motion.h1>

        <motion.h2
          key={`subtitle-${currentSlide}`}
          className="text-xl md:text-2xl font-light mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {slides[currentSlide].subtitle}
        </motion.h2>

        <motion.p
          key={`description-${currentSlide}`}
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {slides[currentSlide].description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button size="lg" className="mr-4">
            Join Us Today
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
            Learn More
          </Button>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;