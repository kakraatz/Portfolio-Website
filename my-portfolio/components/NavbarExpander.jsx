'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavbarExpander({ onClick, isOpen }) {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <button
            onClick={onClick}
            className="relative flex items-center justify-center w-14 min-h-14 mt-4 rounded-lg overflow-hidden hover:bg-stone-600 hover:bg-opacity-40"
            style={{ transition: 'background-color 0.3s ease' }}>
            <div className="absolute inset-0 flex items-center justify-center">
                {mounted && (
                    <MenuIcon style={{fontSize: 36, color: resolvedTheme === 'dark' ? 'white' : 'black', opacity: 1}}/>
                )}
            </div>
        </button>
    );
}
