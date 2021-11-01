import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from "../../../Assets/img1.jpg";
import img2 from "../../../Assets/img2.jpg";
import img3 from "../../../Assets/img3.jpg";

const Header = () => {
    return (
      <div
        className="w-100"
        style={{ position: "absolute", top: "0", zIndex: "-1" }}
      >
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block"
              src={img2}
              alt="First slide"
              style={{ width: "100%", objectFit: "cover", height: "90vh" }}
            />
            <Carousel.Caption>
              <h2>Travel with us</h2>
              <h5>Book for your reservation</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={img3}
              alt="First slide"
              style={{ width: "100%", objectFit: "cover", height: "90vh" }}
            />
            <Carousel.Caption>
              <h2>Premium Services</h2>
              <h5>Cheap in price, premium in quality.</h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
};

export default Header;