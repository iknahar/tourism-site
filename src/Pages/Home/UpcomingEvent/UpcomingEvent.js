import React from 'react';
import event from '../../../images/event.png'
import eventbg from '../../../images/eventbg.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { Button } from 'react-bootstrap';
AOS.init();
const UpcomingEvent = () => {
    return (
        <div className="overflow-hidden p-5" style={{
            background: `url(${eventbg})`, backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover"
        }}>
            <h3 className="text-center p-3 text-white"><b>Upcoiming Big Event</b></h3>
            <div className="row">
                <div className="col-md-6 col-12 " data-aos="fade-up-right"
                    data-aos-duration="1000" >
                    <h3 className="text-white">Day Long Tour to Sylhet</h3>
                    <h6 className="text-white">Each and every expanse of Bangladesh abounds in greenery, but none can compare with Sylhet. From spinning hills covered in lush green tea gardens and gleaming paddy fields to olive marshlands and reserved forests, Sylhet seems to have been blessed with every possible shade of green one can imagine.

                        Visit Sylhet is a platform to inspire people to explore greater Sylhet. Our purpose is to deliver growth for Sylhet by attracting visitors and building Sylhet’s reputation as a true destination.  <br />  <br /> Each and every expanse of Bangladesh abounds in greenery, but none can compare with Sylhet. From spinning hills covered in lush green tea gardens and gleaming paddy fields to olive marshlands and reserved forests, Sylhet seems to have been blessed with every possible shade of green one can imagine.

Visit Sylhet is a platform to inspire people to explore greater Sylhet. Our purpose is to deliver growth for Sylhet by attracting visitors and building Sylhet’s reputation as a true destination.</h6>
                <Button className='mt-3 btn-grad px-5 pt-2 rounded-pill'>Join Us</Button>
                </div>
                <div className="col-md-6 col-12 rounded">
                    <img data-aos="fade-up-left"
                        data-aos-duration="1000" className="w-100" src={event} alt="" />
                </div>

            </div>
        </div>
    );
};

export default UpcomingEvent; <h2>Upcoiming Big Event</h2>