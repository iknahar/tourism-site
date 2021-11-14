import React from 'react';
import Products from '../../Products/Products';
import Footer from '../../Shared/Footer/Footer';
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
            <Footer></Footer>
        </div>
    );
};

export default Home;