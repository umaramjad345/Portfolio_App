import AboutMeBio from "../components/about/AboutMeBio";
import Skills from "../components/about/Skills";
import { AboutMeProvider } from "../context/AboutMeContext";
import { motion } from "framer-motion";

const About = () => {
  return (
    <AboutMeProvider>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, delay: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
        className="container mx-auto"
      >
        <AboutMeBio />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, delay: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <Skills />
      </motion.div>
    </AboutMeProvider>
  );
};

export default About;
