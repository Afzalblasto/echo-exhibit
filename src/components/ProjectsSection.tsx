import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Modern Web Application",
      description: "A full-stack web application built with React and Node.js, featuring real-time data visualization and responsive design. This project showcases modern development practices and clean architecture.",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"]
    },
    {
      title: "Mobile-First Design System",
      description: "Comprehensive design system and component library that ensures consistency across multiple products. Built with accessibility and scalability in mind.",
      technologies: ["React", "Storybook", "Tailwind CSS", "Figma"]
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Interactive dashboard providing actionable insights through machine learning algorithms. Features real-time data processing and predictive analytics.",
      technologies: ["Python", "React", "TensorFlow", "D3.js"]
    },
    {
      title: "E-commerce Platform",
      description: "Complete e-commerce solution with payment integration, inventory management, and admin dashboard. Optimized for performance and user experience.",
      technologies: ["Next.js", "Stripe", "MongoDB", "Vercel"]
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 hero-text">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;