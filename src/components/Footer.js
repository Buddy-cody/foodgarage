import "./FooterStyles.css";

import React from "react";

// import { FaHome, FaPhone, FaEmailBulk, FaFacebook, FaTweeter, FaLinkedin } from "react-icons/fa";
import { FaHome, FaPhone, FaFacebook } from "react-icons/fa";

export default function Footer(){
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    </div>
                    <div>
                        <p>Housing Socity.</p>
                        <p>Hydrabad</p>
                    </div>
                    <div className="phone">
                        <h4>
                        <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                        1-2323-343-23
                        </h4>
                    </div>
                    <div className="emaile">
                        {/* <h4>
                        <FaEmailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                        info@gmail.com
                        </h4> */}
                    </div>
                </div>

                {/* <div className="right">
                    <h4>About the company</h4>
                    <p>This is me Buddy. CEO & Founder of Buddy-Cody. I Enjoying to disscuss Projects</p>
                    <div className="social">
                    <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                    <FaTweeter size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                    <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                    </div>
                </div> */}
            </div>
        </div>
    )
}