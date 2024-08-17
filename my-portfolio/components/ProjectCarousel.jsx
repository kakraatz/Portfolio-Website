import { useState, useEffect, useRef } from 'react';
import ProjectCards from './ProjectCards';
import { motion, useInView } from 'framer-motion';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

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
    link: 'https://github.com/kakraatz/Library-Database-Manager',
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
    id: 'weatherapp',
    title: 'Sun Buddy Weather App',
    description: 'A simple Python/Tkinter weather application that allows the user to retrieve weather forecasts, current weather conditions, and weather radar for valid US Zip codes.',
    technologies: ['Python', 'Tkinter'],
    link: 'https://github.com/kakraatz/Weather-App',
  },
];

export default function ProjectCarousel({  setSelectedProject }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [projectsPerSlide, setProjectsPerSlide] = useState(1);
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  useEffect(() => {
    const updateProjectsPerSlide = () => {
      if (window.innerWidth >= 1024) {
        setProjectsPerSlide(3);
      } else if (window.innerWidth >= 768) {
        setProjectsPerSlide(2);
      } else {
        setProjectsPerSlide(1);
      }
    };

    updateProjectsPerSlide();
    window.addEventListener('resize', updateProjectsPerSlide);
    return () => window.removeEventListener('resize', updateProjectsPerSlide);
  }, []);

  const totalSlides = Math.ceil(projects.length / projectsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((previousSlide) => (previousSlide + 1) % totalSlides);
  };

  const previousSlide = () => {
    setCurrentSlide((previousSlide) => (previousSlide - 1 + totalSlides) % totalSlides);
  };

  const getProjectsForSlide = (slideIndex) => {
    const start = slideIndex * projectsPerSlide;
    const end = start + projectsPerSlide;
    return projects.slice(start, end);
  };

  return (
      <motion.div
          ref={ref}
          className="container relative flex my-0 md:my-40 mx-auto p-4 items-center justify-center gap-x-8"
          initial={{ opacity: 0, y: 400 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 400 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
      >
        <button
            className="absolute flex left-0 w-8 h-full items-center justify-center bg-transparent hover:bg-green-500 hover:bg-opacity-40 p-2 rounded z-10"
            onClick={previousSlide}
        >
          <ArrowLeftIcon style={{ fontSize: 36 }}/>
        </button>
        <div className="relative flex h-full items-center justify-center px-10 pb-14">
          <div className="relative overflow-hidden">
            <motion.div
                className="flex"
                animate={{ x: `-${currentSlide * 100}%` }}
                transition={{ type: 'spring', mass: 3, stiffness: 400, damping: 40 }}
            >
              <>
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <div
                        key={index}
                        className={`flex-shrink-0 w-full py-2 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`}
                        style={{ opacity: index === currentSlide ? '1' : '0' }}
                    >
                      {getProjectsForSlide(index).map((project) => (
                          <ProjectCards
                              key={project.id}
                              project={project}
                              onOpen={setSelectedProject}
                          />
                      ))}
                    </div>
                ))}
              </>
            </motion.div>
          </div>
        </div>
        <button
            className="absolute flex right-0 w-8 h-full items-center justify-center bg-transparent hover:bg-green-500 hover:bg-opacity-40 p-2 rounded z-10"
            onClick={nextSlide}
        >
          <ArrowRightIcon style={{ fontSize: 36 }}/>
        </button>
        <div className="absolute flex bottom-0 w-full items-center justify-center gap-x-4">
          {Array.from({ length: totalSlides }).map((_, dotIndex) => {
            const dotDelay = dotIndex * 0.1;
            return (
              <motion.div
                key={dotIndex}
                initial={{ opacity: 0, y: 400 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 400 }}
                transition={{ duration: 1, ease: "easeInOut", delay: dotDelay }}
              >
                <button
                  onClick={() => setCurrentSlide(dotIndex)}
                  className={`w-3 h-3 outline outline-2 outline-offset-4 rounded-full bg-foreground transition-colors ${dotIndex === currentSlide ? 'outline-green-500' : 'outline-transparent'}`}
                >
                </button>
              </motion.div>
          );})}
        </div>
      </motion.div>
  );
}
