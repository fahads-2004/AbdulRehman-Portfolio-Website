import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar glass-card">
            <div className="container">
                <div className="nav-content">
                    <div className="nav-logo">
                        <span className="gradient-text">Portfolio</span>
                    </div>

                    <ul className="nav-links">
                        <li><a onClick={() => scrollToSection('home')}>Home</a></li>
                        <li><a onClick={() => scrollToSection('about')}>About</a></li>
                        <li><a onClick={() => scrollToSection('services')}>Services</a></li>
                        <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
                        <li><a onClick={() => scrollToSection('experience')}>Experience</a></li>
                        <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
                        <li><a onClick={() => scrollToSection('education')}>Education</a></li>
                        <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
                    </ul>

                    <div className="nav-social">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/abdul-rehman-101678215/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
