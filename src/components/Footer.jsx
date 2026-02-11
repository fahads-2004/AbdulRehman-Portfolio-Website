import React from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-social">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <FaTwitter />
                        </a>
                        <a href="mailto:alex@example.com" aria-label="Email">
                            <FaEnvelope />
                        </a>
                    </div>

                    <div className="footer-text">
                        <p>
                            Made with <FaHeart className="heart-icon" /> by{' '}
                            <span className="gradient-text">BlueFrame System</span>
                        </p>
                        <p className="copyright">© {currentYear} All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
