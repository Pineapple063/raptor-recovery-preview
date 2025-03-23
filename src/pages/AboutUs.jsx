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
                Welcome to Raptor Recovery, your trusted partner for reliable towing and roadside assistance services. With years of experience serving our community, we understand that vehicle troubles can happen at the most inconvenient times. That's why our mission is simple: to provide fast, dependable, and professional support when you need it most.
            </div>
            <div className='about-us-title'>Our Story</div>
            <div className='about-us-text'>
            Founded on the principles of honesty, efficiency, and exceptional customer service, Raptor Recovery was built to turn stressful situations into manageable ones. What started as a small local towing service has grown into a full-scale operation, proudly serving Dublin, Wicklow and surrounding areas with a fleet of modern trucks and a dedicated team of skilled professionals.
            </div>
            <div className='about-us-title'>Why Choose Us</div>
            <div className='about-us-text'>
                <ul className='about-us-list'>
                    <li className='about-us-list-item'><span>Fast Response Time:</span> We value your time and prioritize getting to you quickly.</li>
                    <li className='about-us-list-item'><span>24/7 Availability:</span>  Day or night, rain or shine, we are just a call away.</li>
                    <li className='about-us-list-item'><span>Professional Team:</span> Our certified drivers are trained to handle everything from light-duty to heavy-duty towing.</li>
                    <li className='about-us-list-item'><span>Comprehensive Services:</span> Whether you need towing, roadside assistance, accident recovery, or vehicle transport, we've got you covered.</li>
                </ul>
            </div>
            <div className='about-us-title'>Our Commitment</div>
            <div className='about-us-text'>
                At Raptor Recovery, we treat every customer like family. Our commitment goes beyond just towing vehicles; it's about ensuring your safety and peace of mind. We strive to build lasting relationships by delivering top-notch services with transparency and care.

                If you find yourself stranded or in need of reliable towing services, don't hesitate to reach out. Let us turn a frustrating experience into a seamless one.
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