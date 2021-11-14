import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from './../../hooks/useAuth';
import './Details.css'


const Details = () => {
  const [product, setProduct] = useState({});
  const { user } = useAuth();
  const { productId } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.email = user?.email;
    data.displayName = user?.displayName;
    data.status = "Pending";
    data.name = product?.name;
    data.image = product?.image;
    data.price = product?.price;
    fetch("http://localhost:5000/addOrders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));

  };

  useEffect(() => {
    fetch(`http://localhost:5000/singleProduct/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  return (
    <div className="">
      <h5 className="text-white text center btn-grad p-3" style={{ marginTop: "32px" }}><b>{product?.name}</b></h5>
      <div className="row p-5 d-flex align-items-center">
        <div className="col-md-6 btn-grad col-12 imgdiv" style={{ overflow: "hidden"  }}> <img style={{ objectFit: "cover", overflow: "hidden", height: "50vh", width: "100%" }} src={product.image} alt="" /></div>
        <div className="col-md-6">
          <p className="pDescription btn-grad2 px-3 p-1 d-inline my-2"> <b> ${product?.price}</b></p>
          <br />
          <br />
          <small className="text-muted my-4">{product?.description}</small>
          
          <br />
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("address")}
              placeholder="Enter Your Address"
              className="input-field mt-2 px-3 py-2 border border-info rounded-0 w-50"
            />
            <br />
            <input
              {...register("date")}
              placeholder="Pick A date"
              type="datetime-local"
              className="input-field mt-2 px-3 py-2 border border-info rounded-0 w-50"
            />
            <br />
            <br />
            <input
              type="submit"
              value="Book Now"
              className="btn-grad2 mt-2 py-3 mx-1 rounded-pill w-50"
            />
          </form>  
        </div>
      </div>

    </div>

  );
};

export default Details;