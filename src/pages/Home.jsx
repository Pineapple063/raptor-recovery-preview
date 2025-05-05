import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Siren, Handshake, Phone, Check } from 'lucide-react';
import { IoIosStar } from "react-icons/io";
import { GiTowTruck } from "react-icons/gi";
import { FiClock } from "react-icons/fi";
import { PiThumbsUpBold } from "react-icons/pi";
import { RiTeamLine } from "react-icons/ri";
import { FaSquareWhatsapp } from "react-icons/fa6";
import '../css/Home.css';
import Header  from "../components/Header";
import CountUp from "../components/CountUp";
import HomeService from "../components/HomeService";
import whatWeOffer from '../assets/whatWeOffer.png';
import towingService from '../assets/towing_transparent.png'
import lockoutService from '../assets/lockout_transparent.png'
import keyService from '../assets/key_transparent.png'
import Footer from "../components/Footer";
import TowingImage from "../assets/towing.png";
import LockoutImage from "../assets/lockout.png";
import BatteryReplacementImage from "../assets/battery_replacement.png";
import BuyCarsImage from "../assets/buy_cars.png";
import DiagnosticsImage from "../assets/diagnostics.png";
import FuelImage from "../assets/fuel.png";
import InsuranceImage from "../assets/insurance.png";
import JumpStartImage from "../assets/jump_start.png";
import PunctureImage from "../assets/puncture_repair.png";
import WinchingImage from "../assets/winching.png";

