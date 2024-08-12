import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Link from "next/link";

export default function ProjectModal({ project, onClose }) {

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
      <div className="p-8 rounded shadow-lg h-4/5 w-4/5 bg-background text-foreground">
        <div className="relative flex justify-between">
          <div className="relative flex-col items-start">
            <button
                className="outline outline-2 outline-foreground hover:outline-green-500 outline-offset-4 w-6 h-6 flex items-center justify-center group"
            >
              <Link href={project.link} target='_blank' rel="noreferrer">
                <OpenInNewIcon className="text-foreground"/>
              </Link>
            </button>
            <h2 className="text-2xl md:text-4xl font-bold mt-10">{project.title}</h2>
          </div>
          <div className="items-end">
            <button
                className="outline outline-2 outline-foreground hover:outline-green-500 outline-offset-4 w-6 h-6 flex items-center justify-center group"
              onClick={onClose}
            >
              <CloseIcon className="text-foreground"/>
            </button>
          </div>
        </div>
        <div className="mt-10">
          <p>{project.description}</p>
          {/* Add images and more detailed descriptions here */}
        </div>
      </div>
    </motion.div>
  );
}
