import React from 'react';
import about from "../../Assets/about.jpg";

const About = () => {
    return (
      <div
        className="row d-flex align-items-center"
        style={{
          background: "#F2EEE9",
          marginRight: "0",
          marginBottom: "1vh",
          marginTop: "1vh",
        }}
      >
        <div className="col-md-6 p-5">
          <h2 className="mb-5">About Us</h2>
          <p>
            As the leading international organization in the field of tourism,
            UNWTO promotes tourism as a driver of economic growth, inclusive
            development and environmental sustainability and offers leadership
            and support to the sector in advancing knowledge and tourism
            policies worldwide
          </p>
        </div>

        <div className="col-md-6">
          <img
            src={about}
            style={{ width: "100%", height: "75vh" }}
            alt="About"
          />
        </div>
      </div>
    );
};

export default About;