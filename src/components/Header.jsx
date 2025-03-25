import React, { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom";
import { Menu, ArrowLeftToLine, CircleUserRound, ChevronDown, ChevronRight } from 'lucide-react';
import '../css/Header.css'
import logoFinal from '../assets/logoFinal.png'
import { NavDropdownItem, NavItem } from "./NavItem";



function Header() {


    const [menuOpen, setMenuOpen] = useState(false);
    const [menuHeight, setMenuHeight] = useState(0);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);


    useEffect(() => {
        const handleResize = () => {
            
            setIsDesktop(window.innerWidth > 1024);
            if (!isDesktop) {

                setMenuOpen(false);
                let maxHeight = 0;
                const subMenuHeight = document.querySelectorAll('.nav-submenu');
                for (let i = 0; i < subMenuHeight.length; i++) {
                    const height = subMenuHeight[i].offsetHeight;
                    console.log(height);
                    if (height > maxHeight) {
                        maxHeight = height;
                        setMenuHeight(height);
                    }
                }
            }
            
        };
        

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => {
        if (!menuOpen) {
            setMenuOpen(true);
        } else {
            setMenuOpen(false);
        }
        
    };



    return(
        <>
        <header className="nav-header">
            <nav className="navbar">
                <div className="navbar-container">
                    <Link className="navbar-brand" asp-area="" asp-page="/" to="/">
                        <img className="header-logo" src={logoFinal} alt="Logo" />
                    </Link>
                    <button onClick={toggleMenu} className="navbar-toggler" type="button" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                        <Menu className={`menu-btn ${menuOpen ? 'open' : ''}`} color="white"/>
                        </span>
                    </button>
                    <div onClick={toggleMenu} className={`navbar-menu-overlay ${menuOpen ? 'show' : ''}`}></div>
                    <div className={`navbar-menu ${menuOpen ? 'show' : ''}`} style={!isDesktop ? {height: `${menuHeight+32}px`} : {}}>
                        <ul className={`navbar-nav flex-grow-1 ${menuOpen ? 'show' : ''}`}>
                            <NavDropdownItem MenuOpen={menuOpen} Name="Services" Items={["Towing", "Jump Start Service", "Puncture Repair & Spare Wheel Fitting", "Fuel Delivery & Wrong Fuel Removal", "Lockout Assistance", "Battery Replacement", "Diagnostics & Repair", "Winching", "Insurance & Warranty Assistance", "Scrap Car Buying"]}/>
                            <NavItem Name="Areas Served"/>
                            <NavItem Name="Pricing"/>
                            <NavItem Name="Contact Us"/>
                            <NavItem Name="FAQs"/>
                            <NavItem Name="About Us"/>

                        </ul>
                        
                        
                                
                    </div>
                    
                </div>
            </nav>
        </header>
        </>
    )

}

export default Header