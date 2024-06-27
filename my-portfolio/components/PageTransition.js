import { motion } from "framer-motion";

export default function PageTransition({ children }) {
    const variants = {
      initial: { opacity: 0 },
      enter: { opacity: 1, transition: { duration: 1 } },
      exit: { opacity: 0, transition: { duration: 1 } },
    };

    return (
        <motion.div
            initial="initial"
            animate="enter"
            exit="exit"
            variants={variants}
            style={{ position: 'absolute', width: '100%' }}
          >
            {children}
          </motion.div>
        );
}
