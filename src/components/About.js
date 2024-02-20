import React from 'react';
import aboutImage from '../Assets/homepage/mt-1979-home-img01.jpg';
import './About.css'

const AboutComponent = () => (
  <section className=''>
    <div className='about_contents'>
        <div className='about_image_container'>
        <img src={aboutImage} alt="aboutImage" className='about_image_element' />
        </div>
        <div className='about_content_cover'>
            <div className='about_heading_container'>
                <h2>about the</h2>
                <h1>COWORKING</h1>
            </div>

            <div className='about_content_container'>
                <h3>"Everyone needs a workplace"</h3>
                <p className='about_paragraph_one'>
                    With more young entrepreneurs now than
                     ever before in the history of our country,
                      we figured they all need a nice workplace!
                </p>

                <p className='about_paragraph_two'>
                    This is what our coworkings are all about!
                </p>

            </div>

        </div>
    </div>
  </section>
);

export default AboutComponent;