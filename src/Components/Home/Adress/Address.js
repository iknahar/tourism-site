import React from 'react';
import map from '../../../Assets/map.jpg';

const Address = () => {
    return (
      <div
        className="row d-flex align-items-center"
        style={{
          background: "#f0f0f0",
          marginRight: "0",
          marginBottom: "4px",
        }}
      >
        <div className="col-md-6 p-5">
          <h2 className="mb-5">Find Us</h2>
          <p>
            Street Address 1658 Doe Meadow Drive City Beltsville State MD <br />{" "}
            State Full Maryland <br /> Zipcode 20705 <br /> Telephone Number
            301-566-1620, Mobile Number 240-601-2101 <br /> Timezone UTC-5:
            Eastern Standard Time (EST) <br />
            Latitude 39.041061 - Longitude -76.889778
          </p>
        </div>
        <div className="col-md-6">
          <img
            src={map}
            style={{ width: "100%", height: "75vh" }}
            alt="About"
          />
        </div>
      </div>
    );
};

export default Address;