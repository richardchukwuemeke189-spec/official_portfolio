import React from "react";
import '../styles/services.css'
import { Link } from "react-router-dom";
import { service_data } from "../data/servicesData";

function Service(){

    return(
        <>
            <div className="service-intro" style={{marginTop:'150px'}}>
                <h2 className="mb-4">My Services</h2>
                <div className="services-grid" style={{justifySelf:'center'}}>
                    <div key={service_data[3].id} className="service-card" style={{marginTop:'20px'}}>
                        <div className="service-img-container">
                            <img src={service_data[3].image} alt={service_data[3].title} className="service-img" />
                            <div className="img-overlay"></div>
                        </div>    
                        <div className="card-content">
                            <h5 className="service-title">{service_data[3].title}</h5>
                            <p className="service-desc">{service_data[3].description}</p>
                                
                            <div className="tech-stack-box">
                                <span className="tech-label">TECH STACK</span>
                                <p className="tech-list">{service_data[3].techStack}</p>
                            </div>
                        </div>
                    </div>

                    <div key={service_data[2].id} className="service-card" style={{marginTop:'20px'}}>
                        <div className="service-img-container">
                            <img src={service_data[2].image} alt={service_data[2].title} className="service-img" />
                            <div className="img-overlay"></div>
                        </div>    
                        <div className="card-content">
                            <h5 className="service-title">{service_data[2].title}</h5>
                            <p className="service-desc">{service_data[2].description}</p>
                                
                            <div className="tech-stack-box">
                                <span className="tech-label">TECH STACK</span>
                                <p className="tech-list">{service_data[2].techStack}</p>
                            </div>
                        </div>
                    </div>

                    <div key={service_data[1].id} className="service-card" style={{marginTop:'20px'}}>
                        <div className="service-img-container">
                            <img src={service_data[1].image} alt={service_data[1].title} className="service-img" />
                            <div className="img-overlay"></div>
                        </div>    
                        <div className="card-content">
                            <h5 className="service-title">{service_data[1].title}</h5>
                            <p className="service-desc">{service_data[1].description}</p>
                                
                            <div className="tech-stack-box">
                                <span className="tech-label">TECH STACK</span>
                                <p className="tech-list">{service_data[1].techStack}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Link to={"/services"}>
                    <p className="mt-5" style={{fontSize:'medium', fontWeight:'bold', textAlign:'center'}}>See More</p>
                </Link>
            </div>
        </>
    )
}

export default Service;