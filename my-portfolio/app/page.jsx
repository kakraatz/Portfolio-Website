'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Script from 'next/script';
import LandingGradient from "@/components/LandingGradient";
import PageTransition from "@/components/PageTransition";

export default function Home() {
    const { theme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // or you can return a loader/spinner here
    }

    return (
        <div className="relative">
            <PageTransition>
            <section className="relative">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/waves.mp4"
                    autoPlay
                    loop
                    muted
                    style={{ filter: theme === 'light' ? 'invert(1)' : 'none' }}
                ></video>
                <LandingGradient/>
                <div className="relative z-20">
                    <div className="relative h-screen flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 2 }}
                            className={`text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                        >
                            <h2 id="mainHeader" className="text-6xl font-bold mb-4">Kevin</h2>
                            <h1 id="mainHeaderMessage" className="text-xl">Scroll down to see my projects</h1>
                        </motion.div>
                    </div>
                </div>
            </section>
            </PageTransition>
        </div>
    );
}
