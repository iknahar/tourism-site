import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddService = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {

    const serviceData = {
            title: data.title,
            price: data.price,
            description: data.description,

    };
        const url = `https://cryptic-escarpment-26918.herokuapp.com/create`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
        .then(res => toast.success("Service Added Successfully", {
            position:"top-right",
            autoClose: 2000
        })
        );

    }

    return (
      <section className="container-fluid row">
        <div className="col-md-2" style={{ background: "#343A40" }}>
          <Sidebar></Sidebar>
        </div>

        <div className="col-md-10">
          <h5 className="pt-3">Add a New Service</h5>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mt-3">
              <label>Title: </label>
              <input
                className="form-control"
                type="text"
                name="title"
                placeholder="Service Title"
                {...register("title", { required: true })}
              />
            </div>
            <div className="form-group mt-3">
              <label>Price: </label>
              <input
                defaultValue="$"
                className="form-control"
                name="price"
                placeholder="Service Price"
                {...register("price", { required: true })}
              />
            </div>
            <div className="form-group  mt-3">
              <label>Description: </label>
              <textarea
                className="form-control"
                name="description"
                placeholder="Service Description"
                {...register("description", { required: true })}
              />
            </div>

            <input
              style={{ background: "#343A40" }}
              className="btn btn-primary mt-3"
              type="submit"
            />
          </form>
          <ToastContainer />
        </div>
      </section>
    );
};

export default AddService;