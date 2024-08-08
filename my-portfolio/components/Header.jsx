'use client';

import { useState, useEffect } from 'react';
import HeaderLogo from './HeaderLogo';
import Navbar from './Navbar';
import NavbarExpander from './NavbarExpander';
import { useActiveLink } from '../components/ActiveLinkProvider';

export default function Header() {
    const [navOpen, setNavOpen] = useState(false);
    const {activeLink, setActiveLink} = useActiveLink();
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        setInitialized(true);
        }, []);

    const handleHomeClick = () => {
        setActiveLink('/');
    };

    return (
        <div className={`bg-transparent p-4 flex flex-row xl:gap-0 ml-4 mt-4 mr-2 xl:ml-0 xl:mt-0 xl:mr-0 xl:flex-col xl:items-center xl:justify-center ${initialized ? 'transition-all' : ''}`}>
            <HeaderLogo onClick={handleHomeClick}/>
            <span className="w-full"></span>
            <div className="relative flex flex-col inset-0 items-center">
                <NavbarExpander onClick={() => setNavOpen(!navOpen)} isOpen={navOpen}/>
                <Navbar isOpen={navOpen} activeLink={activeLink} setActiveLink={setActiveLink}/>
            </div>
        </div>
    );
}
