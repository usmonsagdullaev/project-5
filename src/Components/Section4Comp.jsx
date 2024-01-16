import React from "react";
import house_img1 from "../images/IMAGE (9).png"
import house_img2 from "../images/IMAGE (10).png"
import house_img3 from "../images/IMAGE (11).png"

function Section4Comp(){
    return(
        <>
            <div className="container-fluid pb-5 pt-5">
                <div className="container pt-5 pb-5">
                    <div className="row pt-5 pb-5">
                        <div className="col-12  d-flex  justify-content-between align-items-center">
                            <p className="s4-h1">Take a look at our <br /> professional services</p>
                            <button className="s4-btn">Explore services</button>
                        </div>
                        <div className="row d-flex mt-5 justify-content-between ms-1">
                        <div className="col-4  s4-card pt-5 pb-5 p-5  border text-center d-flex align-items-center flex-column ">
                            <img src={house_img1} alt="" />
                            <p className="s4-card-h1 mt-4">House cleaning</p>
                            <p className="s4-card-p">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                        </div>
                        <div className="col-4 pt-5 pb-5 p-5 s4-card border text-center d-flex align-items-center flex-column ">
                            <img className="house-img2" src={house_img2} alt="" />
                            <p className="s4-card-h1 mt-4">Office cleaning</p>
                            <p className="s4-card-p">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                        </div>
                        <div className="col-4  pt-5 pb-5 p-5 s4-card  border text-center d-flex align-items-center flex-column ">
                            <img src={house_img3} alt="" />
                            <p className="s4-card-h1 mt-4">Industrial cleaning</p>
                            <p className="s4-card-p">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section4Comp;