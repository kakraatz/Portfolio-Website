import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";

const wordVariants = {
    initial: { y: '100%', opacity: 0 },
    visible: { y: '0%', opacity: 1 },
    exit: { y: '-100%', opacity: 0 },
}

export default function WordChanger({ wordList }) {
    const [index, setIndex] = useState(0);
    const intervalRef = useRef(null);
    const { theme } = useTheme();

  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % wordList.length);
      }, 3000);
    };

    startInterval();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearInterval(intervalRef.current);
      } else {
        setIndex((prevIndex) => (prevIndex + 1) % wordList.length);
        startInterval();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(intervalRef.current);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [wordList.length]);

    return (
        <div className="relative overflow-hidden align-baseline inline-flex">
            <AnimatePresence mode="popLayout">
                <motion.span
                    className={`inline-block ${theme === 'dark' ? 'text-green-500' : 'text-foreground'}`}
                    key={wordList[index]}
                    variants={wordVariants}
                    initial="initial"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                >
                    <motion.p>
                        {wordList[index]}
                    </motion.p>
                </motion.span>
            </AnimatePresence>
        </div>
    );
}