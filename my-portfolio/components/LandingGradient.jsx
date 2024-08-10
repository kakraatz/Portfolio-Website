'use client';

import { useEffect, useState } from 'react';

export default function LandingGradient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background to-15%">
      </div>
    </div>
  );
}
