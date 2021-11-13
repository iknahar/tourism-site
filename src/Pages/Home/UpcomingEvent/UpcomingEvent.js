import React from 'react';
import event from '../../../images/event.jpg'

const UpcomingEvent = () => {
    return (
        <div className="overflow-hidden p-5">
            <h3><b>Upcoiming Big Event</b></h3>
            <div className="row">
                <div className="col-md-6 col-12">
                    <h4>Pingxi Sky Lantern Festival</h4>
                    <p>Every year, visitors flock to Pingxi to write their future wishes onto bold red lanterns (pictured above) – and then release them skywards. Anyone can purchase lanterns in Pingxi and send them into the ether throughout the day (when excellent street food opportunities also abound), but the event comes into its own when darkness falls. Grab a prime spot by the festival stage to watch the light show, performances and the release of many more glowing sky lanterns.</p>
                </div>
                <div className="col-md-6 col-12 rounded">
                    <img className="w-100"src={event} alt="" />
                </div>
          
            </div>
        </div>
    );
};

export default UpcomingEvent;<h2>Upcoiming Big Event</h2>