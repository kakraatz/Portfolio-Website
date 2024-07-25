'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import MenuButton from "@/components/MenuButton.jsx";

export default function NavbarExpander({ onClick, isOpen }) {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <button
            onClick={onClick}
            className="relative flex items-center justify-center w-14 min-h-14 mt-4 rounded-lg overflow-hidden transition-colors duration-300 ease-in-out lg:hover:bg-green-500 lg:hover:bg-opacity-40"
        >
            {mounted && (
                <div className="absolute flex items-center justify-center">
                  <MenuButton
                    isOpen={isOpen}
                    stroke={theme === 'dark' ? 'white' : 'black'}
                  />
                </div>
              )}
        </button>
    );
}
