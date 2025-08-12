import React from 'react';
import ParticleBackground from "@/components/ParticleBackground";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import PageTransition from "@/components/PageTransition";

const Index: React.FC = () => {
  return (
    <PageTransition>
      <div className="relative min-h-screen bg-background overflow-hidden">
        <ParticleBackground />
        <div className="relative z-10">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </div>
    </PageTransition>
  );
};

export default Index;
