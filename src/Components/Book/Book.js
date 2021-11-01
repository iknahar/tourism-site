import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Book = ({loggedInUser, bookingData}) => {
  const [value, onChange] = useState(new Date());
    const { register, handleSubmit } = useForm();

  const [customerData, setCustomerData] = useState(null);

    const onSubmit = data => {
      setCustomerData(data);
    }

    const handlePaymentSuccess = () => {

      const orderDetails = {
        customerInfo: customerData,
        price: bookingData.price,
        serviceDate: value,
        orderTime: new Date(),

      }

      const url = `https://cryptic-escarpment-26918.herokuapp.com/addBook`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(success => {
          toast.success("Booking Added Successfully", {
            position:"top-right",
            autoClose: 2000
        });
        })

    }

    return (
      <div>
        <div
          style={{ display: customerData ? "none" : "block" }}
          className="d-flex flex-column align-items-center"
        >
          <h3>Booking Information-</h3>
          <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Your Name (You Can Change)</label>
              <input
                type="text"
                defaultValue={loggedInUser.displayName}
                {...register("name", { required: true })}
                name="name"
                placeholder="Your Name"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Your Email (You Can Change)</label>
              <input
                type="email"
                defaultValue={loggedInUser.email}
                {...register("email", { required: true })}
                name="email"
                placeholder="Email"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Service Title (Fixed)</label>
              <input
                type="text"
                value={bookingData.title}
                {...register("title", { required: false })}
                name="title"
                className="form-control"
              />
            </div>
            <div className="form-group row">
              <label>Pick Your Free Time</label>
              <DateTimePicker onChange={onChange} value={value} />
              <h4 className="mt-4 text-right">Total: {bookingData.price}</h4>
            </div>
            <input
              onClick={handlePaymentSuccess}
              type="submit"
              id="formBtn"
              value="Checkout"
              className="btn btn-success float-right"
            />
          </form>
        </div>
        <ToastContainer />
      </div>
    );
};

export default Book;