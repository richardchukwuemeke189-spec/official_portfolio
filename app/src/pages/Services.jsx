import React from "react";
import '../styles/services.css';
import { service_data } from "../data/servicesData";
import Footer from '../components/Footer'

function Services() {
    return (
        <div>
        <section className="services-section">
            <div className="container">
                <div className="services-intro">
                    <h2>What I Do</h2>
                    <p>Blending technical logic with creative execution.</p>
                </div>
                <div className="container">
                <div className="row g-4 justify-content-center">

                  {service_data.map((service) => (
                    <div
                      key={service.id}
                      className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 d-flex"
                    >
                      <div className="service-card w-100">

                        <div className="service-img-container">
                          <img src={service.image} alt={service.title} className="service-img" />
                          <div className="img-overlay"></div>
                        </div>

                        <div className="card-content">
                          <h5 className="service-title">{service.title}</h5>
                          <p className="service-desc">{service.description}</p>

                          <div className="tech-stack-box">
                            <span className="tech-label">TECH STACK</span>
                            <p className="tech-list">{service.techStack}</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </div>
        </section>
        <Footer />
    </div>
    );
}

export default Services;