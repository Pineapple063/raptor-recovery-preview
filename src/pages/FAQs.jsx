import { useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Question from "../components/Question"
import '../css/FAQs.css'


const FAQs = ({ loading }) => {
    
    
    return (
        <>
        <Header />
        <div>
            <div className="services-header-s">
                FAQs
            </div>
        </div>
        <div className="faqs-container">
            <div className="faqs-grid">
                <div className="general-questions-container">
                    <div className="faq-title">General</div>
                    <Question question="What areas do you serve?" answer="We provide towing and roadside assistance services across [Your Service Area]. Contact us to confirm availability in your location." />
                    <Question question="What are your operating hours?" answer="We are available 24/7, 365 days a year. No matter the time of day or night, we are here to assist you." />
                    <Question question="How quickly can you arrive at my location?" answer="Our response times vary based on location and traffic, but we strive to reach you within [Estimated Response Time] minutes." />
                    <Question question="How do I request service?" answer="You can request service by calling us at [Phone Number], using our website contact form, or through our mobile app (if applicable)." />
                    <Question question="What forms of payment do you accept?" answer="We accept cash, credit/debit cards, and mobile payment options. For insurance-related services, we can bill your provider directly where applicable." />                </div>
                <div className="towing-questions-container">
                    <div className="faq-title">Towing</div>    
                    <Question question="What types of vehicles can you tow?" answer="We tow cars, motorcycles, vans, SUVs, light trucks, and small commercial vehicles. For larger vehicles, contact us for availability." />
                    <Question question="Do you offer long-distance towing?" answer="Yes, we provide both local and long-distance towing services. Contact us for a quote." />
                    <Question question="Can you tow my car if it is in an underground parking lot?" answer="Yes, we have specialized equipment for low-clearance towing. Please provide details about your location when you request service." />
                    <Question question="What should I do while waiting for a tow truck?" answer="Ensure you are in a safe location, turn on your hazard lights, and remain in your vehicle if it is safe to do so. If you are in a dangerous area, move to a secure location." />
                </div>
                <div className="jump-start-questions-container">
                    <div className="faq-title">Jump Start Service</div>
                    <Question question="What is a jump start?" answer="A jump start is a method of starting a vehicle with a dead battery by using power from an external source, such as another vehicle's battery." />
                    <Question question="Can you jump-start my car if it has an electronic ignition system?" answer="Yes, our technicians are trained to safely jump-start vehicles with electronic ignition systems." />
                    <Question question="What if my battery is not the problem?" answer="If the issue is not the battery, our technicians will perform a diagnostic to identify the problem and recommend the necessary repairs." />
                    <Question question="How long does a jump start take?" answer="A jump start typically takes 10-15 minutes, but the time may vary based on the condition of the battery and the vehicle." />
                </div>
                <div className="puncture-repair-questions-container">
                    <div className="faq-title">Puncture Repair & Spare Wheel Fitting</div>
                    <Question question="Can you repair a punctured tire on the spot?" answer="Yes, we provide on-the-spot puncture repair services to get you back on the road quickly." />
                    <Question question="Do you carry spare tires?" answer="We carry a limited selection of spare tires for common vehicle models. If we do not have a spare tire for your vehicle, we can tow your vehicle to a nearby repair shop." />
                    <Question question="How long does a puncture repair take?" answer="A puncture repair typically takes 15-30 minutes, depending on the severity of the puncture and the condition of the tire." />
                    <Question question="Can you repair run-flat tires?" answer="We can repair run-flat tires in some cases, but it is recommended to replace run-flat tires after a puncture for safety reasons." />

                </div>
                <div className="fuel-delivery-questions-container">
                    <div className="faq-title">Fuel Delivery & Wrong Fuel Removal</div>
                    <Question question="What is fuel delivery?" answer="Fuel delivery is a service where we bring fuel to your location if you run out of fuel on the road." />
                    <Question question="Can you deliver diesel fuel?" answer="Yes, we can deliver diesel fuel for vehicles that require it. Please specify your fuel type when requesting service." />
                    <Question question="What is wrong fuel removal?" answer="Wrong fuel removal is a service where we drain and clean the fuel system if you accidentally put the wrong fuel in your vehicle." />
                    <Question question="Can you remove the wrong fuel from my vehicle?" answer="Yes, we can remove the wrong fuel from your vehicle and clean the fuel system to prevent damage." />

                </div>
                <div className="lockout-questions-container">
                    <div className="faq-title">Lockout Assistance</div>
                    <Question question="What is lockout assistance?" answer="Lockout assistance is a service where we help you regain access to your vehicle if you are locked out." />
                    <Question question="Can you unlock my car without causing damage?" answer="Yes, our technicians are trained to unlock vehicles without causing damage to the door or locking mechanism." />
                    <Question question="What should I do if I am locked out of my car?" answer="Remain calm and contact us for lockout assistance. Do not attempt to unlock the vehicle yourself." />
                    <Question question="Can you unlock a car with keyless entry?" answer="Yes, we can unlock vehicles with keyless entry systems using specialized tools and techniques." />

                </div>
                <div className="battery-replacement-questions-container">
                    <div className="faq-title">Battery Replacement</div>
                    <Question question="Do you provide battery replacement services?" answer="Yes, we provide on-the-spot battery replacement services for vehicles with dead or faulty batteries." />
                    <Question question="What types of batteries do you carry?" answer="We carry a range of batteries to fit most vehicle makes and models. Our technicians will recommend the best battery for your vehicle." />
                    <Question question="How long does a battery replacement take?" answer="A battery replacement typically takes 15-30 minutes, depending on the vehicle and the location of the battery." />
                    <Question question="Do you dispose of old batteries?" answer="Yes, we dispose of old batteries in an environmentally friendly manner and recycle them according to local regulations." />

                </div>
                <div className="diagnostics-questions-container">
                    <div className="faq-title">Diagnostics & Repair</div>
                    <Question question="What is a diagnostic test?" answer="A diagnostic test is a procedure to identify issues with your vehicle's systems and components using specialized tools and equipment." />
                    <Question question="Do you provide diagnostic services?" answer="Yes, we provide diagnostic services to identify and troubleshoot issues with your vehicle's engine, transmission, electrical system, and more." />
                    <Question question="Can you perform repairs on the spot?" answer="We can perform minor repairs on the spot, but more extensive repairs may require towing your vehicle to a repair shop." />
                    <Question question="How long does a diagnostic test take?" answer="A diagnostic test typically takes 30-60 minutes, depending on the complexity of the issue and the vehicle's systems." />

                </div>
                <div className="winching-questions-container">
                    <div className="faq-title">Winching</div>
                    <Question question="What is winching?" answer="Winching is a method of pulling a vehicle out of a ditch, mud, snow, or other difficult terrain using a winch and cable system." />
                    <Question question="Do you provide winching services?" answer="Yes, we provide winching services to recover vehicles stuck in difficult terrain or off-road locations." />
                    <Question question="Can you winch my vehicle if it is overturned?" answer="Yes, we can winch overturned vehicles back onto their wheels and recover them from the scene." />
                    <Question question="What should I do if my vehicle needs winching?" answer="Remain calm and contact us for winching assistance. Do not attempt to recover the vehicle yourself." />
                </div>
                <div className="insurance-questions-container">
                    <div className="faq-title">Insurance & Warranty Assistance</div>
                    <Question question="Do you work with insurance companies?" answer="Yes, we work with most insurance companies to provide towing and roadside assistance services covered by your policy." />
                    <Question question="Can you bill my insurance company directly?" answer="Yes, we can bill your insurance company directly for covered services. Contact us for more information." />
                    <Question question="Do you provide warranty assistance?" answer="Yes, we provide warranty assistance for vehicles covered by manufacturer warranties or extended service contracts." />

                </div>
                <div className="scrap-car-buying-questions-container">
                    <div className="faq-title">Scrap Car Buying</div>
                    <Question question="Do you buy scrap cars?" answer="Yes, we buy scrap cars and provide cash on the spot for vehicles in any condition." />
                    <Question question="What types of vehicles do you buy?" answer="We buy cars, vans, SUVs, and trucks in any condition, including damaged, non-running, and scrap vehicles." />
                    <Question question="How does the scrap car buying process work?" answer="Contact us with details about your vehicle, and we will provide a quote. If you accept the offer, we will arrange pickup and payment on the spot." />
                    <Question question="Do you provide a certificate of destruction for scrap vehicles?" answer="Yes, we provide a certificate of destruction for scrap vehicles to ensure they are properly disposed of and recycled." />
                </div>
            </div>
        </div>
        <div className="pre-footer-triangle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                <path className="triangle-shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
            </svg>
        </div>
        <Footer />
        </>
    )
}

export default FAQs