'use client';

import { useState } from 'react';
import { useTheme } from 'next-themes';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";

export default function NavbarExpander({ onClick, isOpen }) {
    const { theme } = useTheme();
    const [hovered, setHovered] = useState(false);

    return (
        <button
            onClick={onClick}
            className="relative flex items-center justify-center w-14 min-h-14 mt-4 rounded-lg overflow-hidden"
            style={{
                backgroundColor: hovered ? '#2d2d2d' : 'transparent',
                transition: 'background-color 0.3s ease'
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="absolute inset-0 flex items-center justify-center">
                {theme === 'dark' ? (
                    <MenuIcon style={{fontSize: 36, color: 'white', opacity: 1}}/>
                ) : (
                    <MenuIcon style={{fontSize: 36, color: 'black', opacity: 1}}/>
                )}
            </div>
        </button>
    );
}