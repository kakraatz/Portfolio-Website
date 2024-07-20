'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Script from 'next/script';
import LandingGradient from "@/components/LandingGradient";
import PageTransition from "@/components/PageTransition"
import TextTyper from "@/components/TextTyper";
import LandingScene from "@/components/LandingScene";
import ParticleGlobe from "@/components/ParticleGlobe"

export default function Home() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
          document.documentElement.classList.remove('light');
        } else {
          document.documentElement.classList.add('light');
          document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // or you can return a loader/spinner here
    }

    // <video
    //                         className="absolute inset-0 w-full h-full object-cover"
    //                         src="/wind.mp4"
    //                         autoPlay
    //                         loop
    //                         muted
    //                     ></video>
    // style={{ filter: theme === 'light' ? 'invert(1)' : 'none' }}
    return (
        <div className="relative">
            <section className={`relative ${theme === 'dark' ? 'bg-stone-950 text-white' : 'bg-white text-black'}`}>
                <a id="/"/>
                <div className="relative h-screen flex items-center justify-center">
                    <PageTransition>
                        <LandingScene/>
                        <LandingGradient/>
                        <div className="absolute inset-x-0 top-40 flex items-center justify-center pointer-events-none">
                            <div className="relative flex items-center gap-20 w-100 pt-3">
                                <h1 className="text-7xl font-bold">Kevin<br/>Kraatz</h1>
                                <p className="text-5xl">Hello World.</p>
                            </div>
                        </div>
                    </PageTransition>
                </div>
            </section>
            <section className={`relative ${theme === 'dark' ? 'bg-stone-950 text-white' : 'bg-white text-black'}`}>
                <a id="projects"/>
                <div className="relative h-screen z-1 flex items-center justify-center">
                </div>
            </section>
            <section className={`relative ${theme === 'dark' ? 'bg-stone-950 text-white' : 'bg-white text-black'}`}>
                <a id="about"/>
                <div className="relative h-screen z-1 flex items-center justify-center">
                </div>
            </section>
        </div>
    );
}
