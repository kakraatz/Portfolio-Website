'use client';

import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {Spinner} from "@nextui-org/react";

export default function Loader({ loaded }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <motion.div
            className="absolute inset-0 flex items-center justify-center h-screen"
            initial={{opacity: 1}}
            animate={{opacity: loaded ? 0 : 1, transition: { duration: 1.5 }}}
        >
            <Spinner color="success" size="lg"/>
        </motion.div>
    )
}
