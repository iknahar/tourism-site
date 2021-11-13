import React from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();

const Gallery = () => {
    return (
        <div className="overflow-hidden" data-aos="zoom-in-up" data-aos-duration="2000" style={{background: "#f2f2f2"}}>
            <h3 className="text-center text-primary p-3"><b>Our Gallery</b></h3>

            <div class="row">
                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <img
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
                        class="w-100 shadow-1-strong rounded mb-4 " 
                        alt=""
                    />

                    <img
                        src="https://mdbootstrap.com/img/Photos/Vertical/mountain1.jpg"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                    />
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src="https://mdbootstrap.com/img/Photos/Vertical/mountain2.jpg"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                    />

                    <img
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                    />
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                    />

                    <img
                        src="https://mdbootstrap.com/img/Photos/Vertical/mountain3.jpg"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                    />
                </div>
            </div>

        </div>
    );
};

export default Gallery;