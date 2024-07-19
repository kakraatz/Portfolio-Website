'use client';

import Link from 'next/link';
import ThemeSwitcher from '../components/ThemeSwitcher';
import NavLink from '../components/NavLink'
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import {useEffect, useState} from "react";

export default function Navbar({ isOpen }) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    if(!mounted) {
        return null;
    }

    return (
        <motion.nav className="bg-transparent p-4" initial={false} animate={isOpen ? "open" : "closed"}>
            <motion.ul
                className="flex flex-col items-center space-y-4 rounded-lg overflow-hidden"
                variants={{
                    open: {
                        borderRadius: "0.5rem",
                        clipPath: "inset(0% 0% 0% 0%)",
                        transition: {
                            duration: 0.2
                        }
                    },
                    closed: {
                        borderRadius: "0.5rem",
                        clipPath: "inset(0% 0% 100% 0%)",
                        transition: {
                            duration: 0.2
                        }
                    }
                }}>
                <motion.li>
                    <NavLink href="#projects" className="hover:text-stone-400">
                        Projects
                    </NavLink>
                </motion.li>
                <motion.li>
                    <NavLink href="#about" className="hover:text-stone-400">
                        About
                    </NavLink>
                </motion.li>
                <motion.li>
                    <a href="mailto:hello@kevinkraatz.com" className="hover:text-stone-400">
                        Contact
                    </a>
                </motion.li>
                <motion.li>
                    <div className="p-2">
                        <ThemeSwitcher/>
                    </div>
                </motion.li>
            </motion.ul>
        </motion.nav>
    );
}
