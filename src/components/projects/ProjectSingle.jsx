import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectSingle = ({ title, category, image, sourceCode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <div className="rounded-xl shadow-lg cursor-pointer mb-10 transition-all duration-300 hover:scale-105 hover:shadow-xl sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
        <div>
          <img
            src={image}
            className="rounded-t-xl border-none"
            alt="Single Project"
          />
        </div>
        <div className="text-center px-4 py-6">
          <p className="font-general-medium text-lg md:text-xl text-ternary-dark hover:underline hover:underline-offset-2 dark:text-ternary-light mb-2">
            {title}
          </p>
          <span className="text-lg text-ternary-dark dark:text-ternary-light">
            {category}
          </span>
        </div>
        <Link to={sourceCode} target="blank">
          <button className="text-lg text-ternary-light bg-indigo-600 hover:bg-indigo-700 w-full p-2 rounded-bl-xl rounded-br-xl hover:underline">
            Source Code
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectSingle;
