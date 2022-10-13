import "./HeroImgStyle.css";
import IntroImg from "../assetes/intro-bg.jpg";
import {Link} from "react-router-dom";

export default function HeroImg(){
    return(
        <div className="hero">
            <div className="mask">
                <img className="into-img" src={IntroImg} alt="IntroImg"/>
            </div>
            <div className="content"> 
                <p>Hi, I'M A DEVELOPER.</p>
                <h1>React Developer.</h1>
                <div>
                    <Link to="/project" className="btn">Project</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>
            </div>
        </div>
    )
}