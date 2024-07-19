'use client';

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import LinkChanger from "./LinkChanger";
import LogoLink from "./LogoLink";

export default function HeaderLogo() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <LogoLink href="/">
            <button className="relative flex items-center justify-center w-14 min-h-14 rounded-lg overflow-hidden hover:bg-stone-600 hover:bg-opacity-40">
                <div className="absolute inset-0 flex items-center justify-center">
                    {mounted && (
                        <svg viewBox="0 0 74 78" className={`w-10 h-10 ${resolvedTheme === 'dark' ? 'fill-white' : 'fill-black'}`}>
                            <path d="M20 14h-6v50h6V52.9l14 14V78H0V0h34v11.1l-14 14V14Z"/>
                            <path d="M22.1 46H20V32h2.1l32-32h19.8l-39 39 39 39H54.1l-32-32Z"/>
                        </svg>
                    )}
                </div>
            </button>
        </LogoLink>
    );
}
