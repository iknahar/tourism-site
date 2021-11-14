import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";


const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const { register, handleSubmit } = useForm();
    const [orderId, setOrderId] = useState("");
    const [reload, setReload] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/allOrders`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [[reload]]);

    const handleOrderId = (id) => {
        setOrderId(id);
    };

    const onSubmit = (data) => {
        fetch(`http://localhost:5000/statusUpdate/${orderId}`, {
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
            fetch(`http://localhost:5000/delete/${id}`, {
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
        <div className="col-md-10 mx-auto">
            <h3 className="pt-3 text-center ">Manage All Bookings</h3>
            <div className="pt-3">
                <table className='table table-bordered table-hover'>
                    <thead>
                        <tr style={{ textAlign: 'center' }}>
                            <td className="bg-info text-dark" style={{ width: '8vw' }}>Tour Details</td>
                            <td className="bg-info text-dark" style={{ width: '8vw' }}>Customer's info</td>
                            <td className="bg-info text-dark" style={{ width: '3vw' }}>Status</td>
                            <td className="bg-info text-dark" style={{ width: '3vw' }}>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(od =>
                                <tr key={od._id} style={{ textAlign: 'center' }}>
                                    <td> {od.name} <br /><span className="text-primary">Price: {od.price}</span><br /> <img style={{ width: '20vw', height: "100px", objectFit:"cover" }} src={od.image} alt="" /> </td>
                                    <td>{od.displayName} <br />{od.email} <br />{od.address} <br />Tour Date: {od.date}</td>
                                    <td>{od.status}
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
                                        <Button  onClick={() => handleDelete(od._id)}
                                            className="px-3 py-2 btn btn-danger" >Delete</Button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;