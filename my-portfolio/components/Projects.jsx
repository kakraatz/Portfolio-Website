'use client';

import { useEffect, useState } from 'react';
import ProjectModal from './ProjectModal';
import ProjectCarousel from './ProjectCarousel';

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="container mt-40 mb-40 md:mt-60 md:mb-60 mx-auto p-4">
      <h1 className="text-3xl md:text-5xl mb-20 md:mb-0 pr-8 md:pr-0 font-bold text-right">Projects</h1>
      <ProjectCarousel selectedProject={selectedProject} setSelectedProject={setSelectedProject}/>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
