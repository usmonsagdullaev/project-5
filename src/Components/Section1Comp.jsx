import React from "react";
import s1_img from '../images/IMAGE.png'


function Section1Comp(){
    return(
        <>
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-6 s1-text-box ">
                        <p className="s1-h1">Quality cleaning <br /> for your home</p>
                        <p className="s1-text">Condimentum mauris sit cursus amet id non neque pharetra <br /> nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>                        
                        <div className="col-12 d-flex justify-content-between">
                            <button className="get-btn me-2">Get a free quote</button>
                            <div className="s1-phone-number d-flex align-items-center justify-content-center  border">
                                <i class="fa-solid fa-phone text-primary fs-3"></i>
                            </div>
                            <div className="col-6">
                                <span className="text-secondary">Call us now</span> <br />
                                <p className="number">(414) 567 - 2109</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 justify-content-end d-flex p-0">
                        <img className="" src={s1_img} alt="" />
                    </div>
                </div>
            </div>
        </> 
    )
}

export default Section1Comp;