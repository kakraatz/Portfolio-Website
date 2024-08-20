'use client';

import {useCallback, useEffect, useState} from 'react';
import { motion } from 'framer-motion';
import LandingGradient from "@/components/LandingGradient";
import PageTransition from "@/components/PageTransition"
import LandingScene from "@/components/LandingScene";
import Loader from "@/components/Loader";
import Projects from "../components/Projects";
import About from "../components/About";
import { useActiveLink } from '../components/ActiveLinkProvider';

export default function Home() {
    const [mounted, setMounted] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const { setActiveLink } = useActiveLink();

    useEffect(() => {
        setMounted(true);

        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPos = window.scrollY + window.innerHeight / 2;

            sections.forEach(section => {
                if (section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
                    const id = section.querySelector('a').id;
                    setActiveLink(id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [setActiveLink]);

    const handleLoad = useCallback(() => {
        setLoaded(true);
    }, []);

    if (!mounted && !loaded) {
        return <Loader loaded={loaded}/>;
    }

    return (
        <div className="relative overflow-x-hidden">
            <section className="relative bg-background">
                <a id="home"/>
                <div className="relative h-screen flex items-center justify-center">
                    <PageTransition>
                        <LandingScene onLoad={handleLoad} />
                        <LandingGradient/>
                        <div className="absolute inset-x-0 top-40 flex items-center justify-center pointer-events-none">
                            <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-20 w-100 pt-3 mix-blend-difference">
                                <motion.div
                                    className=""
                                    initial={{ clipPath: 'inset(0% 0% 100% 0%)', translateY: -20 }}
                                    animate={{ clipPath: 'inset(0% 0% 0% 0%)', translateY: 0 }}
                                    transition={{ duration: 1, delay: 4 }}
                                >
                                    <h1 className="text-5xl md:text-7xl font-bold text-white text-center lg:text-left">Kevin<br/>Kraatz</h1>
                                </motion.div>
                                <p className="text-3xl md:text-5xl text-center text-white">Hello World</p>
                            </div>
                            <motion.span
                            className="absolute flex top-[-20px] w-full h-0.5 bg-green-500"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: [0, 0.4, 0.4, 0] }}
                            transition={{ duration: 3, delay: 3, ease: "easeInOut" }}
                            style={{ transformOrigin: 'center' }}
                            />
                        </div>
                    </PageTransition>
                </div>
            </section>
            <section className="relative bg-background">
                <a id="projects"/>
                <div className="relative h-auto z-1 flex items-center justify-center">
                    <Projects/>
                </div>
            </section>
            <section className="relative bg-background">
                <a id="about"/>
                <div className="relative h-auto z-1 flex items-center justify-center">
                    <About/>
                </div>
            </section>
        </div>
    );
}
