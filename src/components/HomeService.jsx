import { Link } from "react-router-dom";


const HomeService = ({image, title, description, containerClass}) => {
    
    const getLink = () => {
        switch(title) {
            case "Towing":
                return "/services/towing";
            case "Jump Start Service":
                return "/services/jump-start-service";
            case "Puncture Repair / Spare Wheel Fitting":
                return "/services/puncture-repair-and-spare-wheel-fitting";
            case "Fuel Delivery & Wrong Fuel Removal":
                return "/services/fuel-delivery-and-wrong-fuel-removal";
            case "Lockout Assistance":
                return "/services/lockout-assistance";
            case "Battery Replacement":
                return "/services/battery-replacement";
            case "Diagnostics & Minor Repairs":
                return "/services/diagnostics-and-repair";
            case "Winching & Off-Road Recovery":
                return "/services/winching";
            case "Insurance & Warranty Assistance":
                return "/services/insurance-and-warranty-assistance";
            case "We Buy Scrap Cars for Cash":
                return "/services/scrap-car-buying";
            default:
                return "/services/towing";
        }
    }
    const link = getLink();
    

    
    return (
        <div className={`home-service ${containerClass}`}>
            <Link to={link}>
                <div className="service-image-container">
                    <img src={image}/>
                </div>
            </Link>
            <Link to={link}>
                
                <p className="service-title">{title}</p>
            </Link>
            <p className="service-description">{description}</p>
        </div>
    );

}

export default HomeService