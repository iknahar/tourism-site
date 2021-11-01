import React from 'react';
import Header from './Header/Header';
import HomeAbout from './HomeAbout/HomeAbout';
import Address from './Adress/Address';
import Service from './Service/Service';

const Home = () => {
    return (
      <div>
        <Header></Header>
        <div style={{ marginTop: "95vh", marginBottom: "8vh" }}>
          <Service></Service>
        </div>
        <HomeAbout></HomeAbout>
        <Address></Address>

      </div>
    );
};

export default Home;