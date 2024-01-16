import React from "react";
import s7_left_card_img from "../images/IMAGE (15).png"
import s7_right_card_img from "../images/IMAGE (16).png"

function Section7Comp() {
    return (
        <>
            <div className="container-fluid pt-5 pb-5">
                <div className="container pt-5 pb-5">
                    <div className="row pb-5 pt-5 mb-5">
                        <div className="col-6">
                            <p className="s7-h1">Articles & resources</p>
                            <p className="s7-p">Lobortis mattis odio leo eget mauris met aliquet <br /> semper molestie sollicitudin congue massa <br /> mauris lectus.</p>
                        </div>
                        <div className="col-6 d-flex justify-content-end align-items-center">
                            <button className="get-btn ">Get a free quote</button>
                            <button className="s7-second-btn ms-3">Browse articles</button>
                        </div>
                        <div className="row  p-0 m-0">
                            <div className="col-6  s7 position-relative  ">
                                <div className="col-12 ">
                                    <img className="w-100" src={s7_left_card_img} alt="" />
                                </div>
                                <div className="col-10 s7-card position-absolute  border mx-auto p-5">
                                    <p className="left-card-h1">8 best vacuum cleaners to clean any mess for your home in 2022</p>
                                    <p className="left-card-text">Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
                                    <div className="col-12 d-flex  justify-content-between align-items-center ">
                                        <p className="s7-left-card-p m-0">Jan 28, 2022</p>
                                        <div className="cub "></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6  s7 position-relative  ">
                                <div className="col-12 ">
                                    <img className="w-100 " src={s7_right_card_img} alt="" />
                                </div>
                                <div className="col-10 s7-card position-absolute  border mx-auto p-5">
                                    <p className="left-card-h1">How to properly disinfect your phone <br /> and other electronics</p>
                                    <p className="left-card-text">Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
                                    <div className="col-12 d-flex  justify-content-between align-items-center ">
                                        <p className="s7-left-card-p m-0">Feb 1, 2022</p>
                                        <div className="cub "></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section7Comp;