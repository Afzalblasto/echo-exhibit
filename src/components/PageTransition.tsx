import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  useEffect(() => {
    // Smooth scrolling behavior
    const handleScroll = (e: Event) => {
      e.preventDefault();
    };

    // Add custom smooth scroll
    document.addEventListener('wheel', handleScroll, { passive: false });
    
    return () => {
      document.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ 
          duration: 0.8,
          ease: [0.23, 1, 0.32, 1]
        }}
        className="min-h-screen"
      >
        {/* Loading overlay */}
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ 
            duration: 1.2,
            ease: [0.23, 1, 0.32, 1],
            delay: 0.2
          }}
          className="fixed inset-0 bg-gradient-neon z-50 origin-top"
        />
        
        {/* Loading text */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ 
            duration: 0.5,
            delay: 0.8
          }}
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <motion.span
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-4xl font-bold text-black font-poppins"
          >
            LOADING...
          </motion.span>
        </motion.div>

        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;