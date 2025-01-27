'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [scrolled, isScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); 
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                isScrolled(true);
            } else {
                isScrolled(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${!menuOpen ? "bg-white/60  w-[97%] mx-[1.5%] top-1 " : "bg-white/100 border-0 top-0 left-0"} border-black border-2 shadow-md p-4 fixed  w-full z-50 rounded-lg `}>
            <div className="container mx-auto flex justify-between items-center">
                
                <div className="text-3xl font-bold">
                    GDSC IIT Indore
                </div>

                <ul className="hidden md:flex flex-row space-x-6">
                    <li className="text-2xl font-semibold font-sans group relative">
                        <Link href="/" className="relative text-gray-800 group-hover:text-[rgba(34,197,94,255)] transition-colors duration-700">
                            Home
                            <span className="absolute left-0 top-0 w-0 h-[2px] bg-[rgba(34,197,94,255)] group-hover:w-full transition-all duration-700 opacity-0 group-hover:opacity-100"></span>
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[rgba(34,197,94,255)] group-hover:w-full transition-all duration-700 opacity-0 group-hover:opacity-100"></span>
                        </Link>
                    </li>
                    <li className="text-2xl font-semibold font-sans group relative">
                        <Link href="/#about" className="relative text-gray-800 group-hover:text-red transition-colors duration-700">
                            About
                            <span className="absolute left-0 top-0 w-0 h-[2px] bg-red group-hover:w-full transition-all duration-700 opacity-0 group-hover:opacity-100"></span>
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red group-hover:w-full transition-all duration-700 opacity-0 group-hover:opacity-100"></span>
                        </Link>
                    </li>
                    <li className="text-2xl font-semibold font-sans group relative">
                        <Link href="/team" className="relative text-gray-800 group-hover:text-yellow transition-colors duration-700">
                            Team
                            <span className="absolute left-0 top-0 w-0 h-[2px] bg-yellow group-hover:w-full transition-all duration-700 opacity-0 group-hover:opacity-100"></span>
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow group-hover:w-full transition-all duration-700 opacity-0 group-hover:opacity-100"></span>
                        </Link>
                    </li>
                    <li className="text-2xl font-semibold font-sans group relative">
                        <Link href="/contact" className="relative text-gray-800 group-hover:text-[#2563EB] transition-colors duration-700">
                            Contact
                            <span className="absolute left-0 top-0 w-0 h-[2px] bg-[#2563EB] group-hover:w-full transition-all duration-700 opacity-0 group-hover:opacity-100"></span>
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#2563EB] group-hover:w-full transition-all duration-700 opacity-0 group-hover:opacity-100"></span>
                        </Link>
                    </li>
                </ul>

                <div className="md:hidden flex flex-col items-center" onClick={() => setMenuOpen(!menuOpen)}>

    <div className={`w-6 h-0.5 bg-black mb-1 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
    
    <div className={`w-6 h-0.5 bg-black mb-1 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
   
    <div className={`w-6 h-0.5 bg-black mb-1 transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
</div>

            </div>

            <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} bg-white shadow-md p-4 absolute top-16 left-0 w-full transition-transform duration-700`}>
                <ul className="flex flex-col space-y-6">
                    <li className="navbar-comp text-2xl font-semibold font-sans group relative">
                        <Link href="/" className="relative text-gray-800 group-hover:text-[rgba(34,197,94,255)]  transition-colors duration-700">
                            Home
                            <span className="absolute left-0 top-0 w-0 h-[2px] bg-[rgba(34,197,94,255)]  group-hover:w-full transition-all duration-700 opacity-0 group-hover:opacity-100"></span>
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[rgba(34,197,94,255)]  group-hover:w-full transition-all duration-700 opacity-0 group-hover:opacity-100"></span>
                        </Link>
                    </li>
                    <li className="navbar-comp text-2xl font-semibold font-sans group relative">
                        <Link href="/#about" className="relative text-gray-800 group-hover:text-red transition-colors duration-700">
                            About
                            <span className="absolute left-0 top-0 w-0 h-[2px] bg-red group-hover:w-full transition-all duration-700 opacity-0 group-hover:opacity-100"></span>
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red group-hover:w-full transition-all duration-700 opacity-0 group-hover:opacity-100"></span>
                        </Link>
                    </li>
                    <li className="navbar-comp text-2xl font-semibold font-sans group relative">
                        <Link href="/team" className="relative text-gray-800 group-hover:text-yellow transition-colors duration-700">
                            Team
                            <span className="absolute left-0 top-0 w-0 h-[2px] bg-yellow group-hover:w-full transition-all duration-700 opacity-0 group-hover:opacity-100"></span>
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow group-hover:w-full transition-all duration-700 opacity-0 group-hover:opacity-100"></span>
                        </Link>
                    </li>
                    <li className="navbar-comp text-2xl font-semibold font-sans group relative">
                        <Link href="/contact" className="relative text-gray-800 group-hover:text-[#2563EB] transition-colors duration-700">
                            Contact
                            <span className="absolute left-0 top-0 w-0 h-[2px] bg-[#2563EB] group-hover:w-full transition-all duration-700 opacity-0 group-hover:opacity-100"></span>
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#2563EB] group-hover:w-full transition-all duration-700 opacity-0 group-hover:opacity-100"></span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;