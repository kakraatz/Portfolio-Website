'use client';

import Link from 'next/link';
import ThemeSwitcher from '../components/ThemeSwitcher';
import {useTheme} from "next-themes";

export default function Navbar({ isOpen }) {
    const { theme, setTheme } = useTheme();

    return (
        <nav className={`fixed left-0 top-0 h-full bg-transparent p-4 transition-transform duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
            <ul className="flex flex-col items-start space-y-4 items-center">
                <li>
                    <a href="#projects" className="hover:text-gray-400">Projects</a>
                </li>
                <li>
                    <a href="#about" className="hover:text-gray-400">About</a>
                </li>
                <li>
                    <Link href="../app/contact/contact.jsx" className="hover:text-gray-400">Contact</Link>
                </li>
                <li>
                    <ThemeSwitcher />
                </li>
            </ul>
        </nav>
    );
}
