import React from "react";
import card_img1 from "../images/IMAGE (1).png"
import card_img2 from "../images/IMAGE (2).png"
import card_img3 from "../images/IMAGE (3).png"

function Section2Comp(){
    return(
        <>
            <div className="container-fluid pb-5 mt-5">
                <div className="container pb-5 pt-5">
                    <div className="row pb-5  pt-5">
                        <div className="col-12">
                            <p className="s2-h1 text-center">How our service works?</p>
                            <p className="s2-text text-center">Sagittis nibh scelerisque vitae eget vulputate sem elementum sed <br /> neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
                        </div>
                        <div className="col-4 mt-3 p-4  text-center">
                            <img src={card_img1} alt="" />
                            <p className="s2-card-h1 mt-5">1. Schedule online</p>
                            <p className="s2-card-text  text-center">Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
                        </div>
                        <div className="col-4 mt-3 p-4  text-center">
                            <img src={card_img2} alt="" />
                            <p className="s2-card-h1 mt-5">2. Pay online easily</p>
                            <p className="s2-card-text  text-center">Vitae ut accumsan blandit  ullamcorperol suscipit dui gravida amet at nunc.</p>
                        </div>
                        <div className="col-4 mt-3 p-4  text-center">
                            <img src={card_img3} alt="" />
                            <p className="s2-card-h1 mt-5">3. Get your house cleaned</p>
                            <p className="s2-card-text text-center">Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.</p>
                        </div>
                        <div className="row">
                            <div className="col-6 text-end">
                                <button className="get-btn">Get a free quote</button>
                            </div>
                            <div className="col-6">
                            <button className="s2-right-btn">Explore services</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section2Comp;