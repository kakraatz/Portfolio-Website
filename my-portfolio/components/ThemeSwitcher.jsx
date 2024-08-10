'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

const iconVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};

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
        <motion.div
            key={theme}
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center"
        >
          {theme === 'dark' ? (
              <LightModeOutlinedIcon style={{ fontSize: 36, color: 'white' }}/>
          ) : (
              <DarkModeOutlinedIcon style={{ fontSize: 36, color: 'black' }}/>
          )}
        </motion.div>
      </button>
  );
}
