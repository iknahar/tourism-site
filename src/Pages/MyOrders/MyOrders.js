import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";



const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myOrder/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [orders, user?.email]);



    function handleDelete(id) {
        const confirmation = window.confirm("Are you sure to delete!!");
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
            <h3 className="pt-3 text-center ">Your Orders</h3>
            <div className="pt-3">
                <table className='table table-bordered table-hover'>
                    <thead>
                        <tr style={{ textAlign: 'center' }}>
                            <td className="bg-info text-black" style={{ width: '15vw' }}>Tour</td>
                            <td className="bg-info text-black" style={{ width: '18vw' }}>Booking Details</td>
                            <td className="bg-info text-black" style={{ width: '8vw' }}>Status</td>
                            <td className="bg-info text-black" style={{ width: '8vw' }}>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(od =>
                                <tr key={od._id} style={{ textAlign: 'center' }} >
                                    <td>{od.name} <br /> <span className="text-primary">Price: {od.price}</span> <br /><img style={{ width: '20vw', height: "100px", objectFit:"cover" }} src={od.image} alt="" /> </td>
                                    <td>{od.displayName} <br />{od.email} <br />{od.address} <br />Tour Date: {od.date}</td>
                                    <td>{od.status}</td>
                                    <td>
                                        <Button variant="danger" onClick={() => handleDelete(od._id)}
                                            className="btn btn-danger px-3 py-2" >Delete</Button>
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

export default MyOrders;