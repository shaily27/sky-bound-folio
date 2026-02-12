import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <footer className="relative z-10 py-12 px-4 border-t border-border/20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p className="font-heading font-semibold text-foreground/80 mb-2">
          Shaily Gupta
        </p>
        <p className="text-xs text-muted-foreground font-body">
          © 2025 All Rights Reserved
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
