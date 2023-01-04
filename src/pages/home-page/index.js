import React from 'react';
import HeroSection from '../../components/main/hero-section';
import OurServices from '../../components/main/our-services';
import WhyUs from '../../components/main/why-us';

import CtaBanner from '../../components/main/cta-banner';
import Faq from '../../components/main/faq';

const HomePage = () => {
  return (
    <div className='home-page'>
      <HeroSection />
      <OurServices />
      <WhyUs />
      
      <CtaBanner />
      <Faq />
    </div>
  );
};

export default HomePage;