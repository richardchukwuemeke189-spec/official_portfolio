import React, { useState } from "react";
import "../styles/contact.css";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";
import { Toaster, toast } from "react-hot-toast";

function sanitizeInput(input) {
    return input
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function Contact() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (loading) return;

        setLoading(true);

        const form = e.target;

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const subject = form.subject.value.trim();
        const service = form.service.value;
        const budget = form.budget.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !service || !message) {
            toast.error("Please fill all required fields");
            setLoading(false);
            return;
        }

        if (!isValidEmail(email)) {
            toast.error("Please enter a valid email");
            setLoading(false);
            return;
        }

        if (message.length > 1000) {
            toast.error("Message too long");
            setLoading(false);
            return;
        }

        const lowerMsg = message.toLowerCase();

        if (
            lowerMsg.includes("<script") ||
            lowerMsg.includes("javascript:")
        ) {
            toast.error("Invalid input detected");
            setLoading(false);
            return;
        }

        form.name.value = sanitizeInput(name);
        form.email.value = sanitizeInput(email);
        form.subject.value = sanitizeInput(subject);
        form.budget.value = sanitizeInput(budget);
        form.message.value = sanitizeInput(message);

        try {
            await emailjs.sendForm(
                "service_flhsa7j",
                "template_00ybzld",
                form,
                "IRCBDAIFrylbWf1oN"
            );

            await emailjs.sendForm(
                "service_flhsa7j",
                "template_272p2e2",
                form,
                "IRCBDAIFrylbWf1oN"
            );

            toast.success("Message sent!");
            form.reset();
        } catch (error) {
            console.error("EmailJS Error:", error);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />

            <div className="contact-container">
                <h2>Contact Me</h2>

                <div className="contact-wrap row">

                    {/* Contact Form */}
                    <div className="contact-form-card card col-10 col-sm-10 col-md-6 col-lg-5">
                        <form onSubmit={handleSubmit}>
                            <h4>Send me a Message!</h4>

                            <div
                                className="row nameEmailGroup"
                                style={{ justifyContent: "space-between" }}
                            >
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                    <input
                                        name="name"
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                        required
                                    />
                                </div>

                                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                    <input
                                        name="email"
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                            </div>

                            <input
                                name="subject"
                                type="text"
                                className="form-control"
                                placeholder="Subject"
                            />

                            <select
                                name="service"
                                className="form-select"
                                required
                            >
                                <option value="">Select Service</option>
                                <option>Web Development</option>
                                <option>Frontend Development</option>
                                <option>Backend Development</option>
                                <option>API Integration</option>
                                <option>Full Project</option>
                            </select>

                            <input
                                name="budget"
                                type="text"
                                className="form-control"
                                placeholder="Budget (Optional)"
                            />

                            <textarea
                                name="message"
                                placeholder="Message"
                                rows={3}
                                required
                            ></textarea>

                            <button
                                type="submit"
                                className="btn btn-primary w-100"
                                disabled={loading}
                            >
                                {loading ? (
                                    <div className="loader">
                                        Submitting ...
                                    </div>
                                ) : (
                                    "Send Message"
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="contact-info card col-10 col-sm-10 col-md-5 col-lg-4">

                        <h4 className="mt-4">Contact Info</h4>

                        <div className="contact-details">

                            {/* Phone */}
                            <div className="contact-item">
                                <i
                                    className="bi bi-telephone-fill"
                                    style={{ color: "#00f5d4" }}
                                ></i>

                                <div>
                                    <span>Phone: </span>

                                    <a href="tel:+2348020770820">
                                        +234 802 077 0820
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="contact-item">
                                <i
                                    className="bi bi-envelope-fill"
                                    style={{ color: "#00f5d4" }}
                                ></i>

                                <div>
                                    <span>Email: </span>

                                    <a href="mailto:richardchukwuemeke189@gmail.com">
                                        richardchukwuemeke189@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* LinkedIn */}
                            <div className="contact-item">
                                <i
                                    className="bi bi-linkedin"
                                    style={{ color: "#00f5d4" }}
                                ></i>

                                <div>
                                    <span>LinkedIn: </span>

                                    <a
                                        href="https://linkedin.com/in/chukwuemeke-richard-35ba883b8"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        linkedin.com/in/chukwuemeke-richard-35ba883b8
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}

export default Contact;