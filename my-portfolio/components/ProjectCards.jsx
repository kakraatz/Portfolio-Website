import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ProjectCards({ project, onOpen }) {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();
  const router = useRouter();

  return (
      <div className="relative rounded-sm">
          <Link href={project.link} target='_blank' rel="noreferrer">
        <div
            className="relative bg-transparent rounded-sm cursor-pointer overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            //onClick={() => onOpen(project)}
        >
          <motion.div
              className="relative overflow-hidden z-10"
              animate={isHovered ? { scale: 0.5, originY: 0, originX: 0 } : { scale: 1 }}
              transition={{ type: 'tween', duration: 0.15, ease: 'easeInOut' }}
              style={{ width: '100%', paddingBottom: '100%', position: 'relative' }}
          >
            <img
                src={`/${project.id}.jpg`}
                alt={project.title}
                className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </motion.div>
          <div
              className={`absolute flex justify-center items-center top-0 right-0 w-1/2 h-1/2 p-8 ${theme === 'dark' ? 'bg-stone-950 text-white' : 'bg-white text-black'}`}>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology, index) => (
                  <span key={index}
                        className="bg-green-500 bg-opacity-50 px-3 py-1 rounded-full font-semibold text-center text-small">
                  {technology}
                </span>
              ))}
            </div>
          </div>
          <div
              className={`absolute bottom-0 left-0 w-full h-1/2 ${theme === 'dark' ? 'bg-white text-black' : 'bg-stone-950 text-white'}`}>
            <div>
              <p className="relative justify-center p-8 text-large">{project.description}</p>
            </div>
          </div>
        </div>
        <div className="pt-4 pb-4 pl-8">
          <h1 className="text-xl md:text-3xl">{project.title}</h1>
        </div>
              </Link>
      </div>
  );
}