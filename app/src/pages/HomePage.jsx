import React from "react";
import "../styles/homePage.css";
import Service from "../components/Service";
import Skills from "../components/Skills";
import MyCV from '../../public/Orji_Richards_Portfolio.pdf'
import Footer from "../components/Footer";

function HomePage(){

    return(
        <>
        <div>
            <div className="home-wrap">
                <div className="intro">
                    <div className="intro_txt">
                        {/* //////////////// */}
                        <div className="intro_img_mobile" 
                        // style={{display:'flex', justifySelf:'flex-end'}}
                        >
                            {/* <img src="" alt="" /> */}
                            <div style={{backgroundColor:'black', width:'150px', height:'150px', borderRadius:'100%'}}></div>
                        </div>

                        <span>Orji Richard</span>
                        <h1>Full-Stack Web Developer</h1>
                        <span>Web Developer | UI Designer</span>
                        <p className="mt-2">
                            Bridging complex backend logic with modern, responsive, and polished interfaces
                        </p>
                        <div className="intro-connect">
                            <button className="btn btn-primary">
                                <a href={MyCV} download={MyCV}>Download CV</a>
                            </button>
                        </div>
                    </div>
                    <div className="intro_img">
                        {/* <img src="" alt="" /> */}
                        <div style={{backgroundColor:'black', width:'250px', height:'250px', borderRadius:'100%'}}></div>
                    </div>
                </div>

                <div style={{marginTop:'195px'}}>
                    <Service />
                </div>
                <div>
                    <Skills />
                </div>
            </div>
            <Footer />
        </div>
        </>
    )
}

export default HomePage;