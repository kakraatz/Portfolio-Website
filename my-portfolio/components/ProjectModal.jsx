import { motion } from 'framer-motion';
import {useTheme} from "next-themes";

export default function ProjectModal({ project, onClose }) {
  const { theme } = useTheme();

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleBackgroundClick}
    >
      <div className={`p-8 rounded shadow-lg h-3/5 w-3/5 ${theme === 'dark' ? 'bg-stone-950 text-white' : 'bg-white text-black'}`}>
        <div className="relative flex justify-between items-start">
          <h2 className="text-3xl font-bold">{project.title}</h2>
          <button
            className="text-green-500 text-3xl font-bold pl-4"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="mt-4">
          <p>{project.description}</p>
          {/* Add images and more detailed descriptions here */}
        </div>
      </div>
    </motion.div>
  );
}