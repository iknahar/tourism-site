import React from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();

const Gallery = () => {
    return (
        <div className="overflow-hidden p-5" style={{background: "#f2f2f2"}}>
            <h3 className="text-center p-3"><b>Our Gallery</b></h3>

            <div class="row ">
                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0 ">
                    <img
                        src="https://i.ibb.co/2KR3dG8/Frame-10.jpg"
                        class="w-100 shadow-1-strong rounded mb-4 " 
                        alt=""
                        data-aos="fade-up-right"
                        data-aos-duration="1000" 
                    />

                    <img
                        src="https://i.ibb.co/HHcXMf3/Frame-11.jpg"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                        data-aos="fade-up-right"
                        data-aos-duration="1000" 
                    />
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src="https://i.ibb.co/SVzpRTV/Frame-12.jpg"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                        data-aos="fade-up"
                        data-aos-duration="1000" 
                    />

                    <img
                        src="https://i.ibb.co/VDXn3tZ/Frame-13.jpg"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                        data-aos="fade-up-down"
                        data-aos-duration="1000" 
                    />
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src="https://i.ibb.co/fpbq04F/Frame-14.jpg"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                        data-aos="fade-up-left"
                        data-aos-duration="1000" 
                    />

                    <img
                        src="https://i.ibb.co/qrBzZBd/Frame-15.jpg"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                        data-aos="fade-up-left"
                        data-aos-duration="1000" 
                    />
                </div>
            </div>

        </div>
    );
};

export default Gallery;