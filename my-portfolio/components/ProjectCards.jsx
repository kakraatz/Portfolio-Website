'use client';

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";

export default function ProjectCards({ project, onOpen }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return false;
  }

  return (
    <div
      className="relative rounded-2xl"
      onClick={() => onOpen(project)}
    >
      <div className="relative bg-transparent rounded-2xl cursor-pointer overflow-hidden group ring-2 ring-stone-600 shadow-md shadow-stone-600">
        <div
          className="relative overflow-hidden z-10 transform transition-transform duration-150 ease-in-out group-hover:scale-50 origin-top-left"
          style={{ width: '100%', paddingBottom: '100%', position: 'relative' }}
        >
          <Image
            loading="lazy"
            src={`/${project.id}.jpg`}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover items-center"
          />
        </div>
        <div
          className={`absolute flex justify-center items-center top-0 right-0 w-1/2 h-1/2 p-8 ${theme === 'dark' ? 'bg-stone-950 text-white' : 'bg-white text-black'}`}>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology, index) => (
              <span key={index} className="bg-green-500 bg-opacity-50 px-3 py-1 rounded-full font-semibold text-center text-small">
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
      <div className="pt-4 pl-2 md:pl-8 pr-2 md:pr-8 rounded-2xl">
        <h1 className="text-md md:text-xl xl:text-3xl">{project.title}</h1>
      </div>
    </div>
  );
}
