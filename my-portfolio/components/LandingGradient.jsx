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
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-stone-950 to-15%">
        </div>
      </div>
    );
  }

  const gradientClass = theme === 'dark' ? 'from-stone-950 to-15%' : 'from-white to-15%';

  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className={`absolute inset-0 pointer-events-none bg-gradient-to-t ${gradientClass}`}>
      </div>
    </div>
  );
}
