import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpeg";

const HeroSection = () => {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-secondary to-glow-accent opacity-60 blur-md animate-pulse" />
            <img
              src={profileImg}
              alt="Shaily Gupta"
              className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-2 border-primary/30"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-gradient mb-3"
        >
          Shaily Gupta
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-lg sm:text-xl text-muted-foreground font-body tracking-wide mb-6"
        >
          Computer Science Student
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-foreground/80 font-body max-w-lg mx-auto text-base sm:text-lg mb-8"
        >
          Building modern, responsive and user-friendly web applications and models.
        </motion.p>

        {/* Currently Working On */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="text-sm text-primary glow-text font-body"
        >
          Currently Working on Web Development &amp; ML Projects
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
