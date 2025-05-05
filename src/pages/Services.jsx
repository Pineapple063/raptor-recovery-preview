import Footer from "../components/Footer";
import Header from "../components/Header";
import '../css/Services.css'
import PlaceholderImg from "../assets/placeholder.png"
import ServiceSlide from "../components/ServiceSlide";
import Service from "../components/Service";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Services = ({ loading }) => {
    const { serviceType } = useParams();
    const [currentService, setCurrentService] = useState(serviceType);
    const [fade, setFade] = useState(false);
    const [displayService, setDisplayService] = useState(serviceType);

    const towingTitles = ["Reliable & Fast Towing", "24/7 Availability", "Safe & Secure Transport", "Affordable & Transparent Pricing", "Specialized Towing Solutions"];
    const towingTexts = [
        "Whether your car breaks down, you're in an accident, or you just need a tow, we’ve got you covered. Our team handles everything from light-duty to medium-duty towing, making sure your vehicle gets where it needs to go safely.", 
        "Car troubles don’t follow a schedule, and neither do we. No matter what time it is, day or night, you can count on us to be there when you need a tow.", 
        "We treat every vehicle like it’s our own. Our tow trucks and equipment are designed to transport your car without any damage.", 
        "Nobody likes surprises when it comes to pricing. We keep things simple and upfront, offering fair rates with no hidden fees. Whether you need a quick local tow or something long-distance, we’ll give you a clear price before we start.", 
        "Need accident recovery? Off-road recovery? Classic car transport? We do more than just standard tows. Whatever the situation, we have the right equipment and experience to get the job done right."
    ];
    const jumpStartTitles = ["Fast & Reliable Jump Starts", "Dead Battery? No Problem", "Anytime, Anywhere", "Safe for Your Vehicle"];
    const jumpStartTexts = [
        "A dead battery can happen anytime, but we are always ready to help. Our quick response team will get your vehicle started so you can be on your way.",
        "If your battery refuses to start, do not worry. We have the right equipment to jump-start your car safely and effectively.",
        "Stranded in your driveway, a parking lot, or on the road? No matter where you are, we will come to you and get your car running again.",
        "Our jump start service is safe for all vehicle types, ensuring no damage to your electrical system while bringing your car back to life."
    ];

    const tireServiceTitles = ["Punctured Tire? We Can Help", "Quick Puncture Repairs", "Get Back on the Road Fast"];
    const tireServiceTexts = [
        "A flat tire does not have to ruin your plans. Whether you need a puncture repair or a spare wheel fitted, we have got you covered.",
        "If you have a small puncture, we will fix it on the spot, getting you back on the road without needing a full tire replacement.",
        "Fast and efficient assistance means you will not be stuck for long. We work quickly to get you back on your way."
    ];

    const fuelDeliveryTitles = ["Out of Fuel?", "Did You Use The Wrong Fuel? We Can Fix It", "Quick & Easy Fuel Delivery", "Avoid Engine Damage"];
    const fuelDeliveryTexts = [
        "Running out of fuel is frustrating, but we make it easy. We will bring you the fuel you need, so you do not have to walk to the nearest station.",
        "We will safely remove it and prevent costly engine damage.",
        "No need to stress if your tank runs empty. Our team will arrive fast with enough fuel to get you back on the road.",
        "Using the wrong fuel can cause major issues. Our professionals will drain it safely and refill your tank the right way."
    ];

    const lockoutTitles = ["Locked Out? We Can Help", "Fast & Damage-Free Entry", "Most Vehicle Types", "24/7 Assistance"];
    const lockoutTexts = [
        "Locked keys in your car? It happens, and we are here to help with fast and reliable lockout assistance.",
        "We use specialized tools to unlock your car without causing any damage, so you can get back in without worry.",
        "We can provide a new key for most makes and models. We offer one year warranty on key replacements.",
        "Lockouts do not happen at convenient times. That is why we are available around the clock to assist you."
    ];

    const batteryReplacementTitles = ["Battery Dead? We Have Replacements", "Quick & Professional Installation", "No Need for a Tow", "Reliable & Long-Lasting Batteries"];
    const batteryReplacementTexts = [
        "If your battery is completely dead, a jump start may not be enough. We provide on-the-spot battery replacements to get you moving again.",
        "We will bring a new battery and install it properly, ensuring everything is secure and working correctly.",
        "Why tow your car when a simple battery replacement can fix the problem? We bring the solution to you.",
        "We supply new, high-quality, reliable batteries so you can count on your vehicle to start every time."
    ];

    const diagnosticsTitles = ["Vehicle Not Starting?", "Check Engine Light On?", "Minor Repairs on the Spot", "Avoid Costly Breakdowns"];
    const diagnosticsTexts = [
        "If your car is not starting, we can check common issues and get to the root of the problem.",
        "A warning light on your dashboard can be worrying. We run basic diagnostics to help identify the issue quickly.",
        "Some problems do not require a tow. If possible, we will make minor repairs right there to get you back on the road.",
        "Catching small issues early can prevent bigger, expensive problems down the line. We help you stay ahead of major repairs."
    ];

    const winchingTitles = ["Stuck in Mud or Snow?", "Off-Road Recovery", "Safe Winching", "Heavy-Duty Equipment"];
    const winchingTexts = [
        "If your vehicle is stuck in mud, snow, sand, or a ditch, we have the tools to pull you out safely.",
        "From trails to tough terrain, we have you covered.",
        "Our winching process ensures your vehicle is pulled out carefully.",
        "With professional-grade equipment, we can handle anything from small cars to medium-size vehicles in tough recovery situations."
    ];

    const insuranceTitles = ["Insurance & Warranty Assistance", "Hassle-Free Service Calls"];
    const insuranceTexts = [
        "If your insurance or warranty covers roadside assistance, we can handle the call for you.",
        "We work with major insurance companies and warranty providers to ensure fast and reliable service."
    ];

    const scrapCarTitles = ["Turn Your Scrap Car Into Cash", "We Buy Any Condition", "Fast & Hassle-Free", "Instant Offers"];
    const scrapCarTexts = [
        "If you have a vehicle that is no longer running or not worth repairing, we will buy it from you for cash.",
        "Whether your car is damaged, non-functional, or just old, we will take it off your hands.",
        "Selling a scrap car should be easy. We make the process quick and straightforward with no hidden fees.",
        "Get an instant offer and fast payment for your unwanted vehicle. No waiting, no hassle."
    ];

    useEffect(() => {
        if (serviceType !== currentService) {
          setFade(true);
          setTimeout(() => {
            setCurrentService(serviceType);
            setFade(false);
            setDisplayService(serviceType);
          }, 300); // Duration of the fade-out effect
        }
      }, [serviceType, currentService]);

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 20);
    }, []);

    

    const renderService = () => {
        switch (displayService) {
            case "towing":
                return <Service service="Towing" titles={towingTitles} texts={towingTexts} image={PlaceholderImg} />;
            case "jump-start-service":
                return <Service service="Jump Start Service" titles={jumpStartTitles} texts={jumpStartTexts} image={PlaceholderImg} />;
            case "puncture-repair-and-spare-wheel-fitting":
                return <Service service="Puncture Repair & Spare Wheel Fitting" titles={tireServiceTitles} texts={tireServiceTexts} image={PlaceholderImg} />;
            case "fuel-delivery-and-wrong-fuel-removal":
                return <Service service="Fuel Delivery & Wrong Fuel Removal" titles={fuelDeliveryTitles} texts={fuelDeliveryTexts} image={PlaceholderImg} />;
            case "lockout-assistance":
                return <Service service="Key Replacement & Lockout Assistance" titles={lockoutTitles} texts={lockoutTexts} image={PlaceholderImg} />;
            case "battery-replacement":
                return <Service service="Battery Replacement" titles={batteryReplacementTitles} texts={batteryReplacementTexts} image={PlaceholderImg} />;
            case "diagnostics-and-repair":
                return <Service service="Diagnostics & Repair" titles={diagnosticsTitles} texts={diagnosticsTexts} image={PlaceholderImg} />;
            case "winching":
                return <Service service="Winching" titles={winchingTitles} texts={winchingTexts} image={PlaceholderImg} />;
            case "insurance-and-warranty-assistance":
                return <Service service="Insurance & Warranty Assistance" titles={insuranceTitles} texts={insuranceTexts} image={PlaceholderImg} />;
            case "scrap-car-buying":
                return <Service service="Scrap Car Buying" titles={scrapCarTitles} texts={scrapCarTexts} image={PlaceholderImg} />;
            default:
                return <Service service="Towing" titles={towingTitles} texts={towingTexts} image={PlaceholderImg} />;
        }
    };

    return (
        <>
            
            <Header />
            
            <div className="services-container-s">
                <div className="services-header-s">
                    SERVICES
                </div>
                <div className={`services-content-s ${fade ? 'fade-out' : 'fade-in'}`}>
                    {renderService()}
                </div>
            </div>
            <div className="pre-footer-triangle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path className="triangle-shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
                </svg>
            </div>
            <Footer />
        </>
    );
};

export default Services