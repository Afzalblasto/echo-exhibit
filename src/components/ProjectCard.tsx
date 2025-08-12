interface ProjectCardProps {
  title: string;
  description: string;
  technologies?: string[];
}

const ProjectCard = ({ title, description, technologies = [] }: ProjectCardProps) => {
  return (
    <div className="project-card p-6 rounded-lg group cursor-pointer">
      <h3 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>
      {technologies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;