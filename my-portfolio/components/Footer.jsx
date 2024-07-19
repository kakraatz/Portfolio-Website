'use client';

import { useState, useEffect } from 'react';

export default function Header() {
    const [navOpen, setNavOpen] = useState(false);

    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        setInitialized(true);
        }, []);

    return (
        <div className="bg-transparent p-4 flex flex-col items-center">
            <div className="relative w-full flex flex-col items-center">
                <div>// &copy; {new Date().getFullYear()} Kevin Kraatz.</div>
            </div>
        </div>
    );
}
