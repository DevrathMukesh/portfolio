"use client";

import LeftView from "./projectType/LeftView";
import RightView from "./projectType/RightView";
import { ProjectList } from "../constants/ProjectList";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const Projects = () => {
  const refHeading = useRef(null);
  const inViewHeading = useInView(refHeading);
  const [showAll, setShowAll] = useState(false);

  // Define shared variants for animations
  const fadeInVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  // Toggle function for "Show More" button
  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  // Determine which projects to display
  const displayedProjects = showAll ? ProjectList : ProjectList.slice(0, 4);

  return (
    <section className="py-[40px] sm:px-6" id="projects">
      {/* Heading with animation */}
      <motion.div
        ref={refHeading}
        variants={fadeInVariants}
        initial="initial"
        animate={inViewHeading ? "animate" : "initial"}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4"
      >
        <h3 className="text-3xl font-[800] text-textWhite sm:text-5xl">
          Projects
        </h3>
        <div className="mt-2 h-[4px] min-w-0 flex-grow bg-textWhite"></div>
      </motion.div>

      {/* Projects */}
      {displayedProjects.map((project) => {
        return project.id % 2 === 0 ? (
          <LeftView key={project.id} {...project} />
        ) : (
          <RightView key={project.id} {...project} />
        );
      })}

      {/* Show More Button */}
      {ProjectList.length > 3 && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mt-10 flex justify-center"
        >
          <button
            onClick={toggleShowAll}
            className="rounded-full border-2 border-textWhite bg-transparent px-5 py-2.5 text-center text-sm font-medium text-textWhite transition-all duration-500 ease-in-out hover:scale-[0.98] hover:bg-darkHover"
            aria-expanded={showAll}
          >
            {showAll ? "That's Enough!" : "Still Not Impressed?"}
          </button>

          <span className="absolute left-1/2 top-[125%] -translate-x-1/2 -translate-y-1/2 text-xs text-textLight/60 transition-opacity duration-200 ease-in">
            {showAll ? "Click to collapse" : "Click to see more"}
          </span>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
