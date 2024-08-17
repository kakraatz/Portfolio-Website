'use client';

import { useEffect, useRef, useState } from 'react';
import ProjectModal from './ProjectModal';
import ProjectCarousel from './ProjectCarousel';
import { motion, useInView } from "framer-motion";

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div ref={ref} className="container mt-40 mb-40 md:mt-60 md:mb-60 mx-auto xl:mx-60 p-4">
      <motion.h1
          className="text-3xl md:text-5xl mb-20 md:mb-0 pr-8 md:pr-0 font-bold text-right"
          initial={{ opacity: 0, y: 400 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 400 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
      >
          Projects
      </motion.h1>
      <ProjectCarousel setSelectedProject={setSelectedProject}/>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
