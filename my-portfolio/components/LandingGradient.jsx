import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function LandingGradient() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a fallback gradient that matches the default theme
    return (
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 opacity-75 bg-gradient-to-b from-transparent to-gray-900">
        </div>
      </div>
    );
  }

  const gradientClass = theme === 'dark' ? 'from-transparent to-gray-900' : 'from-transparent to-white';

  return (
    <div className="absolute inset-0 z-10">
      <div className={`absolute inset-0 opacity-75 bg-gradient-to-b ${gradientClass}`}>
      </div>
    </div>
  );
}
