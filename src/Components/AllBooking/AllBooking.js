import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import loadingGif from "../../Assets/loading.gif";
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AllBooking = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const url = `https://cryptic-escarpment-26918.herokuapp.com/allBooking`;
        fetch(url)
        .then(res => res.json())
        .then(data => setBookings(data))

    }, [bookings])

    const handleDelete = id => {
      fetch(
        `https://cryptic-escarpment-26918.herokuapp.com/delete/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((id) => {
          alert("Deleted Successfully!", {
            position: "top-right",
            autoClose: 2000,
          });
        });
    }
    return (
      <section className="container-fluid row">
        <div className="col-md-2" style={{ background: "#343A40" }}>
          <Sidebar></Sidebar>
        </div>

        <div className="col-md-10">
          <h5 className="pt-3">All Order</h5>
          <div className="pt-3">
            <Table striped bordered hover variant="dark" responsive="xl">
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th style={{ width: "15vw" }}>Title</th>
                  <th style={{ width: "10vw" }}>Price</th>
                  <th>Customer Name</th>
                  <th style={{ width: "14vw" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((service) => (
                  <tr key={service._id} style={{ textAlign: "center" }}>
                    <td>{service.title}</td>
                    <td>{service.price}</td>
                    <td>{service.name}</td>
                    <td>
                      <Button
                        style={{ width: "7vw" }}
                        variant="danger"
                        onClick={() => handleDelete(service._id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            {bookings.length === 0 && (
              <img
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                src={loadingGif}
                alt="Loading"
              />
            )}
          </div>
          <ToastContainer />
        </div>
      </section>
    );
};

export default AllBooking;