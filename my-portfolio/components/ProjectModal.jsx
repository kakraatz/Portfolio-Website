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
      <div className="p-8 rounded shadow-lg h-3/5 w-3/5 bg-background text-foreground">
        <div className="relative flex justify-between">
          <div className="relative flex gap-x-10 items-center">
            <h2 className="text-4xl font-bold">{project.title}</h2>
            <button
              className="border-2 border-green-500 w-10 h-10 flex items-center justify-center"
            >
              <Link href={project.link} target='_blank' rel="noreferrer">
                <OpenInNewIcon className="text-green-500"/>
              </Link>
            </button>
          </div>
          <div className="items-end">
            <button
              className="border-2 border-green-500 w-10 h-10 flex items-center justify-center"
              onClick={onClose}
            >
              <CloseIcon className="text-green-500"/>
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