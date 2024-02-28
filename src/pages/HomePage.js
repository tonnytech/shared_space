import React from 'react';
import Hero from '../components/Hero';
import AboutComponent from '../components/About';
import StatsComponent from '../components/StatsComponent';
import Services from '../components/Services';
import ServiceList from '../components/ServiceList';

const HomePage = () => (
  <>
    <Hero />
    <AboutComponent />
    <StatsComponent />
    <Services />
    <ServiceList />
  </>
);

export default HomePage;
