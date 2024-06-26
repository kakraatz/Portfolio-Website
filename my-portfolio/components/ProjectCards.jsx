import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  { id: 1, title: 'Project One', description: 'Description for project one' },
  { id: 2, title: 'Project Two', description: 'Description for project two' },
  // Add more projects here
];

export default function ProjectCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <Link key={project.id} href={`/projects/${project.id}`}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-gray-700 p-4 rounded-lg shadow-md cursor-pointer"
          >
            <h3 className="text-xl text-white">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
