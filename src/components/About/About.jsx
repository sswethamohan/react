import React from "react";
// import { Link } from "react-router-dom";
import My from "./my.jpg"
import "./About.css"
const App=()=>{
    return(
        <div className="head">
        {/* <span><Link to="/">Hero</Link></span>
        <span><Link to="/About">AboutUs</Link></span>
        <span><Link to="/Skills">Skills</Link></span>
        <span><Link to="/Projects">Projects</Link></span>
        <span><Link to="/ContactMe">ContactMe</Link></span> */}
        
        <div className="aboutme">
           <h2 className="heading">ABOUT ME</h2>
            <h1>Hi There! I'm Swetha Mohan</h1>
            <h3>Front-End-developer</h3>
            <p>I am a dedicated and motivated Python Programmer with a deep passion for coding and problem-solving.
                With a solid understanding of Python's syntax,data structure, and oops principles, with a full understanding of HTML,CSS,JS, REACTJS and As a Python developer,
                I also have a understanding of database in mysql,a popular relational database management system.</p><br></br>
            <p>Name      : Swetha M </p><br></br>
            <p>Birthday  : March 07,2001</p><br></br>
            <p>Phone     : 8248703929</p><br></br>
            <p>E-mail    : mohanswetha944@gmail.com</p><br></br>
            <p>Language  : English,Tamil,Telugu</p><br></br>
            <p>Location  : Vellore,TamilNadu</p><br></br><br></br>
            {/* <iframe src="C:/Users/mohan/Downloads/fresher_2023_Msc.Computer Science_Swetha M_frontEndDeveloper_.pdf">Download Resume</iframe> */}
            <a className="resume" href="./assets/images/fresher_2023_Msc.Computer Science_Swetha M_frontEndDeveloper_.pdf">Download Resume</a>
        </div>
        <div className="title">
        <img src={My}  style={{width:"500px", height:"500px"}}/>
        </div>
        <div className="resume-session">
            <ul>
            <strong>RESUME</strong>
            <h1>🎓Education</h1>
            <li>
            <h2>Master of Computer Science</h2>
            <h3>2021-2023</h3>
            <p>Thiruvalluvar University-88.45%</p>
            </li>
            <li>
            <h2>Bachelor of Computer Science</h2>
            <h3>2018-2021</h3>
            <p>Thiruvalluvar University-83.64</p>
            </li>
            <li>
            <h2>HSC-Government Girls Hr.Sec.School,State</h2>
            <h3>Completed in 2018-65%</h3>
            </li>
            <li>
            <h2>SSLC-National Hr.Sec.School,State</h2>
            <h3>Completed in 2016-65%</h3>
            </li>
            </ul>
        </div>
        <div className="expreience">
            <ul>
            <h1>Experience</h1>
            <li>
            <h2>CorpWings </h2>
            <h3>IT Service & Consultancy</h3>
            <p>Intern-2024</p>
            </li>
            <h1 className="certi-class">Certification</h1>
            <li>
            <h2>Besant Technology </h2>
            <h3>Python Full Stack</h3>
            <p>Certification course in ( FULL STACK PYTHON ) from Besant Technologies ,Rajajinagar ,Bangalore</p>
            </li>
            </ul>
            </div>
   
        </div>
    )
}
export default App