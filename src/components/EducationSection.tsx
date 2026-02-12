import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative z-10 py-24 px-4" id="education">
      <div className="section-container">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-heading font-bold text-gradient text-center mb-12"
        >
          Education
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-card p-8 sm:p-10 max-w-2xl mx-auto"
        >
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-1">
                B.Tech in Computer Science
              </h3>
              <p className="text-primary font-body font-medium mb-3">
                Banasthali Vidyapith
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-body">
                <span>Graduation Year: 2027</span>
                <span className="text-border">|</span>
                <span>CGPA: 7.7</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
