'use client';

import {useEffect, useState} from "react";
import {motion} from "framer-motion";

export default function Loader({loaded}) {
    console.log(loaded);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <motion.div
            className="relative flex items-center justify-center h-screen"
            initial={{opacity: 1}}
            animate={{opacity: loaded ? 0 : 1, transition: { duration: 1.5 }}}
        >
            <motion.div className="w-32 h-32 border-4 border-t-4 border-green-500 bg-gradient-to-r from-green-500 to-transparent border-solid rounded-full animate-spin"/>
        </motion.div>
    )
}
