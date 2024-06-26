import React from "react";
import './Hero.css';
import { Link } from "react-router-dom";
// import { FaInstagram } from "react-icons/fa";
// import { LiaLinkedin } from "react-icons/lia";
// import { TfiEmail } from "react-icons/tfi";
// import { FaGithub } from "react-icons/fa"; 
const Hero =()=>{
    return (
        <section className="hero-container">
            <div className="hero-content">
                <h2>Hello, It's me</h2>
                <h1>SwethaMohan</h1>
                <p>Front-End-Developer</p>
                {/* <p>Passionate Full Stack Developer | Transforming Ideas into seamless and
                    Visually & Logically Stunning Web Solutions
                </p> */}
                 <div  id="react-images"> 
            <div className="react1">
                    <div className="tech-icon">
                        {/* <img src="./assets/images/github.png" alt=""/> */}
                        <Link to="https://github.com/sswethamohan"><img src="./assets/images/github.png" alt=""/></Link>
                    </div>
                    <div className="tech-icon">
                        {/* <img src="./assets/images/download.png" alt="" /> */}
                        <Link to="https://www.linkedin.com/in/swetha-mohan-63a339252/"> <img src="./assets/images/download.png" alt="" /></Link>
                    </div>
                    <div className="tech-icon">
                        {/* <img src="./assets/images/mail.png" alt="" /> */}
                        <Link to="mohanswetha944@gmail.com"><img src="./assets/images/mail.png" alt="" /></Link>
                        
                    </div>
                    <div className="tech-icon">
                    <Link to="https://www.instagram.com/swethamohan732001/?hl=en"> <img src="./assets/images/instagram_icon.png" alt="" /></Link>
                        {/* <img src="./assets/images/instagram_icon.png" alt="" /> */}
                    </div> 
                </div>
                </div>
            </div>
            <div className="hero-img">
                <div>
                    {/* <div className="tech-icon java">
                        <img src="./assets/images/javaicon.png" alt="" />
                    </div> */}
                    {/* <div className="tech-icon react">
                        <img src="./assets/images/reacticon.png" alt="" />
                    </div> */}
                    <img src="./assets/images/me.jpg"  alt="" />
                </div>
                <div>
                    <div className="tech-icon">
                        <img src="./assets/images/htmlicon.png" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/images/cssicon.png" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/images/jsicon.png" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/images/reacticon.png" alt="" />
                    </div>
                </div>
                {/* <div className="icon">
                    <span className="icon-img">
                     <Link to="https://www.instagram.com/swethamohan732001/?hl=en"><FaInstagram size="2.5rem"/></Link> 
                        {/* <Link to="https://www.instagram.com/swethamohan732001/?hl=en"><img src="C:\Users\mohan\Downloads\My_Portfolio-file\My_Portfolio-main\src\components\images\download.png"/></Link> */}
                    {/* </span>
                <span className="icon-img"><Link to="https://www.linkedin.com/in/swetha-mohan-63a339252/"><LiaLinkedin size="2.6rem" /></Link></span>
                <span className="icon-img"><Link to="mohanswetha944@gmail.com"><TfiEmail size="2.4rem" /></Link></span>
                <span className="icon-img"><Link to="https://github.com/sswethamohan"><FaGithub size="2.5rem" /></Link></span> 
                </div> */} 
            </div>
           
        </section>

    )
}

export default Hero