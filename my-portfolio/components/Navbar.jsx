'use client';

import Link from 'next/link';
import ThemeSwitcher from '../components/ThemeSwitcher';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

export default function Navbar({ isOpen }) {
    const { theme, setTheme } = useTheme();

    return (
        <motion.nav className="bg-transparent p-4" initial={false} animate={isOpen ? "open" : "closed"}>
            <motion.ul
                className="flex flex-col items-center space-y-4 overflow-hidden"
                variants={{
                    open: {
                        clipPath: "inset(0% 0% 0% 0%)",
                        transition: {
                            duration: 0.2
                        }
                    },
                    closed: {
                        clipPath: "inset(0% 0% 100% 0%)",
                        transition: {
                            duration: 0.2
                        }
                    }
                }}>
                <motion.li>
                    <a href="#projects" className="hover:text-stone-400">
                        Projects
                    </a>
                </motion.li>
                <motion.li>
                    <a href="#about" className="hover:text-stone-400">
                        About
                    </a>
                </motion.li>
                <motion.li>
                    <Link href="/contact" className="hover:text-stone-400">
                        Contact
                    </Link>
                </motion.li>
                <motion.li>
                    <ThemeSwitcher/>
                </motion.li>
            </motion.ul>
        </motion.nav>
    );
}
