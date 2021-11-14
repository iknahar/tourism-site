import React from "react";
import { useForm } from "react-hook-form";
// import useAuth from './../../hooks/useAuth';
import bg from '../../images/25.jpg'


const AddService = () => {
  //   const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    fetch("https://grim-crypt-33204.herokuapp.com/addProducts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => alert("Service Added"));
  };
  return (
    <div style={{
      background: `url(${bg})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      minHeight: "120vh",
      marginTop: "-150px",
    }} className="mx-auto">
      <div>
        <h3  style={{paddingTop:"170px", color: "white"}} className=" text-center ">Add A Service</h3>
        <div className="w-50 m-auto mt-5">
          <div className=" ">
            <div className="">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("name")}
                  placeholder="Name"
                  className="p-2 m-2 w-100 input-field"
                />

                <input
                  {...register("description")}
                  placeholder="Description"
                  className="p-2 m-2 w-100 input-field"
                />

                <input
                  {...register("image", { required: true })}
                  placeholder="Image Link"
                  className="p-2 m-2 w-100 input-field"
                />

                <input
                  {...register("price", { required: true })}
                  placeholder="Price"
                  type="number"
                  className="p-2 m-2 w-100 input-field"
                />

                <br />

                {errors.exampleRequired && <span>This field is required</span>}

                <input
                  type="submit"
                  value="Add"
                  className="btn btn-grad rounded-pill p-2 m-2 my-5 w-100"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;