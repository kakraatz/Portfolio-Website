'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    setMounted(true);
  }, [])

  if(!mounted) {
    return null;
  }

  return (
    <button
      className="relative flex items-center justify-center w-14 min-h-14 rounded-lg lg:hover:bg-green-500 lg:hover:bg-opacity-40"
      onClick={toggleTheme}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {theme === 'dark' ? (
            <LightModeOutlinedIcon style={{fontSize: 36, color: 'white', opacity: 1}}/>
        ) : (
            <ModeNightOutlinedIcon style={{fontSize: 36, color: 'black', opacity: 1}}/>
        )}
      </div>
    </button>
  );
}
