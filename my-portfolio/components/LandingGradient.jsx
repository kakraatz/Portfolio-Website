import {useEffect, useState} from 'react';
import { useTheme } from 'next-themes';

export default function LandingGradient() {
  const { theme } = useTheme();

  const initialGradient = theme === 'dark' ? 'from-transparent to-gray-900' : 'from-transparent to-white';

  return (
    <div className="absolute inset-0 z-10">
      <div className={`absolute inset-0 bg-gradient-to-b ${initialGradient}`}>
      </div>
    </div>
  );
}
