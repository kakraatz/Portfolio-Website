'use client';

import { useState, useEffect } from 'react';

export default function Header() {
    const [navOpen, setNavOpen] = useState(false);

    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        setInitialized(true);
        }, []);

    return (
        <div className="bg-transparent p-4 flex">
            <div className="relative flex w-100 items-center">
                <p><span className="text-green-500">&copy; {new Date().getFullYear()} </span>
                 Kevin Kraatz.
                </p>
            </div>
        </div>
    );
}
