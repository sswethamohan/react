import React from "react";
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero.jsx/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
 import { BrowserRouter} from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <>
       <BrowserRouter>
       <Navbar/>
        <div className="container">
             <Hero/>
             <About/>
            <Skills/>
            <Projects/>
            <ContactMe/>
        </div>
        <Footer/>
             </BrowserRouter>
{/* 
            <Router>
            <Routes>
                <Route path="/" element={<Navbar />} />
                <Route path="Hero" element={<Hero />} />
                <Route path="About" element={<About />} />
                <Route path="Skills" element={<Skills />} />
                <Route path="Projects" element={<Projects />} />
                <Route path="ContactMe" element={<ContactMe />} />
            </Routes>
        </Router> */}
        </>
    )
}
export default App;
