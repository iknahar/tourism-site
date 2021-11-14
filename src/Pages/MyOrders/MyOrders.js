import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import bg from '../../images/24.jpg'


const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://grim-crypt-33204.herokuapp.com/myOrder/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [orders, user?.email]);



    function handleDelete(id) {
        const confirmation = window.confirm("Are you sure to delete!!");
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
            <h3 className="text-center"  style={{paddingTop:"170px", color: "white"}}>Your Orders</h3>
            <div className="pt-3">
                <table className='table table-bordered table-hover' data-aos="fade-up" data-aos-duration="1000">
                    <thead>
                        <tr style={{ textAlign: 'center' }}>
                            <td className="bg-white text-dark" style={{ width: '5vw' }}>Tour</td>
                            <td className="bg-white text-dark" style={{ width: '15vw' }}>Booking Details</td>
                            <td className="bg-white text-dark" style={{ width: '4vw' }}>Status</td>
                            <td className="bg-white text-dark" style={{ width: '4vw' }}>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(od =>
                                <tr key={od._id} style={{ textAlign: 'center' }} >
                                    <td className="text-white">{od.name} <br /> <span className="text-warning">Price: {od.price}</span> <br /><img className ="btn-grad p-0 m-auto" style={{ width: '20vw', height: "100px", objectFit: "cover" }} src={od.image} alt="" /> </td>
                                    <td className="text-white">{od.displayName} <br />{od.email} <br />{od.address} <br />Tour Date: {od.date}</td>
                                    <td className="text-white">{od.status}</td>
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