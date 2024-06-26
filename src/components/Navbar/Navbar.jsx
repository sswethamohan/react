import React, { useState } from "react"
import './Navbar.css'
import 'material-symbols'
import MobileNav from "./MobileNav/MobileNav";
 import {Link} from "react-router-dom";


const Navbar = ()=>{

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };
    return(
        <div>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <p>☘️Protfolio</p>
                    {/* <img className="logo" src="./assets/images/sakthivellogo.svg" alt="Sakthivel name Logo" /> */}
                    <ul>
                        <li>
                            <a className="menu-item" href="">Home</a>
                        </li>
                        <li>
                        <Link className="menu-item" to="about" smooth={true} duration={500} >About</Link>
                    </li>
                        <li>
                            <a className="menu-item" href="">Skills</a>
                        </li>
                        <li>
                            <a className="menu-item" href="">Projects</a>
                        </li>
                        <li>
                            <a className="menu-item" href="">Contact Me</a>
                        </li>
                        {/* <button className="contect-btn" onClick={()=>{}}>
                            Hire me
                        </button> */}
                    </ul>

                    <button class= "menu-btn" onClick={toggleMenu}>
                        <span 
                        class={"material-symbols-outlined"}
                        style={{fontSize:"1.8rem"}}
                        >
                            {openMenu ? "close" :"menu"}
                        </span>
                    </button>

                </div>

            </nav>
        </div>
    )
}

export default Navbar