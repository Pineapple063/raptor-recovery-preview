import '../css/Footer.css';
import logoFinal from '../assets/logoFinal.png'
import { ChevronRight } from 'lucide-react';
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-grid">
                <div className="footer-grid-item logo-text">
                    <img className="footer-logo" src={logoFinal} alt="Logo" />
                    <p className="footer-text">Reliable towing and roadside assistance, available 24/7. Call us anytime for fast, professional service!</p>
                    <div className="social-media-icons">
                        <a href="https://www.facebook.com/raptorrecovery" target="_blank" rel="noopener noreferrer"><FaFacebook color="#fff" size={32} className="social-media-icon facebook" /></a>
                        <a href="https://www.instagram.com/raptorrecovery/" target="_blank" rel="noopener noreferrer"><RiInstagramFill color="#fff" size={32} className="social-media-icon instagram" /></a>
                        <a href="mailto:contact@raptorrecovery.ie" rel="noopener noreferrer"><MdEmail color="#fff" size={32} className="social-media-icon email" /></a>
                        <a href="tel:+353 1 234 5678" target="_blank" rel="noopener noreferrer"><FaSquarePhone color="#fff" size={32} className="social-media-icon phone" /></a>
                    </div>
                </div>
                <div className="footer-grid-item useful-links">
                    <p><span>Quick </span><span className="bold">Links</span></p>
                    <div className="quick-links-list">
                        <div className='quick-link'><ChevronRight/><a href="#">Home</a></div>
                        <div className='quick-link'><ChevronRight/><a href="#">Towing</a></div>
                        <div className='quick-link'><ChevronRight/><a href="#">Roadside Assistance</a></div>
                        <div className='quick-link'><ChevronRight/><a href="#">Accident Recovery</a></div>
                        <div className='quick-link'><ChevronRight/><a href="#">Vehicle Unlocking</a></div>
                        <div className='quick-link'><ChevronRight/><a href="#">Key Replacement</a></div>
                        <div className='quick-link'><ChevronRight/><a href="#">Areas Served</a></div>
                        <div className='quick-link'><ChevronRight/><a href="#">Pricing</a></div>
                        <div className='quick-link'><ChevronRight/><a href="#">About Us</a></div>
                        <div className='quick-link'><ChevronRight/><a href="#">Contact Us</a></div>
                        <div className='quick-link'><ChevronRight/><a href="#">FAQs</a></div>
                    </div>
                </div>
                <div className="footer-grid-item contact-info">
                    <p><span>Contact </span><span className="bold">Us</span></p>
                    <div className="contact-info-list">
                        <div className='contact-info-item'><FaSquarePhone size={24}/><a href="tel:+353 87 120 0000">+353 87 120 0000</a></div>
                        <div className='contact-info-item'><MdEmail size={24}/><a href="mailto:contact@raptorrecovery.ie">contact@raptorrecovery.ie</a></div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Raptor Recovery</p>
            </div>
        </div>
    )
};

export default Footer