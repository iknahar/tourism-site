import React, { useEffect, useState } from 'react';
import loadingGif from "../../../Assets/loading.gif";
import ServiceCart from './ServiceCart';

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const url = `https://cryptic-escarpment-26918.herokuapp.com/services`;
        fetch(url)
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div className="container text-center mt-3" >
                <h2>Our Service</h2>
            <div className="row" style={{marginRight:'0', marginBottom:"2rem", marginTop:'2rem'}}>
                {
                    services.map(service => <ServiceCart service={service} key={service._id}/>)
                }
            </div>
            {
                services.length === 0 && <img  style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}} src={loadingGif} alt="Loading"/>
            }
        </div>
    );
};

export default Service;