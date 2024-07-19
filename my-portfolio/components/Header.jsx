'use client';

import { useState, useEffect } from 'react';
import HeaderLogo from './HeaderLogo';
import Navbar from './Navbar';
import NavbarExpander from './NavbarExpander';

export default function Header() {
    const [navOpen, setNavOpen] = useState(false);

    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        setInitialized(true);
        }, []);

    return (
        <div className={`bg-transparent p-4 flex flex-col items-center ${initialized ? 'transition-all' : ''}`}>
            <HeaderLogo/>
            <div className="relative w-full flex flex-col items-center">
                <NavbarExpander onClick={() => setNavOpen(!navOpen)} isOpen={navOpen}/>
                <Navbar isOpen={navOpen}/>
            </div>
        </div>
    );
}
