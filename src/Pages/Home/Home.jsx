import React from 'react';
import ReactTabs from '../ReactTabs/ReactTabs';

import CaroBanner from './CaroBanner/CaroBanner';



const Home = () => {
    return (
        <div>
          <h2>home</h2>
          <CaroBanner></CaroBanner>
          <ReactTabs></ReactTabs>
        </div>
    );
};

export default Home;