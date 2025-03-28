import Header from '../components/Header'
import Footer from '../components/Footer'

const AboutUs = () => {
    return (
        <>
        <Header />
        <div>
            <div className="services-header-s">
                About Us
            </div>
        </div>
        <div className="about-us-container">
            <div className='about-us-title'>Who We Are</div>
            <div className='about-us-text'>
            Welcome to Raptor Recovery, your trusted partner for fast and reliable towing, roadside assistance, and vehicle transport. We know vehicle troubles can happen at the worst times, that’s why we’re committed to getting you back on the road quickly and safely, 365 days a year, including all major holidays.
            </div>
            <div className='about-us-title'>Our Story</div>
            <div className='about-us-text'>
            Founded on the principles of honesty, efficiency, and exceptional customer service, Raptor Recovery was built to turn stressful situations into manageable ones. What started as a small local towing service has grown into a full-scale operation, proudly serving Dublin, Wicklow and surrounding areas with a fleet of modern trucks and a dedicated team of skilled professionals.
            </div>
            <div className='about-us-title'>Why Choose Us</div>
            <div className='about-us-text'>
                <ul className='about-us-list'>
                    <li className='about-us-list-item'><span>Rapid Response:</span> We prioritize getting to you as fast as possible.</li>
                    <li className='about-us-list-item'><span>24/7 Availability:</span>  Day or night, rain or shine, including holidays.</li>
                    <li className='about-us-list-item'><span>Expert Team:</span> Our trained professionals handle light to medium duty towing with care.</li>
                    <li className='about-us-list-item'><span>Comprehensive Services:</span> From towing and roadside assistance to goods transport, we’ve got you covered.</li>
                </ul>
            </div>
            <div className='about-us-title'>Our Commitment</div>
            <div className='about-us-text'>
                At Raptor Recovery, we treat every customer like family. We go beyond towing. We ensure your safety and peace of mind. Our goal is to make a frustrating situation seamless with transparent, top tier service.
                <br/><br/>
                Stranded? Need a tow? <a href="tel:+353 87 120 0000"><span style={{fontWeight: "bold", cursor: "pointer"}}>Call us</span></a> now, and let’s get you moving again.
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

export default AboutUs