import React from "react";
import "../styles/about.css";
import { service_data } from "../data/servicesData";
import { funFacts_data } from "../data/funFactsData";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import aboutPhoto from "../assets/profilePic.jpeg";

function About() {
    return (
        <>
            <div style={{ marginTop: "50px" }}>
                <div className="about-wrap">
                    <div className="about_info_container">
                        <h2>ABOUT ME</h2>

                        <p className="about_info_1">
                            I'm <strong>Orji Richard</strong>, a Web Developer
                        </p>

                        <div className="about_info_2">
                            I build responsive and functional web applications using
                            modern frontend and backend technologies. I enjoy turning
                            ideas and requirements into clean, user-friendly web
                            experiences with reliable functionality.

                            <p>
                                My experience includes building frontend interfaces,
                                integrating APIs, implementing authentication, working
                                with databases, and deploying web applications.
                            </p>

                            <p>Key Expertise:</p>

                            <ul>
                                <li>
                                    <strong>Frontend:</strong> React.js, JavaScript,
                                    HTML, CSS, Bootstrap, Responsive Web Development.
                                </li>

                                <li>
                                    <strong>Backend:</strong> Node.js, Express, REST
                                    APIs, JWT Authentication.
                                </li>

                                <li>
                                    <strong>Database:</strong> PostgreSQL, MySQL,
                                    Supabase.
                                </li>
                            </ul>

                            <p>
                                I focus on writing clean, maintainable code, solving
                                technical problems, and building web applications that
                                work well across different devices.
                            </p>
                        </div>
                    </div>

                    <div
                        className="about_profile_pic"
                        style={{ marginTop: "50px" }}
                    >
                        <img
                            src={aboutPhoto}
                            alt="Orji Richard"
                            style={{
                                backgroundColor: "black",
                                width: "300px",
                                height: "300px",
                                objectFit: "cover",
                                borderRadius: "30px"
                            }}
                        />
                    </div>
                </div>

                <div className="about-wrap wrap2">
                    <div>
                        <h5 className="wrap2-header">What I Do</h5>

                        {service_data.map((service) => {
                            const Icon = service.icon;

                            return (
                                <div
                                    key={service.id}
                                    className="about_service"
                                >
                                    <span className="about_service_icon_wrap">
                                        <Icon className="service-icon" />
                                    </span>

                                    <span className="ms-2">
                                        {service.title}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    <div>
                        <h5 className="wrap2-header">Fun Facts</h5>

                        <div className="fun-facts">
                            {funFacts_data.map((funFact) => {
                                return (
                                    <div
                                        key={funFact.id}
                                        className="about_service fun-fact"
                                    >
                                        <h5>{funFact.achievement}</h5>

                                        <span>
                                            {funFact.description}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div style={{ padding: "20px" }}>
                    <Skills />
                </div>

                <Footer />
            </div>
        </>
    );
}

export default About;