export default function Home({ loading }) {
    const [heroHeight, setHeroHeight] = useState("100dvh");
    const [loadingSpinnerActive, setLoadingSpinnerActive] = useState(loading);

    const [showTitle1, setShowTitle1] = useState(false);
    const [showTitle2, setShowTitle2] = useState(false);
    const [showSubText, setShowSubText] = useState(false);
    const headerRef = useRef(null);
    const heroGridRef = useRef(null);
    const previousOrientation = useRef(getOrientation());
    const previousInnerHeight = useRef(window.innerHeight);
    const heightThreshold = 100;

    const waStyle = { background : "#fff"}

    useEffect(() => {
        
        setLoadingSpinnerActive(loading);
        
    }, [loading]);

    
    useEffect(() => {
        if (!loadingSpinnerActive) {
            setTimeout(() => {
                setShowTitle1(true);
            }, 200);
            setTimeout(() => {
                setShowTitle2(true);
            }, 500);
            setTimeout(() => {
                setShowSubText(true);
            }, 1000);
        }
    }, [loadingSpinnerActive]);

    const updateHeightInitial = () => {
        const screenHeight = window.innerHeight;
        const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0;
        const heroGridHeight = heroGridRef.current ? heroGridRef.current.offsetHeight : 0;

        const newHeight = `${screenHeight - (headerHeight + heroGridHeight)}px`;

        setHeroHeight(newHeight);
        console.log('Initial height calculation performed in useLayoutEffect:', newHeight);

        // Although the refs are initialized when the component runs,
        // updating them here ensures they definitely hold the values
        // captured after the initial layout for the subsequent event handling.
        previousOrientation.current = getOrientation();
        previousInnerHeight.current = window.innerHeight;
        console.log('Refs initialized/updated in useLayoutEffect:', previousOrientation.current, previousInnerHeight.current);
    }
    
    // useLayoutEffect for initial height calculation after DOM mutations
    useLayoutEffect(() => {
        console.log('useLayoutEffect for initial height running.');
        
        window.addEventListener('load', updateHeightInitial);
        console.log('Added window.load event listener in useLayoutEffect.');


        // Cleanup for window.load listener
        return () => {
            window.removeEventListener('load', updateHeightInitial);
            console.log('Removed window.load event listener.');
        };

    }, []);

    useEffect(() => {
        const updateHeight = () => {
            const currentOrientation = getOrientation();
            console.log("co:", currentOrientation);
            const orientationChanged = currentOrientation !== previousOrientation.current;
            console.log("oc:", orientationChanged);
            const currentInnerHeight = window.innerHeight;

            console.log("pi:", previousInnerHeight.current);
            console.log("ci:", currentInnerHeight);
            const heightSignificantlyChanged = Math.abs(currentInnerHeight - previousInnerHeight.current) > heightThreshold;
            console.log("hsc:", heightSignificantlyChanged);
            
            if ((currentOrientation === "landscape-primary" || currentOrientation === "landscape") && window.innerHeight < 600) {
                setHeroHeight("100dvh");
                previousOrientation.current = currentOrientation;
                previousInnerHeight.current = currentInnerHeight;
                return;
            }
            if (orientationChanged || (currentOrientation === previousOrientation.current && heightSignificantlyChanged) || previousOrientation.current === null) {
                const screenHeight = window.innerHeight;
                const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0;
                const heroGridHeight = heroGridRef.current ? heroGridRef.current.offsetHeight : 0;
                
                const newHeight = `${screenHeight - (headerHeight + heroGridHeight)}px`;

                setHeroHeight(newHeight);
                previousOrientation.current = currentOrientation;
                previousInnerHeight.current = currentInnerHeight;

                
            }else {
                console.log('Ignoring resize: likely address bar change');
                
            }
            
        };

        updateHeight();
        window.addEventListener("resize", updateHeight);
        window.scrollTo(0, 0);
        return () => window.removeEventListener("resize", updateHeight);
    }, []);

    function getOrientation() {
        if (screen.orientation && screen.orientation.type) {
          return screen.orientation.type; // e.g., "portrait-primary", "landscape-secondary"
        } else {
          // Fallback for older browsers or limited support
          return window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
        }
      }


    function openWhatsApp() {
        window.open('https://wa.me/353871200000', '_blank');
    }

    return(
        <>
            <div ref={headerRef}>
                <Header />
            </div>
            <div className="hero-container" style={{ height: heroHeight }}>
                <div className="hero-content">
                    <div className={`hero-main-text`}>
                        <span className={`hero-title-1 ${showTitle1 ? "show" : ""}`}>Fast, Reliable, and Affordable</span>
                        <span className={`hero-title-2 ${showTitle2 ? "show" : ""}`}>Towing Services</span>
                        <span className={`hero-sub-text ${showSubText ? "show" : ""}`}>Here when you need us.</span>
                    </div>
                </div>
            </div>
            <div className="hero-grid" ref={heroGridRef}>
                <div className="hero-grid-item">
                    <div className="hero-item-content">
                        <Siren color="white" size={32}/>

                        <span className="hero-item-title"><span className="bold">24/7 </span>Emergency Service</span>
                        
                    </div>  
                </div>
                <div className="hero-grid-item">
                    <div className="hero-item-content">
                        <Handshake color="white" size={32}/>
                        <span className="hero-item-title"><span className="bold">Towing </span><span>&</span> <span className="bold"> Roadside Assistance</span></span>
                    </div>  
                </div>
                <div className="hero-grid-item">
                    <div className="hero-item-content">
                        <Phone color="white" size={32}/>
                        <span className="hero-item-title bold">Call Now</span>
                    </div>  
                </div>
            </div>
            <div className="what-we-offer-container-grid">
                <img className="what-we-offer-image" src={whatWeOffer} alt="What we offer"/>
                <div className="what-we-offer-content">
                    <span className="what-we-offer-title">WHAT <span className="bold">WE OFFER</span></span>
                    <span className="what-we-offer-sub-title">EFFECTIVE VEHICLE TRANSPORTATION</span>
                    <div className="color-seperator"></div>
                    
                    <span className="what-we-offer-paragraph">We provide fast, courteous and inexpensive towing services in Dublin & Wicklow. We are fully insured and ready to respond to all your vehicle emergency needs 24 hours a day, seven days a week.</span>
                    <div className="what-we-offer-list">
                    <div className="color-seperator"></div>
                        
                        <div className="what-we-offer-list-item">
                            <Check color="#FBB721" size={28}/>
                            <span className="what-we-offer-list-item-title">Speedy arrival time of <span className="bold">less than 30 minutes</span></span>
                        </div>
                        <hr className="what-we-offer-list-hr"/>
                        <div className="what-we-offer-list-item">
                            <Check color="#FBB721" size={28}/>
                            <span className="what-we-offer-list-item-title">Competitive prices - <span className="bold">no hidden fees</span></span>
                        </div>
                        <hr className="what-we-offer-list-hr"/>
                        <div className="what-we-offer-list-item">
                            <Check color="#FBB721" size={28}/>
                            <span className="what-we-offer-list-item-title"><span className="bold">Friendly</span> and <span className="bold">professional</span> service</span>
                        </div>
                        <hr className="what-we-offer-list-hr"/>
                        <div className="what-we-offer-list-item">
                            <Check color="#FBB721" size={28}/>
                            <span className="what-we-offer-list-item-title">Available <span className="bold">24 hours</span> a day, <span className="bold">7 days</span> a week</span>
                        </div>
                        <hr className="what-we-offer-list-hr"/>
                    </div>
                </div>
                
            </div>
            <div className="about-icons-container">
                <div className="about-icons-overlay"></div>
                <div className="about-icons-grid">
                    <div className="about-icons-grid-item">
                        <div className="about-icons-grid-item-icons">

                            <IoIosStar color="#FBB721" size={32}/>
                            <IoIosStar color="#FBB721" size={32}/>
                            <IoIosStar color="#FBB721" size={32}/>
                            <IoIosStar color="#FBB721" size={32}/>
                            <IoIosStar color="#FBB721" size={32}/>

                        </div>
                        <CountUp Class="about-icons-grid-item-title" targetNumber={5}></CountUp>
                        <span className="about-icons-grid-item-sub-title">Star Service</span>
                    </div>
                    <div className="about-icons-grid-item">
                        <PiThumbsUpBold color="#FBB721" size={64}/>
                        
                        <CountUp Class="about-icons-grid-item-title" targetNumber={100} afterText={"%"}></CountUp>
                        
                        <span className="about-icons-grid-item-sub-title">Customer Satisfaction</span>
                    </div>
                    <div className="about-icons-grid-item">
                        <FiClock color="#FBB721" size={64}/>
                        <CountUp Class="about-icons-grid-item-title" targetNumber={"24/7"}></CountUp>
                        <span className="about-icons-grid-item-sub-title">Service Availability</span>
                    </div>
                    <div className="about-icons-grid-item">
                        <RiTeamLine color="#FBB721" size={64}/>
                        <CountUp Class="about-icons-grid-item-title" targetNumber={4}></CountUp>
                        <span className="about-icons-grid-item-sub-title">Staff in Team</span>
                    </div>
                </div>
            </div>
            <div className="our-services-container">
                <span className="our-services-title home-title">OUR <span className="bold">SERVICES</span></span>
                <span className="our-services-sub-title">YOUR ROADSIDE LIFELINE</span>
                <div className="color-seperator services"></div>
                <div className="our-services-text">
                    No matter the situation, our team is here to provide reliable and professional towing and roadside assistance when you need it most. Whether you're dealing with a dead battery, a flat tire, an engine failure, or any other unexpected vehicle issue, we are ready to respond quickly and get you back on the road as soon as possible. Our experienced technicians are equipped with the latest tools and knowledge to handle a wide range of roadside emergencies, from jump-starting your car and tire changes to fuel delivery and lockout services. We understand that being stranded can be stressful and inconvenient, which is why we prioritize fast response times, clear communication, and excellent customer service. No matter where you are or what the issue is, you can count on us to provide dependable assistance with care and professionalism.
                </div>
                <div className="color-seperator services"></div>
                <div className="our-services-grid">
                    <HomeService 
                    containerClass="towing" 
                    image={TowingImage} 
                    title="Towing" 
                    description="Need a tow? We’re available 24/7 for cars, SUVs, and light trucks. Fast response, professional service, and careful handling—so you can stay worry-free."
                    />

                    <HomeService 
                    containerClass="jump-start" 
                    image={JumpStartImage} 
                    title="Jump Start Service" 
                    description="Don’t let a dead battery leave you stranded. Our expert technicians are on call 24/7 to jump start your vehicle quickly and safely. We’ll have you back on the road in no time."
                    />
                    
                    <HomeService
                    containerClass="puncture-repair"
                    image={PunctureImage}
                    title="Puncture Repair / Spare Wheel Fitting"
                    description="A flat tire shouldn’t ruin your day. Our mobile team is ready to repair small punctures or fit your spare wheel efficiently. We ensure a smooth and safe ride with minimal downtime."
                    />

                    <HomeService
                    containerClass="fuel-delivery"
                    image={FuelImage}
                    title="Fuel Delivery & Wrong Fuel Removal"
                    description="We deliver fuel directly to you when you run out of petrol or diesel. If you've put the wrong fuel in your car, our team can safely remove it to prevent engine damage."
                    />

                    <HomeService
                    containerClass="lockout"
                    image={LockoutImage}
                    title="Key Replacement & Lockout Assistance"
                    description="Locked your keys inside your car or lost them? We offer safe, non-damaging vehicle entry for most makes and models, with emergency key cutting and programming available."
                    />

                    <HomeService
                    containerClass="battery-replacement"
                    image={BatteryReplacementImage}
                    title="Battery Replacement"
                    description="If your battery is dead, we’ll supply and install a new one on-site for a hassle-free fix. We also offer battery charging services for hybrids and electric vehicles."
                    />

                    <HomeService
                    containerClass="diagnostics"
                    image={DiagnosticsImage}
                    title="Diagnostics & Minor Repairs"
                    description="Our OBD2 fault code reading service quickly identifies issues with your vehicle, and we erase fault codes where applicable. If possible, we’ll perform minor roadside repairs to get you moving without a tow."
                    />

                    <HomeService
                    containerClass="winching"
                    image={WinchingImage}
                    title="Winching & Off-Road Recovery"
                    description="Whether your vehicle is stuck in mud, snow, or a ditch, our heavy-duty winching service will safely recover it. We also handle accident recoveries, ensuring safe and expert vehicle extraction."
                    />

                    <HomeService
                    containerClass="insurance"
                    image={InsuranceImage}
                    title="Insurance & Warranty Call Outs"
                    description="We work with insurance companies and warranty providers to handle breakdowns efficiently. Our fast response times keep your customers satisfied with reliable roadside assistance."
                    />

                    <HomeService
                    containerClass="buy-cars"
                    image={BuyCarsImage}
                    title="We Buy Scrap Cars for Cash"
                    description="We offer competitive cash payouts for non-running or damaged vehicles. Our hassle-free service includes free towing, so you don’t have to worry about a thing."
                    />
                </div>
            </div>
            <div className="whatsapp-booking-container">
                <div className="whatsapp-icon-background"></div>
                <FaSquareWhatsapp onClick={openWhatsApp} color="#25d366" size={64}/>
            </div>
            <div className="pre-footer-triangle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path className="triangle-shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
                </svg>
            </div>
            <Footer/>
        </>
    )
}