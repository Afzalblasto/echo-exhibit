import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  demoUrl,
  githubUrl,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="project-card p-8 rounded-2xl group cursor-pointer relative overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
      
      <div className="relative z-10">
        {/* Project image placeholder */}
        <div className="w-full h-48 bg-gradient-dark rounded-lg mb-6 relative overflow-hidden">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute inset-4 border border-neon-cyan rounded-lg opacity-30"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-neon-cyan font-poppins opacity-50">
              {title.split(' ').map(word => word[0]).join('')}
            </span>
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-transparent group-hover:bg-gradient-neon group-hover:bg-clip-text transition-all duration-300 font-poppins mb-4">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-6 leading-relaxed font-poppins">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full font-poppins font-medium border border-border group-hover:border-neon-cyan group-hover:text-neon-cyan transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {demoUrl && (
            <motion.a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-neon text-black rounded-lg font-poppins font-semibold hover:shadow-glow-cyan transition-all duration-300"
            >
              <ExternalLink size={16} />
              Live Demo
            </motion.a>
          )}
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 border border-neon-magenta text-neon-magenta rounded-lg font-poppins font-semibold hover:bg-neon-magenta hover:text-black transition-all duration-300"
            >
              <Github size={16} />
              Code
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Neural Network Visualizer",
      description: "An interactive 3D visualization of neural networks with real-time training data. Built with Three.js and WebGL for smooth 60fps performance.",
      technologies: ["React", "Three.js", "TypeScript", "WebGL", "GSAP"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Quantum Dashboard",
      description: "A futuristic data visualization platform with real-time quantum computing metrics. Features advanced animations and particle systems.",
      technologies: ["Next.js", "D3.js", "Framer Motion", "WebSockets"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI Design Studio",
      description: "Revolutionary design tool that uses machine learning to generate creative layouts. Seamless integration with modern design workflows.",
      technologies: ["React", "Python", "TensorFlow", "Canvas API"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Holographic Interface",
      description: "Experimental web interface that simulates holographic displays using CSS 3D transforms and advanced shader techniques.",
      technologies: ["Vue.js", "GLSL", "CSS3", "WebGL", "GSAP"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
            Featured
            <span className="block text-transparent bg-gradient-neon bg-clip-text">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground font-poppins max-w-2xl mx-auto">
            Pushing the boundaries of what's possible in web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;