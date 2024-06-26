import React from "react";
import './ContactMe.css'
// import { Link } from "react-router-dom";
// import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";
const ContactMe=()=>{
     return(
       <section className="contact-container">
        <h5>Contact Me</h5>
        <div className="react1">
                    <div className="react-icon">
                        <img src="./assets/images/address.png" alt="" />
                    </div>
                    <div className="react-icon">
                        <img src="./assets/images/phone.png" alt="" />
                    </div>
                    <div className="react-icon">
                        <img src="./assets/images/email1.png" alt="" />
                    </div>
                    <div className="react-icon">
                        <img src="./assets/images/linkedin.png" alt="" />
                    </div>
                </div>
                <div className="text">
                    <span className="span1">ADDRESS</span>
                    <span className="span2">CONTACT NUMBER</span>
                    <span className="span3">EMAIL ADDRESS</span>
                    <span className="span4">LINKEDIN</span>
                    </div>
                    <div className="text1">
                    <span className="p1">Vellore,</span>
                    <span className="p2">8248703929</span>
                    <span className="p3">mohanswetha944</span>
                    <span className="p4">swetha</span>
                    </div>
                    <div className="text3">
                        <span className="f1">TamilNadu</span>
                        <span className="f3">@gmail.com</span>
                        <span className="f4">mohan-63a339252</span>
                    </div>

        <div className="contact-content">
           {/* <div style={{flex:1}}>
                <ContactInfoCard 
                    iconUrl={"./assets/images/emailicon.png"}
                    text={"mohanswetha944@gmail.com"}/>
                    <ContactInfoCard 
                    iconUrl="./assets/images/github-mark-white.svg"
                    text="https://github.com/sswethamohan"/>
                     <ContactInfoCard 
                    iconUrl="./assets/images/download.png"
                    text="8248703929"/>
           </div> */}

           <div style={{flex:1}}>
            <ContactForm/>
           </div>
        </div>
        <div className="contact-info">
          <h1 style={{fontSize:"40px",marginTop:"60px"}}>Contact Info</h1><br></br>
          <span style={{fontSize:"25px"}}>✉️</span>
          <span style={{fontSize:"25px"}}>Email</span>
          <p>mohanswetha944@gmail.com</p><br></br>
          <span style={{fontSize:"25px"}}>📞</span>
          <span style={{fontSize:"25px"}}>Phone</span>
          <p>8248703929</p><br></br>
          <span></span>
          <span style={{fontSize:"25px"}}>Address</span>
          <p>No7,old hosptial road dharanampettai</p><p> bhazaar,gudiyatham,632-602</p>

          
        </div>
       </section>
     )
}

export default ContactMe