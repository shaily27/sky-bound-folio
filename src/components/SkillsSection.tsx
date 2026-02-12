import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    title: "Backend / Machine Learning",
    skills: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "Joblib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Random Forest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "OpenStreetMap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openal/openal-original.svg" },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative z-10 py-24 px-4" id="skills">
      <div className="section-container">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-heading font-bold text-gradient text-center mb-16"
        >
          Skills
        </motion.h2>
        <div className="space-y-12">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * ci }}
            >
              <h3 className="text-xl font-heading font-semibold text-foreground/90 text-center mb-8">
                {cat.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    className="flex flex-col items-center gap-3 group"
                    style={{ animationDelay: `${si * 0.5}s` }}
                  >
                    <div
                      className="w-16 h-16 sm:w-20 sm:h-20 glass-card flex items-center justify-center rounded-xl animate-float icon-glow p-3"
                      style={{ animationDelay: `${si * 0.4}s` }}
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-xs sm:text-sm text-muted-foreground font-body group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
