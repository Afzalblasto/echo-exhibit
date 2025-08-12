import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="min-h-screen flex flex-col justify-center items-center text-center relative px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 fade-in hero-text">
          My Portfolio
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground fade-in-delay max-w-2xl mx-auto">
          Creative Developer | Designer | Innovator
        </p>
      </div>
      
      <button
        onClick={scrollToProjects}
        className="absolute bottom-8 bounce text-lg text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex flex-col items-center gap-2"
        aria-label="Scroll to projects"
      >
        <span className="text-sm">Scroll Down</span>
        <ChevronDown size={24} />
      </button>
    </header>
  );
};

export default HeroSection;