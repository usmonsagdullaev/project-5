import React from "react";
import header_img from "../images/header-img.png"

function HeaderComp(){
    return(
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className="row pt-4 pb-4">
                        <div className="col-8  d-flex align-items-center">
                            <img src={header_img} alt="" />
                            <div className="col-9  justify-content-around   header-text d-flex">
                                <p>Home</p>
                                <p>About</p>
                                <p>Services</p>
                                <p>Pages</p>
                                <p className="ms-2">Contact</p>
                            </div>
                        </div>
                        <div className="col-4  justify-content-end d-flex align-items-center gap-3">
                            <span className="header-text">Cart(0)</span> <button className="get-btn">Get a free quote</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )  
}

export default HeaderComp;