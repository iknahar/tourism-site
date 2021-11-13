import React from 'react';
import Products from '../../Products/Products';
import Hero from '../Hero/Hero';
import Gallery from './../Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Products></Products>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;