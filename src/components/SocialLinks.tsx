import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Github, Mail } from "lucide-react";

const links = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/shaily-gupta-4529a7339/",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/shaily27",
    label: "GitHub",
  },
  {
    icon: Mail,
    href: "mailto:guptasg1187@gmail.com",
    label: "Email",
  },
];

const SocialLinks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="relative z-10 py-20 px-4" id="contact">
      <div className="section-container">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-heading font-bold text-gradient text-center mb-12"
        >
          Get in Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-8"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="w-14 h-14 glass-card flex items-center justify-center rounded-xl icon-glow"
            >
              <link.icon className="w-6 h-6 text-foreground/70" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialLinks;
