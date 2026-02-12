import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative z-10 py-24 px-4" id="about">
      <div className="section-container">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-heading font-bold text-gradient text-center mb-12"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-card p-8 sm:p-10 max-w-3xl mx-auto"
        >
          <div className="space-y-5 text-foreground/80 font-body leading-relaxed text-sm sm:text-base">
            <p>
              I am a B.Tech Computer Science student with a strong interest in Artificial Intelligence and Machine Learning. I enjoy building intelligent systems that can analyze data, identify patterns, and solve real-world problems.
            </p>
            <p>
              Currently, I am working on ML-based projects like <span className="text-primary font-medium">AcciSense</span>, a car accident prediction system built using Python, Flask, Joblib, and Random Forest.
            </p>
            <p>
              I am passionate about continuously learning modern AI technologies and applying them to create impactful, data-driven solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
