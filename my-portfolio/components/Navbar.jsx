'use client';

import ThemeSwitcher from '../components/ThemeSwitcher';
import NavLink from '../components/NavLink'
import { motion } from 'framer-motion';
import {useEffect, useState} from "react";

const lineVariants = {
  openUp: { height: '30%', transition: { duration: 0.3 } },
  closedDown: { height: '0%', transition: { duration: 0.3 } },
  openRight: { width: '10%', transition: { duration: 0.3 } },
  closedLeft: { height: '0%', transition: { duration: 0.3 } },
};

export default function Navbar({ isOpen }) {
    const [mounted, setMounted] = useState(false);
    const [activeLink, setActiveLink] = useState(null);

    useEffect(() => {
        setMounted(true);
    }, [])

    if(!mounted) {
        return null;
    }

    return (
        <motion.nav className="bg-transparent p-4" initial={false} animate={isOpen ? "open" : "closed"}>
            <motion.ul
                className="flex flex-col items-center space-y-4 rounded-lg overflow-hidden relative"
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
                <motion.li className="relative flex justify-center w-full" onClick={() => setActiveLink('projects')}>
                    <NavLink href="#projects" id="projects" className="hover:text-green-500">
                        Projects
                    </NavLink>
                    <motion.span
                        className="absolute left-0 bottom-0 w-0.5 bg-green-500"
                        variants={lineVariants}
                        initial="closedDown"
                        animate={activeLink === 'projects' ? 'openUp' : 'closedDown'}
                    />
                    <motion.span
                        className="absolute left-0 bottom-0 h-0.5 bg-green-500"
                        variants={lineVariants}
                        initial="closedRight"
                        animate={activeLink === 'projects' ? 'openRight' : 'closedLeft'}
                    />
                </motion.li>
                <motion.li className="relative flex justify-center w-full mb-4" onClick={() => setActiveLink('about')}>
                    <NavLink href="#about" id="about" className="hover:text-green-500">
                        About
                    </NavLink>
                    <motion.span
                        className="absolute left-0 bottom-0 w-0.5 bg-green-500"
                        variants={lineVariants}
                        initial="closedDown"
                        animate={activeLink === 'about' ? 'openUp' : 'closedDown'}
                    />
                    <motion.span
                        className="absolute left-0 bottom-0 h-0.5 bg-green-500"
                        variants={lineVariants}
                        initial="closedRight"
                        animate={activeLink === 'about' ? 'openRight' : 'closedLeft'}
                    />
                </motion.li>
                <motion.li className="relative flex justify-center w-full" onClick={() => setActiveLink('contact')}>
                    <a href="mailto:hello@kevinkraatz.com" className="hover:text-green-500">
                        Contact
                    </a>
                    <motion.span
                        className="absolute left-0 bottom-0 w-0.5 bg-green-500"
                        variants={lineVariants}
                        initial="closedDown"
                        animate={activeLink === 'contact' ? 'openUp' : 'closedDown'}
                    />
                    <motion.span
                        className="absolute left-0 bottom-0 h-0.5 bg-green-500"
                        variants={lineVariants}
                        initial="closedRight"
                        animate={activeLink === 'contact' ? 'openRight' : 'closedLeft'}
                    />
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
