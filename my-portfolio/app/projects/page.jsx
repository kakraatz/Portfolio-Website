'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import LandingGradient from "@/components/LandingGradient";
import PageTransition from "@/components/PageTransition"
import LandingScene from "@/components/LandingScene";
import Loader from "@/components/Loader";
import Projects from "../components/Projects";

export default function Projects() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted && !loaded) {
        return <Loader loaded={loaded}/>;
    }

    return (
        <div className="relative overflow-x-hidden">
            <section className={`relative transition-colors duration-500 ease-in-out bg-background`}>
                <div className="relative h-screen flex items-center justify-center">
                    <PageTransition>

                    </PageTransition>
                </div>
            </section>
        </div>
    );
}
