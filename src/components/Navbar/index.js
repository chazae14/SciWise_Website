import React, { useState } from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    MobileMenu,
    Overlay,
} from "./NavbarElements";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Nav>
                <Bars onClick={toggleMenu} />

                {/* Desktop Menu */}
                <NavMenu>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/events">Issues</NavLink>
                    <NavLink to="/submissions">Submissions</NavLink>
                    <NavLink to="/team">About Us</NavLink>
                    <NavLink to="/manual">Manual</NavLink>
                </NavMenu>

                {/* Logo */}
                <NavBtn>
                    <a href="/home">
                        <img
                            src="/sciwise.png"
                            alt="SciWISE"
                            style={{ height: "50px", width: "auto", cursor: "pointer" }}
                        />
                    </a>
                </NavBtn>
            </Nav>

            {/* Overlay */}
            <Overlay isOpen={isOpen} onClick={closeMenu} />

            {/* Sliding Mobile Menu */}
            <MobileMenu isOpen={isOpen}>
                <NavLink to="/home" onClick={closeMenu}>Home</NavLink>
                <NavLink to="/events" onClick={closeMenu}>Issues</NavLink>
                <NavLink to="/submissions" onClick={closeMenu}>Submissions</NavLink>
                <NavLink to="/team" onClick={closeMenu}>About Us</NavLink>
                <NavLink to="/manual" onClick={closeMenu}>Manual</NavLink>
            </MobileMenu>
        </>
    );
};

export default Navbar;
