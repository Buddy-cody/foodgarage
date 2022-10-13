import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";

export default function Contact(){
    return(
        <div>
            <Navbar/>
            <HeroImg2 heading="CONTACT." text="Lets have a chat."/>
            <Footer/>
        </div>
    )
}