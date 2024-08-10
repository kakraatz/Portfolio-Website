'use client';

import { useEffect, useState } from 'react';
import ProjectCards from './ProjectCards';
import ProjectModal from './ProjectModal';
import { useTheme } from 'next-themes';

const projects = [
  {
    id: 'tradingbot',
    title: 'Trading Bot',
    description: 'A bot that automates trading strategies.',
    technologies: ['Python', 'PyTorch', 'pandas', 'NumPy'],
    link: 'https://github.com/kakraatz/Capstone-AI-ML-Crypto-Trading-Bot',
  },
  {
    id: 'smallshell',
    title: 'Small Shell',
    description: 'A minimalist shell for Unix systems.',
    technologies: ['C', 'GCC', 'GDB', 'Linux'],
    link: 'https://github.com/kakraatz/Small-Shell',
  },
  {
    id: 'librarydbmanager',
    title: 'Library Database Manager',
    description: 'Manage library books and patrons with ease.',
    technologies: ['Python', 'JavaScript', 'Flask', 'MySQL'],
    link: 'https://github.com/kakraatz/LibInventory-Library-Database-Manager',
  },
  {
    id: 'wasteagram',
    title: 'Wasteagram',
    description: 'Track food waste and contribute to sustainability.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore'],
    link: 'https://github.com/kakraatz/Wasteagram-Android-App',
  },
  {
    id: 'journal',
    title: 'Mobile Journal',
    description: 'A personal journal app for mobile devices.',
    technologies: ['Flutter', 'Dart', 'SQLite'],
    link: 'https://github.com/kakraatz/Android-Journal',
  },
  {
    id: 'radar',
    title: 'Radar Signal Viewer (WIP)',
    description: 'Visualize radar signals in real-time.',
    technologies: ['C++'],
    link: 'https://github.com/kakraatz/Radar-Signal-Viewer',
  },
  {
    id: 'weatherapp',
    title: 'Sun Buddy Weather App',
    description: 'A simple Python/Tkinter weather application that allows the user to retrieve weather forecasts, current weather conditions, and weather radar for valid US Zip codes.',
    technologies: ['Python', 'Tkinter'],
    link: 'https://github.com/kakraatz/Weather-App',
  }
];

export default function Projects() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="container my-40 mx-auto p-4">
      <h1 className="text-3xl md:text-5xl pr-8 md:pr-0 font-bold mb-20 text-right">Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCards
            key={project.id}
            project={project}
            onOpen={setSelectedProject}
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}