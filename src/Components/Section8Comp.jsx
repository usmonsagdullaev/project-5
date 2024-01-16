import React from "react";

function Section8Comp() {
    return (
        <>
            <div className="container-fluid s8-fluid pt-5 pb-5">
                <div className="container  mt-5 mb-5">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-5  p-0">
                            <p className="s8-h1">Request a free <br /> cleaning quote today</p>
                            <p className="s8-text">In dignissim euismod pretium amet enim a eu nam <br /> ut urna accumsan pellentesque lacus duis pharetra eutortor.</p>
                            <div className="col-12 d-flex justify-content-start">
                                {/* <button className="s1-btn me-2">Get a free quote</button> */}
                                <div className="s1-phone-number d-flex align-items-center justify-content-center  border">
                                    <i class="fa-solid fa-phone text-primary fs-3"></i>
                                </div>
                                <div className="col-5 ms-3">
                                    <span className="text-secondary">Call us now</span> <br />
                                    <p className="number">(414) 567 - 2109</p>
                                </div>
                            </div>
                            <hr className="w-100  mt-5" />
                            <p className="s8-down-h1 mt-5">Not convinced yet?</p>
                            <p className="s8-down-p">Massa bibendum consectetur maurisid gravida purus, dolor dui amet morbi non nunc urna <br /> purus diam.</p>
                            <button className="s8-down-btn">Browse our packages</button>
                        </div>
                        <div className="col-7 input-box bg-white p-5">
                            <div className="row mt-4">
                                <div className="col-6 ">
                                    <p className="input-text">Full name</p>
                                    <input type="text" className="input" />
                                </div>
                                <div className="col-6">
                                    <p className="input-text">Phone number</p>
                                    <input type="number" className="input" />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-6 ">
                                    <p className="input-text">Address</p>
                                    <input type="address" className="input" />
                                </div>
                                <div className="col-6">
                                    <p className="input-text">Email</p>
                                    <input type="email" className="input" />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-6">
                                    <p className="input-text">Requested service</p>
                                    <input type="text" className="input" />
                                </div>
                                <div className="col-6">
                                    <p className="input-text">Day of service</p>
                                    <input type="text" className="input" />
                                </div>
                            </div>
                            <div className="col-12 mt-4 mb-4">
                                <p className="input-text ">Add a note</p>
                                <textarea className="textarea d-flex align-self-end border" id="" cols="30" rows="10"></textarea>
                                <button className="s8-input-btn mt-5">Submit message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section8Comp;