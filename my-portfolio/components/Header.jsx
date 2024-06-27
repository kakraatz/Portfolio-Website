'use client';

import { useState } from 'react';
import HeaderLogo from './HeaderLogo';
import Navbar from './Navbar';
import NavbarExpander from './NavbarExpander';

export default function Header() {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <div className="bg-transparent p-4 flex flex-col items-center">
            <HeaderLogo />
            <NavbarExpander onClick={() => setNavOpen(!navOpen)} isOpen={navOpen} />
            <div className="relative w-full">
                <Navbar isOpen={navOpen} />
            </div>
        </div>
    );
}
