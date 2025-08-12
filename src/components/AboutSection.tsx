import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-4 lg:px-8 bg-gradient-dark">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold font-poppins mb-6"
            >
              About
              <span className="block text-transparent bg-gradient-neon bg-clip-text">
                The Vision
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg md:text-xl text-muted-foreground font-poppins leading-relaxed"
          >
            <p>
              I craft digital experiences that push the boundaries of creativity and technology. 
              With a passion for innovative design and cutting-edge development, I transform 
              concepts into immersive realities.
            </p>
            <p>
              Specializing in modern web technologies, I create solutions that are not just 
              functional, but unforgettable. Every project is an opportunity to redefine 
              what's possible in the digital realm.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-neon-cyan font-poppins">50+</div>
              <div className="text-muted-foreground font-poppins">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-neon-magenta font-poppins">5+</div>
              <div className="text-muted-foreground font-poppins">Years</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side - 3D/Interactive element */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            {/* Floating geometric shapes */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute inset-0 border-2 border-neon-cyan rounded-full opacity-30"
            />
            
            <motion.div
              animate={{ 
                rotate: -360,
                scale: [1, 0.9, 1]
              }}
              transition={{ 
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }
              }}
              className="absolute inset-8 border-2 border-neon-magenta rounded-full opacity-40"
            />
            
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                scale: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }
              }}
              className="absolute inset-16 border-2 border-neon-purple rounded-full opacity-50"
            />

            {/* Central element */}
            <motion.div
              animate={{ 
                y: [-10, 10, -10],
                rotateY: [0, 180, 360]
              }}
              transition={{ 
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute inset-24 bg-gradient-neon rounded-lg shadow-glow-cyan flex items-center justify-center"
            >
              <span className="text-2xl font-bold text-black font-poppins">AB</span>
            </motion.div>

            {/* Floating particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  x: [0, Math.cos(i) * 50, 0],
                  y: [0, Math.sin(i) * 50, 0],
                  opacity: [0.2, 0.8, 0.2]
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3
                }}
                className="absolute w-2 h-2 bg-neon-purple rounded-full"
                style={{
                  left: `${50 + Math.cos(i * 45) * 30}%`,
                  top: `${50 + Math.sin(i * 45) * 30}%`
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;