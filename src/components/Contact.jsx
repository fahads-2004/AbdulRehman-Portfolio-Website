import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus('');

        // Replace these with your EmailJS credentials
        // Get them from: https://www.emailjs.com/
        const serviceId = 'YOUR_SERVICE_ID';
        const templateId = 'YOUR_TEMPLATE_ID';
        const publicKey = 'YOUR_PUBLIC_KEY';

        emailjs
            .sendForm(serviceId, templateId, form.current, publicKey)
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                    setStatus('success');
                    setLoading(false);
                    form.current.reset();

                    // Clear success message after 5 seconds
                    setTimeout(() => setStatus(''), 5000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setStatus('error');
                    setLoading(false);

                    // Clear error message after 5 seconds
                    setTimeout(() => setStatus(''), 5000);
                }
            );
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-header">
                    <h2>Get In <span className="gradient-text">Touch</span></h2>
                    <p>Let's work together on your next project</p>
                </div>

                <div className="contact-content">
                    <form ref={form} onSubmit={sendEmail} className="contact-form glass-card">
                        <div className="form-group">
                            <label htmlFor="user_name">Your Name</label>
                            <input
                                type="text"
                                id="user_name"
                                name="user_name"
                                placeholder="John Doe"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="user_email">Your Email</label>
                            <input
                                type="email"
                                id="user_email"
                                name="user_email"
                                placeholder="john@example.com"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Project Inquiry"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                placeholder="Tell me about your project..."
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary submit-btn"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <span className="spinner"></span> Sending...
                                </>
                            ) : (
                                <>
                                    <FaPaperPlane /> Send Message
                                </>
                            )}
                        </button>

                        {status === 'success' && (
                            <div className="status-message success">
                                <FaCheckCircle /> Message sent successfully! I'll get back to you soon.
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="status-message error">
                                <FaExclamationCircle /> Oops! Something went wrong. Please try again.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
