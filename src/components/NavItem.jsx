import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight } from 'lucide-react';

function NavDropdownItem(props) {
    const [isHovered, setIsHovered] = useState(false);
    const [isParentHovered, setIsParentHovered] = useState(false);
    const [isSubmenuHovered, setIsSubmenuHovered] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
    const closeTimeoutRef = useRef(null);
    
    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 1024);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isOpen = isParentHovered || isSubmenuHovered;

    // Clear any pending close timeout
    const cancelClose = () => {
        if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
        }
    };

    // Schedule a delayed close
    const scheduleClose = () => {
        cancelClose();
        closeTimeoutRef.current = setTimeout(() => {
        setIsParentHovered(false);
        setIsSubmenuHovered(false);
        }, 300); // Adjust delay as needed
    };



    return (
        <li 
            className={`nav-parent-item ${isOpen || isHovered ? "open" : ""}`}
            onMouseEnter={() => {
                if (isDesktop) {
                  cancelClose();
                  setIsParentHovered(true);
                }else {
                    setIsHovered(true)
                }
            }}
            onMouseLeave={() => {
                if (isDesktop) {
                    scheduleClose();
                }else {
                    setIsHovered(false)
                }
            }}
        >
            {props.Name}
            <ChevronDown className={`chevron-down ${isOpen ? "open" : ""}`}/>
            <ChevronRight className="chevron-right"/>
            {isDesktop && (
                <ul 
                    className={`nav-submenu ${isOpen ? "open" : ""}`}
                    onMouseEnter={() => {
                        cancelClose();
                        setIsSubmenuHovered(true);
                    }} 
                    onMouseLeave={() => {
                        scheduleClose();
                    }}
                >
                {props.Items.map((item, index) => (
                    <li className="nav-submenu-item" key={index}>
                        <Link className="nav-submenu-link" asp-area="" to={`/services/${item.replace(/\s+/g, "-").replace("&", "and").toLowerCase()}`}>{item}</Link>
                    </li>
                ))}
                </ul>
            )}
            
        </li>
    );
}


function NavItem(props) {
    const [isHovered, setIsHovered] = useState(false);
    const getLink = () => {
        switch(props.Name) {
            case "Areas Served":
                return "/areas-served";
            case "Pricing":
                return "/pricing";
            case "Contact Us":
                return "/contact-us";
            case "FAQs":
                return "/faq";
            case "About Us":
                return "/about-us";
            default:
                return "/";
        }
    }

    const link = getLink();
    console.log("props: ", props)
    return (
        <Link to={link}>
            <li 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`nav-parent-item ${isHovered ? "open" : ""}`}
            >
                {props.Name}
                <ChevronRight className="chevron-right"/>
            </li>
        </Link>
    );
}

export { NavDropdownItem, NavItem };