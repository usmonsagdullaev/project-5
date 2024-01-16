import React from "react";
import circle1_img from "../images/IMAGE (4).png"
import circle2_img from "../images/IMAGE (5).png"
import circle3_img from "../images/IMAGE (6).png"
import pause_img from "../images/IMAGE (7).png"
import recentle from '../images/Rectangle (1).png'
import pause from '../images/IMAGE (8).png'

function Section3Comp(){
    return(
        <>
        <hr />
            <div className="container-fluid pt-5 pb-5 ">
                <div className="container pt-5 pb-5">
                    <div className="row pt-5 pb-5">
                        <p className="s3-h1 text-center">Our cleaning services have <br /> no comparison</p>
                        <p className="s3-text text-center">Lobortis mattis odio leo eget mauris met aliquet semper molestie <br /> sollicitudin congue massa mauris lectus vitae cras viverra gravida sapien.</p>
                        <div className="col-12 mt-4 circle d-flex justify-content-beetween">
                            <div className=" col-2 text-center  d-flex  circle-card">
                                <img  src={circle1_img} alt="" />
                                <div className="col-3 ms-2">
                                    <span className="circle-p text-secondary">CLIENTS</span><p className="circle-text    ">3,480+</p>
                                </div>
                            </div>
                            <div className=" col-2 text-center d-flex circle-card"><img src={circle2_img} alt="" />
                                <div className="col-6 ms-2">
                                    <span className="circle-p text-secondary">JOBS DONE</span><p className="circle-text ">12,540+</p>
                                </div>
                            </div>
                            <div className=" col-2 text-center d-flex circle-card"><img src={circle3_img} alt="" />
                            <div className="col-3 ms-2">
                                    <span className="circle-p text-secondary">EMPOLIYEES</span><p className="circle-text ">100+</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-4 img-card d-flex justify-content-center">
                            <img className="" src={pause_img} alt="" />
                            <img className="recentle" src={recentle} alt="" />
                            {/* <img className="pause " src={pause} alt="" /> */}
                            <div className="pause d-flex align-items-center justify-content-center">
                                <i class="text-primary fa-solid fa-play icon-play"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Section3Comp;