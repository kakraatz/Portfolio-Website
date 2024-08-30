'use client';

import { useState } from 'react';
import HeaderLogo from './HeaderLogo';
import Navbar from './Navbar';
import NavbarExpander from './NavbarExpander';
import { useActiveLink } from '../components/ActiveLinkProvider';
import { useStateContext } from '../components/StateProvider';
import { motion } from 'framer-motion';

export default function Header() {
    const [navOpen, setNavOpen] = useState(false);
    const {activeLink, setActiveLink} = useActiveLink();
    const { loaded } = useStateContext();

    const handleHomeClick = () => {
        setActiveLink('/');
    };

    const variants = {
        initial: { opacity: 0 },
        enter: { opacity: 1 },
    };

    return (
        <motion.div
            className="bg-transparent p-4 flex flex-row xl:gap-0 ml-4 mt-4 mr-2 xl:ml-0 xl:mt-0 xl:mr-0 xl:flex-col xl:items-center xl:justify-center"
            initial="initial"
            animate={loaded ? "enter" : "initial"}
            exit="exit"
            variants={variants}
        >
            <HeaderLogo onClick={handleHomeClick}/>
            <span className="w-full"></span>
            <div className="relative flex flex-col inset-0 items-center">
                <NavbarExpander onClick={() => setNavOpen(!navOpen)} isOpen={navOpen}/>
                <Navbar isOpen={navOpen} activeLink={activeLink} setActiveLink={setActiveLink}/>
            </div>
        </motion.div>
    );
}
