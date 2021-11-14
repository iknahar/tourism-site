import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import bg from '../../images/24.jpg'

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const { register, handleSubmit } = useForm();
    const [orderId, setOrderId] = useState("");
    const [reload, setReload] = useState(true);

    
    useEffect(() => {
        fetch(`https://grim-crypt-33204.herokuapp.com/allOrders`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [[reload]]);

    const handleOrderId = (id) => {
        setOrderId(id);
    };

    const onSubmit = (data) => {
        fetch(`https://grim-crypt-33204.herokuapp.com/statusUpdate/${orderId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (data.modifiedCount === 1) {
                    setReload(!reload);
                } else {
                    alert("Booking Confirmed!");
                }
            });

    };

    function handleDelete(id) {
        const confirmation = window.confirm("Are you sure that you want to delete?");
        if (confirmation) {
            fetch(`https://grim-crypt-33204.herokuapp.com/delete/${id}`, {
                method: "delete",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount === 1) {
                        const remainingOrders = orders.filter((order) => order._id !== id);
                        setOrders(remainingOrders);
                    } else {
                        alert("Something went wrong!!");
                    }
                });
        }
    }

    return (
        <div style={{
            background: `url(${bg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            minHeight: "120vh",
            marginTop: "-150px",
          }} className="mx-auto">
            <div  className=''>
            <h3 className=" text-center " style={{paddingTop:"170px", color: "white"}}>Manage All Bookings</h3>
            <div className="pt-3">
                <table className='table table-bordered table-hover' data-aos="fade-up" data-aos-duration="1000" >
                    <thead>
                        <tr style={{ textAlign: 'center' }}>
                            <td className="bg-white text-dark" style={{ width: '5vw' }}>Tour Details</td>
                            <td className="bg-white text-dark" style={{ width: '15vw' }}>Customer's info</td>
                            <td className="bg-white text-dark" style={{ width: '3vw' }}>Status</td>
                            <td className="bg-white text-dark" style={{ width: '3vw' }}>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(od =>
                                <tr key={od._id} style={{ textAlign: 'center' }}>
                                    <td className="text-white"> {od.name} <br /><span className="text-warning">Price: {od.price}</span><br /> <img className ="btn-grad p-0 m-auto" style={{ width: '20vw', height: "100px", objectFit: "cover" }} src={od.image} alt="" /> </td>
                                    <td  className="text-white">{od.displayName} <br />{od.email} <br />{od.address} <br />Tour Date: {od.date}</td>
                                    <td className="text-white">{od.status}
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <input
                                                onClick={() => handleOrderId(od?._id)}
                                                {...register("status")}
                                                type="submit"
                                                value="Confirmed"
                                                className="mt-2 btn btn-outline-primary ms-1 btn-sm" />
                                        </form>

                                    </td>
                                    <td>
                                        <Button onClick={() => handleDelete(od._id)}
                                            className="px-3 py-2 btn btn-danger" >Delete</Button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );
};

export default ManageAllOrders;