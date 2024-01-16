import React from "react";
import up_img from "../images/IMAGE (13).png"
import down_img from "../images/IMAGE (14).png"

function Section6Comp(){
    return(
        <>
            <div className="container-fluid mt-5 pb-5">
                <div className="container  pb-5 s6-fluid d-flex justify-content-between flex-column ">
                    <div className="row  d-flex justify-content-between ">
                        <div className="col-6 s6-up-left-card-img  " >
                            <img className="" src={up_img} alt="" />
                        </div>
                        <div className="col-5  mt-5 mb-5">
                            <p className="s6-up-right-card-h1 ">We cover all areas of your home or office</p>
                            <p className="s6-up-right-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            <div className="row checks d-flex justify-content-between flex-column mt-4">
                                <div className="row">
                                    <div className="col-5 d-flex align-items-center "><i class="fa-solid fa-circle-check fs-4 text-primary"></i><span className="check-text">Bathrooms</span></div>
                                    <div className="col-5 d-flex align-items-center"><i class="fa-solid fa-circle-check fs-4 text-primary"></i><span className="check-text">Bedrooms</span></div>
                                </div>
                                <div className="row">
                                <div className="col-5 d-flex align-items-center "><i class="fa-solid fa-circle-check fs-4 text-primary"></i><span className="check-text">Kitchens</span></div>
                                    <div className="col-5 d-flex align-items-center"><i class="fa-solid fa-circle-check fs-4 text-primary"></i><span className="check-text">Offices</span></div>
                                </div>
                                <div className="row">
                                <div className="col-5 d-flex align-items-center "><i class="fa-solid fa-circle-check fs-4 text-primary"></i><span className="check-text">Living Rooms</span></div>
                                    <div className="col-5 d-flex align-items-center"><i class="fa-solid fa-circle-check fs-4 text-primary"></i><span className="check-text">Businesses</span></div>
                                </div>
                                <div className="row">
                                <div className="col-5 d-flex align-items-center "><i class="fa-solid fa-circle-check fs-4 text-primary"></i><span className="check-text">Carpets</span></div>
                                    <div className="col-5 d-flex align-items-center"><i class="fa-solid fa-circle-check fs-4 text-primary"></i><span className="check-text">Windows</span></div>
                                </div>
                            </div>
                            <button className="get-btn mt-5">Get a free quote</button>
                        </div>
                    </div>
                    <div className="row pt-5 pb-5 d-flex justify-content-between">
                        <div className="col-5   mt-5 mb-5">
                            <p className="s6-down-right-card-h1 ">What makes us <br /> different?</p>
                            <p className="s6-down-right-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br /> do eiusmod tempor incididunt ut labore et dolore magna <br /> aliqua. Ut enim ad minim veniam.</p>
                            <p className="s6-down-right-card-p">Sed ut perspiciatis unde omnis iste natus error sit atem accusantium doloremque <br /> laudantiu sed ut.</p>
                            <div className="row">
                                <div className="col-4  m-0    s6-down-left-card"><p>10 <span className="text-primary">+</span> </p>  Years</div>
                                <div className="col-4  m-0  s6-down-left-card"><p>5k <span className="text-primary">+</span> </p>  Clients</div>
                                <div className="col-4  m-0  s6-down-left-card"><p>20k <span className="text-primary">+</span> </p> Jobs done</div>
                            </div>
                            <button className="get-btn mt-5">Get a free quote</button>
                        </div>
                        <div className="col-6      s6-up-left-card-img d-flex align-self-">
                            <img className="w-100" src={down_img} alt="" />
                        </div>
                    </div> 
                </div>
            </div>
            <hr />
        </>
    )
}

export default Section6Comp;