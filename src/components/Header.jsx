import React, { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom";
import { Menu, ArrowLeftToLine, CircleUserRound, ChevronDown, ChevronRight } from 'lucide-react';
import '../css/Header.css'
import logoFinal from '../assets/logoFinal.png'
import { NavDropdownItem, NavItem } from "./NavItem";



function Header() {


    const [menuOpen, setMenuOpen] = useState(false);




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
                    <div className={`navbar-menu ${menuOpen ? 'show' : ''}`}>
                        <ul className={`navbar-nav flex-grow-1 ${menuOpen ? 'show' : ''}`}>
                            <NavDropdownItem Name="Services" Items={["Towing", "Jump Start Service", "Puncture Repair & Spare Wheel Fitting", "Fuel Delivery & Wrong Fuel Removal", "Lockout Assistance", "Battery Replacement", "Diagnostics & Repair", "Winching", "Insurance & Warranty Assistance", "Scrap Car Buying"]}/>
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