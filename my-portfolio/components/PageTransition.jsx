import { motion } from "framer-motion";

export default function PageTransition({ children }) {

    const variants = {
        initial: { opacity: 0 },
        enter: { opacity: 1, transition: { duration: 1.5, delay: 0.75 } },
        exit: { opacity: 0, transition: { duration: 1.5 } },
    };

    return (
        <motion.div
            initial="initial"
            animate="enter"
            exit="exit"
            variants={variants}
        >
            {children}
        </motion.div>
    );
}
