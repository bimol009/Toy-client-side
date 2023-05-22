import React from 'react';
import GallerySection from '../GallarySection/GallerySection';
import UseTitle from '../HookPageTitle/UseTitle';
import ReactTabs from '../ReactTabs/ReactTabs';
import MySection from '../Section/MySection';
import StyleToySection from '../Section/StyleToySection';

import CaroBanner from './CaroBanner/CaroBanner';



const Home = () => {
  UseTitle("Home");
    return (
        <div>
  
          <CaroBanner></CaroBanner>
          <GallerySection></GallerySection>
          <ReactTabs></ReactTabs>
          <MySection></MySection>
          <StyleToySection></StyleToySection>
        </div>
    );
};

export default Home;