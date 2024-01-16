import React from "react";
import image_left_card from "../images/IMAGE (12).png"

function Section5Comp() {
    return (
        <>
            <div className="container-fluid pt-5 pb-5 ">
                <div className="container pt-5 pb-5 " data-aos="flip-up">
                    <div className="row pt-5 pb-5 s5-backround" data-aos="flip-up">
                        <div className="col-5  p-0" data-aos="flip-up">
                            <img className="w-100" src={image_left_card} alt="" />
                        </div>
                        <div className="col-6 s5-text-box " >
                            <p className="s5-p">COVID-19 SANTIZATION</p>
                            <p className="s5-h1 text-white">We follow guidelines to keep you safe from the COVID-19 virus</p>
                            <p className="s5-text ">Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa <br /> mauris lectus.</p>
                            <div className="col-12 d-flex justify-content-between">
                                <button className="get-btn me-2">Get a free quote</button>
                                <div className="s1-phone-number bg-white d-flex align-items-center justify-content-center  border">
                                    <i class="fa-solid fa-phone text-primary fs-3"></i>
                                </div>
                                <div className="col-5 ">
                                    <span className="text-secondary lead text-white">Call us now</span> <br />
                                    <p className="number text-white">(414) 567 - 2109</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section5Comp;