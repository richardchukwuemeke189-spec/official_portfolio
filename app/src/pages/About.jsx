import React from "react";
import '../styles/about.css'
import { service_data } from "../data/servicesData";
import { funFacts_data } from "../data/funFactsData";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
function About(){

    return(
        <>
            <div style={{marginTop:'50px'}}>
                <div className="about-wrap">
                    <div className="about_info_container">
                        <h2>ABOUT ME</h2>
                        <p className="about_info_1">I'm <strong>Orji Richard</strong>, Web Developer / UI Designer</p>
                        <div className="about_info_2">
                            I build web applications that don't just work—they look professional and convert users. With over a year of experience in the PERN stack, I handle the entire lifecycle of your project, from initial UI/UX wireframes to secure backend authentication and database architecture.
                            My goal is to save you the headache of hiring separate designers and developers. I bridge that gap by delivering pixel-perfect interfaces powered by robust, scalable code.
                            Key Expertise:
                            <ul>
                                <li>
                                    Frontend: React.js, Responsive UI/UX Design, Standard Bootstrap CSS.
                                </li>
                                <li>
                                    Backend: Node.js, Express, Secure JWT/Session Authentication.
                                </li>
                                <li>
                                    Database: PostgreSQL (Schema design & query optimization).
                                </li>
                            </ul>
                            I am committed to clean code, clear communication, and delivering products that are ready for launch. Let's hop on a call to discuss how I can bring your project to life!
                        </div>
                    </div>
                    <div className="about_profile_pic" style={{marginTop:'50px'}}>
                        {/* <img src={aboutImg} alt="profile-image" style={{backgroundColor:'black', width:'300px', height:'300px', objectFit:'cover', borderRadius:'30px'}} /> */}
                        <div style={{backgroundColor:'black', width:'300px', height:'300px'}}></div>
                    </div>
                </div>

                <div className="about-wrap wrap2">
                    <div>
                        <h5 className="wrap2-header">What I Do</h5>
                        {service_data.map((service) => {
                            const Icon = service.icon;
                            return (
                                <div key={service.id} className="about_service">
                                    <span className="about_service_icon_wrap">
                                        <Icon className="service-icon" />
                                    </span>
                                    <span className="ms-2">{service.title}</span>
                                </div>
                            );
                        })}
                    </div>
                    <div>
                        <h5 className="wrap2-header">Fun Facts</h5>
                        <div className="fun-facts">
                            {funFacts_data.map((funFact) => {
                                return (
                                    <div key={funFact.id} className="about_service fun-fact">
                                        <h5>{funFact.achievement}</h5>
                                        <span>{funFact.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div style={{padding:'20px'}}>
                    <Skills />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default About;