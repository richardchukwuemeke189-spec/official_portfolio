import React, { useState } from 'react';
import '../styles/contact.css'
import emailjs from "@emailjs/browser";
import { footer_data } from "../data/footerData";
import Footer from '../components/Footer';
import { Toaster, toast } from "react-hot-toast";

// 🔒 Simple sanitizer
function sanitizeInput(input) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ✅ Email validator
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function Contact(){

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (loading) return;
        setLoading(true);

        const form = e.target;

        // Get raw values
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const subject = form.subject.value.trim();
        const service = form.service.value;
        const budget = form.budget.value.trim();
        const message = form.message.value.trim();

        // 🚫 Basic validation
        if (!name || !email || !service || !message) {
        // alert("Please fill all required fields");
        toast.error("Please fill all required field");
        return;
        }

        if (!isValidEmail(email)) {
        // alert("Please enter a valid email");
        toast.error("Please enter a valid email");
        return;
        }

        if (message.length > 1000) {
        // alert("Message too long");
        toast.error("Message too long");
        return;
        }

        // 🚫 Block obvious script attempts
        const lowerMsg = message.toLowerCase();
        if (lowerMsg.includes("<script") || lowerMsg.includes("javascript:")) {
        // alert("Invalid input detected");
        toast.error("Invalid input detected");
        return;
        }

        // 🧼 Sanitize inputs
        form.name.value = sanitizeInput(name);
        form.email.value = sanitizeInput(email);
        form.subject.value = sanitizeInput(subject);
        form.budget.value = sanitizeInput(budget);
        form.message.value = sanitizeInput(message);

        try {
        // Send message to you
        await emailjs.sendForm(
            "service_flhsa7j",
            "template_00ybzld",
            form,
            "IRCBDAIFrylbWf1oN"
        );

        // Send auto-reply
        await emailjs.sendForm(
            "service_flhsa7j",
            "template_272p2e2",
            form,
            "IRCBDAIFrylbWf1oN"
        );

        // alert("Message sent!");
        toast.success("Message sent!");
        form.reset();

        } catch (error) {
        console.error("EmailJS Error:", error);
        // alert("Something went wrong. Please try again.");
        toast.error("Something went wrong. Please try again.");
        }finally {
            setLoading(false);
        }
    };

    return(
        <>
            <Toaster position="top-right" reverseOrder={false} />
            <div className="contact-container">
                <h2>Contact Me</h2>
                <div className="contact-wrap row">
                    <div className="contact-form-card card col-10 col-sm-10 col-md-6 col-lg-5">
                        <form onSubmit={handleSubmit}>
                            <h4>Send me a Message!</h4>
                            <div className="row nameEmailGroup" style={{justifyContent:'space-between'}}>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                    <input name="name" type="text" className=" form-control" placeholder="Name" required />
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                    <input name="email" type="email" className="form-control" placeholder="Email" required />
                                </div>
                            </div>
                            <input name="subject" type="text" className=" form-control" placeholder="Subject" />
                            <select name="service" className="form-select " required>
                                <option value="">Select Service</option>
                                <option>Web Development</option>
                                <option>Frontend Development</option>
                                <option>Backend Development</option>
                                <option>UI/UX Design</option>
                                <option>Full Project</option>
                            </select>
                            <input name="budget" type="text" className="form-control" placeholder="Budget (Optional)" />
                            <textarea name="message" placeholder="Message" rows={3}></textarea>

                            <button 
                                type="submit" 
                                className="btn btn-primary w-100"
                                disabled={loading}
                                >
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>

                    <div className="contact-info card col-10 col-sm-10 col-md-5 col-lg-4">
                        <h4 className="mt-4">Contact Info</h4>

                        <div>
                            {footer_data.map((item) => (
                                <div style={{marginTop:'10px'}} key={item.url}>
                                    <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-icon"
                                    >
                                        <i style={{color:'#00f5d4'}} className={item.icon}></i>
                                    </a>
                                    <br />
                                </div>
                            ))}
                            <iframe className="mt-3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.234816514433!2d3.576519374046504!3d6.617723422063173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103befc67f743b81%3A0x9dff048175c4a912!2sBagidan!5e0!3m2!1sen!2sng!4v1774138379691!5m2!1sen!2sng" style={{border: '0', width:'100%', height:'300%px', borderRadius:'5px'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Contact;