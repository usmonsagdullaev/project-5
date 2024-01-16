import React from "react";
import footer_img from "../images/header-img.png"

function Footer(){
    return(
        <>
            <div className="container-fluid bg-white pt-5 pb-5">
                <div className="container pt-5 pb-5 ">
                    <div className="row d-flex justify-content-between">
                            <div className="col-3">
                                <p className="footer-h1-card1">Quality cleaning for your home</p>
                                <p className="footer-text-card1 m-0">Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.</p>
                                <div className="col-10 mt-4 d-flex justify-content-between">
                                    <div className="footer-cub"></div>
                                    <div className="footer-cub"></div>
                                    <div className="footer-cub"></div>
                                    <div className="footer-cub"></div>
                                    <div className="footer-cub"></div>
                                </div>
                            </div>
                            <div className="col-3">
                                <p className="footer-text-card2">Contact us</p>
                                <div className="col-12 p-3">
                                    <p className="footer-p-card2"><a href="#">1827 Nickel Road, Los Angeles, CA, 90017, United States</a></p>
                                    <p className="footer-p-card2 "><a href="#">(414) 567 - 2109</a></p>
                                    <p className="footer-p-card2"><a href="#">contact@cleaning.com</a></p>
                                </div>
                            </div>
                            <div className="col-2">
                                <p className="footer-text-card3 ">Hours</p>
                                <p className="footer-text-card3 mt-4">Monday to Friday</p>
                                <p className="footer-p-card3">6:00 AM - 9:00 PM</p>
                                <p className="footer-text-card3 mt-3">Saturday & Sunday</p>
                                <p className="footer-p-card3">8:00 AM - 8:00 PM</p>
                            </div>
                            <div className="col-4 ">
                                <p className="footer-text-card4 m-0">Get a free estimate</p>
                                <p className="footer-number-card4 mt-4 m-0">(414) 567 - 2109</p>
                                <p className="footer-p-card4 mt-2">Lorem ipsum dolor sit amet ectetur <br /> adipiscing elit, sed do eiusmod.</p>
                                <button className="footer-btn-card4">Request a free quote</button>
                            </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container-fluid">
                <div className="container pt-5 pb-5">
                    <div className="row">
                        <div className="col-4">
                            <img src={footer_img} alt="" />
                        </div>
                        <div className="col-8 d-flex justify-content-end">
                            <p><a className="link-secondary me-1" href="#">Copyright © Cleaning X | Designed by</a></p>
                            <p><a href="#">BRIX Templates</a></p>
                            <p><a className="link-secondary me-1" href="#">- Powered by</a></p>
                            <p><a href="#">Webflow</a></p>
                            <p><a href="#">Licenses</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;