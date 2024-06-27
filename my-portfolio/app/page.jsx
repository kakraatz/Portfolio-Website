'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Script from 'next/script';
import LandingGradient from "@/components/LandingGradient";
import PageTransition from "@/components/PageTransition";
import TextTyper from "@/components/TextTyper";

export default function Home() {
    const { theme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        function greeting_message(target, message, speed) {
            let i = 0;
            const targetElement = document.getElementById(target);
            targetElement.innerHTML = '';
            const interval = setInterval(() => {
                if (i < message.length) {
                    targetElement.innerHTML += message.charAt(i);
                    i++;
                } else {
                    clearInterval(interval);
                }
            }, speed);
        }

        setTimeout(() => {
            greeting_message("mainHeaderMessage", "Kevin Kraatz", 175);
        }, 1000);

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
                        <div
                            className={`text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                        >
                            <h2 id="mainHeader" className="text-6xl font-bold mb-4">Kevin</h2>
                            <h1 id="mainHeaderMessage" className="text-xl" style={{ minHeight: '10em' }}></h1>
                        </div>
                    </div>
                </div>
            </section>
            </PageTransition>
        </div>
    );
}
