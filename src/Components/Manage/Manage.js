import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import loadingGif from "../../Assets/loading.gif";
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const Manage = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const url = `https://cryptic-escarpment-26918.herokuapp.com/services`;
        fetch(url)
        .then(res => res.json())
        .then(data => setServices(data))
    }, [services])

    const handleDelete = id => {
        fetch(`https://cryptic-escarpment-26918.herokuapp.com/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            toast.error("Deleted Successfully!", {
              position: "top-right",
              autoClose: 2000,
            });
          });
    }

    return (
        <section className="container-fluid row">
           <div className="col-md-2" style={{background: '#343A40'}}>
                <Sidebar></Sidebar>
           </div>

            <div className="col-md-10">
                <h5 className="pt-3">Manage Services</h5>
                <div className="pt-3">
            <Table striped bordered hover variant="dark" responsive="xl">
                <thead>
                    <tr style={{textAlign:'center'}}>
                        <th style={{width:'14vw'}}>Action</th>
                        <th style={{width:'15vw'}}>Title</th>
                        <th style={{width:'10vw'}}>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services.map(service =>
                            <tr key={service._id} style={{textAlign:'center'}}>
                            <td>
                                <Button style={{ width: '7vw'}} variant="danger" onClick={()=> handleDelete(service._id)}>Delete</Button>
                            </td>
                            <td>{service.title}</td>
                            <td>{service.price}</td>
                            <td>{service.description}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
                    {
                        services.length === 0 && <img  style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}} src={loadingGif} alt="Loading"/>
                    }
        </div>
        <ToastContainer />
            </div>
        </section>
    );
};

export default Manage;