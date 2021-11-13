import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import loadingGif from '../../images/loader.gif'


const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/allProducts")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div>
            <h3 className="text-center p-3"><b> Main Offerings</b></h3>
            {
                products.length === 0 && <img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} src={loadingGif} alt="Loading" />
            }
            <div className="row container-fluid mx-auto">
                {products?.map((pd) => (

                    <div className="col-md-6 col-lg-4 ">
                        <div data-aos="zoom-in-up" data-aos-duration="2000" className="mx-3 my-5 shadow-lg pcard" style={{
                            width: '400px', height: '200px', background: `url(${pd?.image})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center",
                            backgroundSize: "cover", borderRadius: "15px"
                        }}>
                            <h5 className="text-white ptitle d-inline px-3 pb-1 text-truncate">{pd.name}</h5>
                            <br />
                            <p className="text-center px-2 mt-2 pDescription text-truncate" style={{ height: '36px', overflow: "hidden" }}>{pd.description}</p>
                            <p className="pDescription bg-warning px-3 p-1 d-inline mt-2 ms-auto">${pd.price}</p>
                            <Link className="text-decoration-none" to={`/products/${pd._id}`}>
                                {" "}
                                <Button className="btn-grad2 py-2 px-4 mx-auto mb-auto rounded-pill bookbutton">Book Now</Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;