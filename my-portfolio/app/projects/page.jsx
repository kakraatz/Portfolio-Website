'use client';

import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const projects = [
  { id: 'project1', title: 'Project 1' },
  { id: 'project2', title: 'Project 2' },
  { id: 'project3', title: 'Project 3' },
];

export default function Projects() {
  const router = useRouter();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="p-4 bg-gray-800 text-white rounded cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push(`/projects/${project.id}`)}
          >
            <h2 className="text-2xl">{project.title}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
