import React, { useRef, useState } from 'react';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import './Contact.css';

// Formspree form ID – create a form at https://formspree.io with arehmaanmughal@gmail.com and replace this ID
const FORMSPREE_FORM_ID = 'YOUR_FORMSPREE_FORM_ID';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus('');

        if (FORMSPREE_FORM_ID === 'YOUR_FORMSPREE_FORM_ID') {
            setStatus('error');
            setLoading(false);
            setTimeout(() => setStatus(''), 5000);
            return;
        }

        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
                method: 'POST',
                body: new FormData(form.current),
                headers: { Accept: 'application/json' },
            });

            const data = await response.json();

            if (data.ok) {
                setStatus('success');
                form.current.reset();
                setTimeout(() => setStatus(''), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus(''), 5000);
            }
        } catch (err) {
            setStatus('error');
            setTimeout(() => setStatus(''), 5000);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-header">
                    <h2>Get In <span className="gradient-text">Touch</span></h2>
                    <p>Let's work together on your next project</p>
                </div>

                <div className="contact-cta">
                    <p className="contact-cta-title">Let's build something together</p>
                    <p className="contact-cta-sub">Available for freelance projects and full-time roles.</p>
                    <div className="contact-cta-links">
                        <a href="mailto:arehmaanmughal@gmail.com" className="contact-cta-link">Contact Me</a>
                        <a href="https://www.linkedin.com/in/abdul-rehman-101678215/" target="_blank" rel="noopener noreferrer" className="contact-cta-link">LinkedIn</a>
                    </div>
                </div>

                <div className="contact-content">
                    <form ref={form} onSubmit={sendEmail} className="contact-form glass-card">
                        <div className="form-group">
                            <label htmlFor="user_name">Your Name</label>
                            <input
                                type="text"
                                id="user_name"
                                name="name"
                                placeholder="John Doe"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="user_email">Your Email</label>
                            <input
                                type="email"
                                id="user_email"
                                name="email"
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
                                <FaExclamationCircle /> Oops! Something went wrong. Please try again or email me at arehmaanmughal@gmail.com.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
