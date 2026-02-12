import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Tech Tea",
    description: "Mini frontend tea brand website",
    tech: ["HTML", "CSS"],
    status: "Completed",
    statusColor: "text-glow-accent",
  },
  {
    title: "Portfolio Website",
    description: "React-based personal portfolio",
    tech: ["React.js", "Tailwind CSS"],
    status: "Currently Working",
    statusColor: "text-secondary",
  },
  {
    title: "AcciSense",
    description: "Machine learning-based car accident prediction system",
    tech: ["Python", "Flask", "Joblib", "Random Forest"],
    extra: "Frontend: OpenStreetMap integration",
    status: "In Progress",
    statusColor: "text-primary",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative z-10 py-24 px-4" id="projects">
      <div className="section-container">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-heading font-bold text-gradient text-center mb-16"
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="glass-card-hover p-6 sm:p-8 cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-foreground/70 font-body mb-4">
                {project.description}
              </p>
              {project.extra && (
                <p className="text-xs text-muted-foreground font-body mb-3">{project.extra}</p>
              )}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary/80 font-body"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className={`text-xs font-body font-medium ${project.statusColor}`}>
                ● {project.status}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
