'use client';

import ThemeSwitcher from '../components/ThemeSwitcher';
import { motion } from 'framer-motion';
import {useEffect, useState} from "react";
import Link from "next/link";

const lineVariants = {
  openUp: { height: '8px', transition: { duration: 0.3 } },
  closedDown: { height: '0%', transition: { duration: 0.3 } },
  openRight: { width: '8px', transition: { duration: 0.3 } },
  closedLeft: { width: '0%', transition: { duration: 0.3 } },
};

export default function Navbar({ isOpen, activeLink, setActiveLink }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    if(!mounted) {
        return null;
    }

    return (
        <motion.nav className="bg-transparent pt-4" initial={false} animate={isOpen ? "open" : "closed"}>
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
                <motion.li className="relative flex justify-center">
                    <Link href="/#projects" className="hover:text-green-500">
                        Projects
                    </Link>
                    <motion.span
                        className="absolute left-[-6px] bottom-0 w-0.5 bg-green-500"
                        variants={lineVariants}
                        initial="closedDown"
                        animate={activeLink === 'projects' ? 'openUp' : 'closedDown'}
                    />
                    <motion.span
                        className="absolute left-[-6px] bottom-0 h-0.5 bg-green-500"
                        variants={lineVariants}
                        initial="closedLeft"
                        animate={activeLink === 'projects' ? 'openRight' : 'closedLeft'}
                    />
                </motion.li>
                <motion.li className="relative flex justify-center">
                    <Link href="/#about" className="hover:text-green-500">
                        About
                    </Link>
                    <motion.span
                        className="absolute left-[-6px] bottom-0 w-0.5 bg-green-500"
                        variants={lineVariants}
                        initial="closedDown"
                        animate={activeLink === 'about' ? 'openUp' : 'closedDown'}
                    />
                    <motion.span
                        className="absolute left-[-6px] bottom-0 h-0.5 bg-green-500"
                        variants={lineVariants}
                        initial="closedLeft"
                        animate={activeLink === 'about' ? 'openRight' : 'closedLeft'}
                    />
                </motion.li>
                <motion.li className="relative flex justify-center" onClick={() => setActiveLink('contact')}>
                    <a href="mailto:hello@kevinkraatz.com" className="hover:text-green-500">
                        Contact
                    </a>
                    <motion.span
                        className="absolute left-[-6px] bottom-0 w-0.5 bg-green-500"
                        variants={lineVariants}
                        initial="closedDown"
                        animate={activeLink === 'contact' ? 'openUp' : 'closedDown'}
                    />
                    <motion.span
                        className="absolute left-[-6px] bottom-0 h-0.5 bg-green-500"
                        variants={lineVariants}
                        initial="closedLeft"
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
