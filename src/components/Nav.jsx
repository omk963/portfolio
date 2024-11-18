import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import useScreenSize from './useScreenSize';
import PropTypes from 'prop-types';

const Nav = ({ scrollToSection, sections }) => {
    const [isOpen, setIsOpen] = useState(false);
    const screenSize = useScreenSize();


    const toggleNavbar = () => {
        setIsOpen(prev => !prev)
    };

    const Navlinks = () => {
        return (
            <>
                <button className='duration-200 hover:font-bold hover:scale-105 text-2xl'
                    onClick={() => {
                        scrollToSection(sections.home)
                        if (!screenSize.webView) {
                            toggleNavbar()
                        }
                    }}>Home</button>
                <button className='duration-200 hover:font-bold hover:scale-105 text-2xl'
                    onClick={() => {
                        scrollToSection(sections.about)
                        if (!screenSize.webView) {
                            toggleNavbar()
                        }
                    }}>About</button>
                <button className='duration-200 hover:font-bold hover:scale-105 text-2xl'
                    onClick={() => {
                        scrollToSection(sections.projects)
                        if (!screenSize.webView) {
                            toggleNavbar()
                        }
                    }}>Projects</button>
                <button className='duration-200 hover:font-bold hover:scale-105 text-2xl'
                    onClick={() => {
                        scrollToSection(sections.contact)
                        if (!screenSize.webView) {
                            toggleNavbar()
                        }
                    }}>Contact</button>
            </>
        );
    };

    return (
        <>
            <nav className={`flex justify-end w-2/5 mr-9`}>
                <div></div>
                <div className='hidden w-full justify-between md:flex'>
                    <Navlinks />
                </div>

                <div className='md:hidden duration-300 hover:scale-125'>
                    <button onClick={toggleNavbar}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div className='flex flex-col items-center basis-full animate-slideDown mb-5 leading-loose'>
                    <Navlinks />
                </div>
            )}
        </>
    );
};

Nav.propTypes = {
    scrollToSection: PropTypes.func,
    sections: PropTypes.object
};

export default Nav;