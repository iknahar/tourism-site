import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {

    const handleSubscribe = () => {
        toast.success("Thanks For Your Interest", {
            position:"top-right",
            autoClose: 2000
        });
    }

    return (
      <div style={{ background: "#f0f0f0" }}>
        <div
          className="container text-center"
          style={{ paddingBottom: "5vh", paddingTop: "5rem" }}
        >
          <h4>Explore the world with us</h4>
          <h6>Subscribe for our news letter</h6>
          <div className="mt-3">
            <input
              style={{
                padding: "1%",
                width: "45vw",
                background: "white",
                border: "1px sopd black",
              }}
              type="email"
              placeholder="Enter your email"
              required
            />
            <input
              style={{
                padding: "1%",
                background: "white",
                border: "1px sopd black",
              }}
              onClick={handleSubscribe}
              type="submit"
              value="Subscribe"
            />
          </div>

          <h2>Travella</h2>
          <small>© 2021 Travella</small>
        </div>
        <ToastContainer />
      </div>
    );
};

export default Footer;