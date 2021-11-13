import React from 'react';
import './Hero.css'


const Hero = () => {
    return (
        <div className='banner' data-aos="zoom-out" data-aos-easing="ease-in-back">    
            <h2 className='p-5 mt-5' data-aos="fade-up" data-aos-duration="3000">So many places, so little time…</h2>
            <p data-aos="fade-right" data-aos-duration="3000" className="ps-5 text-white">Invest in unforgettable travel experiences ──✈─ A vacation is full of opportunities to see new sights, meet new people, and experience different cultures</p>
            <button className="ms-5 mt-5 rounded-pill px-5 btn-grad">Explore More</button>
        </div>
    );
};

export default Hero;