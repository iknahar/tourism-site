import React from 'react';
import Products from '../../Products/Products';
import Hero from '../Hero/Hero';
import UpcomingEvent from '../UpcomingEvent/UpcomingEvent';
import Gallery from './../Gallery/Gallery';


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Products></Products>
            <UpcomingEvent></UpcomingEvent>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;