import React from 'react';
import './Services.css'
import serviceOne from '../Assets/homepage/mt-1979-home-img03.jpg';
import serviceTwo from '../Assets/homepage/mt-1979-home-img02.png'

const Services = () => {
    return (
        <section className='service_image_wrapper'>
            <div className='service_image_one_wrapper'>
                <img src={serviceOne} alt='service_image_one' className='service_image_one' />
            </div>
            <div className='service_image_two_wrapper'>
                <img src={serviceTwo} alt='service_image_two' className='service_image_two' />
            </div>
            <div className='services_header_wrapper'>
                <h1>What The Office offers you</h1>
                <h2>OUR SERVICES</h2>
            </div>
        </section>
    );
}

export default Services;