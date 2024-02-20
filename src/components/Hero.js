import React from 'react';
import Navbar from './Navbar';
import './Hero.css'

export const Hero = () => (
    <section className='section_container hero_container'>
    <Navbar/>
    <div className='hero_intro'>
       <div className='hero_intro_head'>RENT A FULLY</div>
       <div className='hero_intro_body'>EQUIPPED WORKPLACE</div>
       <div className='hero_intro_refresh'>+ GET REFRESHMENTS!</div>
 
       <button className='hero_intro_button'>Join Us</button>
    </div>
   </section>
);

export default Hero;