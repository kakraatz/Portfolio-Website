'use client';

import { useStateContext } from "@/components/StateProvider";
import { motion } from "framer-motion";

export default function Footer() {
    const { loaded } = useStateContext();

    const variants = {
        initial: { opacity: 0 },
        enter: { opacity: 1 },
    };

    return (
        <motion.div
            className="bg-transparent p-4 flex"
            initial="initial"
            animate={loaded ? "enter" : "initial"}
            exit="exit"
            variants={variants}
        >
            <div className="relative flex w-100 items-center">
                <p><span className="text-green-500">&copy; {new Date().getFullYear()} </span>
                 Kevin Kraatz.
                </p>
            </div>
        </motion.div>
    );
}
