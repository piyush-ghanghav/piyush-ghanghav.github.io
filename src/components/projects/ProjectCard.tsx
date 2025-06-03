export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[--surface0] rounded-xl border border-[--surface1] overflow-hidden 
        hover:border-[--blue] transition-all duration-300 hover:shadow-lg"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 
            group-hover:scale-105"
        />
      </div>

      {/* Content Container */}
      <div className="p-4 space-y-3">
        <h3 className="font-orbitron font-bold text-lg text-[--text]">
          {project.title}
        </h3>

        <p className="text-sm text-[--subtext0] line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <img
              key={tag}
              src={getBadgeUrl(tag)}
              alt={tag}
              className="h-4 transition-transform hover:scale-110"
            />
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[--subtext1] hover:text-[--blue] transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[--subtext1] hover:text-[--blue] transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
          <span className="ml-auto text-xs text-[--subtext1]">
            {project.duration}
          </span>
        </div>
      </div>
    </motion.div>
  );
};