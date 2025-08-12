import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const text = textRef.current;
    if (!text) return;

    // Add glitch effect on load
    const glitchInterval = setInterval(() => {
      text.classList.add('glitch');
      setTimeout(() => {
        text.classList.remove('glitch');
      }, 300);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <h1
            ref={textRef}
            data-text="AFZAL⚡BLASTO"
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 font-poppins gradient-text glitch"
          >
            AFZAL⚡BLASTO
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-poppins font-light tracking-wider mb-12"
        >
          Creative Developer & Designer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <span className="px-6 py-3 bg-gradient-neon rounded-full text-black font-poppins font-semibold">
            Frontend
          </span>
          <span className="px-6 py-3 bg-gradient-purple rounded-full text-white font-poppins font-semibold">
            Design
          </span>
          <span className="px-6 py-3 border border-neon-cyan text-neon-cyan rounded-full font-poppins font-semibold">
            Innovation
          </span>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-neon-cyan hover:text-neon-magenta transition-colors duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-sm font-poppins tracking-wider">EXPLORE</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} className="group-hover:shadow-glow-cyan" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;