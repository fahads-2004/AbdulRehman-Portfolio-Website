import React from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-cta">
                    <p className="footer-cta-title">Let's build something together</p>
                    <p className="footer-cta-sub">Available for freelance projects and full-time roles. Based locally, working globally.</p>
                    <div className="footer-cta-links">
                        <a href="mailto:arehmaanmughal@gmail.com" className="btn btn-primary footer-cta-btn">Contact Me</a>
                        <a href="https://www.linkedin.com/in/abdul-rehman-101678215/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary footer-cta-btn">LinkedIn</a>
                    </div>
                </div>
                <div className="footer-content">
                    <div className="footer-social">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/abdul-rehman-101678215/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <FaTwitter />
                        </a>
                        <a href="mailto:arehmaanmughal@gmail.com" aria-label="Email">
                            <FaEnvelope />
                        </a>
                    </div>

                    <div className="footer-text">
                        <p>
                            Made with <FaHeart className="heart-icon" /> by{' '}
                            <span className="gradient-text">AbdulRehman</span>
                        </p>
                        <p className="copyright">© {currentYear} All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
