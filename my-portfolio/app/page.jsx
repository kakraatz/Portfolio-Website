'use client';

import { useTheme } from 'next-themes';
import {lazy, Suspense, useEffect, useState} from 'react';
import { motion } from 'framer-motion';
import LandingGradient from "@/components/LandingGradient";
import PageTransition from "@/components/PageTransition"
//import LandingScene from "@/components/LandingScene";
import Loader from "@/components/Loader";

const LandingScene = lazy(() => import("@/components/LandingScene"));

export default function Home() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [loaded, setLoaded] = useState(false);
    //const [sceneLoaded, setSceneLoaded] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    //useEffect(() => {
    //    if (mounted && sceneLoaded) {
    //        setLoading(false);
    //    }
    //}, [mounted, sceneLoaded]);

    useEffect(() => {
        if (mounted) {
            document.documentElement.classList.add(theme);
            document.documentElement.classList.remove(theme === 'dark' ? 'light' : 'dark');
        }
    }, [theme]);

    //if (!mounted && !loaded) {
    //    return <Loader id="loading"/>;
    //}

    return (
        <div className="relative overflow-x-hidden">
            <Suspense fallback={<Loader id="loading"/>}>
            <section className={`relative transition-colors duration-500 ease-in-out bg-background`}>
                <a id="/"/>
                <div className="relative h-screen flex items-center justify-center">
                    <PageTransition>
                        <LandingScene onLoad={() => setLoaded(true)} />
                        <LandingGradient/>
                        <div className="absolute inset-x-0 top-40 flex items-center justify-center pointer-events-none">
                            <div className="relative flex items-center gap-20 w-100 pt-3">
                                <h1 className="text-7xl font-bold">Kevin<br/>Kraatz</h1>
                                <p className="text-5xl">Hello World.</p>
                            </div>
                            <motion.span
                            className="absolute flex top-[-80px] w-full h-0.5 bg-green-500"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 0.75 }}
                            transition={{ duration: 1, delay: 4, ease: "easeOut" }}
                            style={{ transformOrigin: 'center' }}
                            />
                        </div>
                    </PageTransition>
                </div>
            </section>
            <section className={`relative transition-colors duration-500 ease-in-out bg-background`}>
                <a id="projects"/>
                <div className="relative h-screen z-1 flex items-center justify-center">
                </div>
            </section>
            <section className={`relative transition-colors duration-500 ease-in-out bg-background`}>
                <a id="about"/>
                <div className="relative h-screen z-1 flex items-center justify-center">
                </div>
            </section>
            </Suspense>
        </div>
    );
}
