import React from 'react';
import { FaCode, FaRocket, FaDownload } from 'react-icons/fa';
import cvFile from '../assets/Resume3.3.pdf';
import './Hero.css';

const Hero = () => {
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    const techCategories = [
        { label: 'Front-End', desc: 'React, JavaScript, HTML, CSS' },
        { label: 'UI/UX', desc: 'Responsive design, Figma, accessibility' },
        { label: 'Tools', desc: 'Vite, Git, npm, Redux' },
    ];

    return (
        <section id="home" className="hero hero-zuhaib">
            <div className="container">
                <div className="hero-top-stats">
                    <div className="hero-stat-card glass-card">
                        <strong>20+</strong>
                        <span>Projects</span>
                    </div>
                    <div className="hero-stat-card glass-card">
                        <strong>15+</strong>
                        <span>Clients</span>
                    </div>
                    <div className="hero-stat-card glass-card">
                        <strong>3+</strong>
                        <span>Years</span>
                    </div>
                </div>
                <p className="hero-available-badge">Available for Freelance Projects</p>
                <h1 className="hero-title">
                    Front-End Developer <span className="hero-title-sep">•</span> UI/UX Enthusiast
                </h1>
                <p className="hero-tagline">
                    Hi, I'm <span className="gradient-text">AbdulRehman</span> — crafting beautiful, responsive, and user-friendly web experiences with modern technologies.
                </p>
                <div className="hero-tech-categories">
                    {techCategories.map((cat, i) => (
                        <div key={i} className="hero-tech-block glass-card">
                            <strong>{cat.label}</strong>
                            <span>{cat.desc}</span>
                        </div>
                    ))}
                </div>
                <div className="hero-bottom-stats">
                    <div className="hero-stat-inline">
                        <strong>20+</strong>
                        <span>Projects Delivered</span>
                    </div>
                    <div className="hero-stat-inline">
                        <strong>15+</strong>
                        <span>Happy Clients</span>
                    </div>
                    <div className="hero-stat-inline">
                        <strong>3+</strong>
                        <span>Years Experience</span>
                    </div>
                </div>
                <div className="hero-contact-strip">
                    <a href="mailto:arehmaanmughal@gmail.com">arehmaanmughal@gmail.com</a>
                    <a href="https://www.linkedin.com/in/abdul-rehman-101678215/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                <div className="hero-buttons">
                    <button className="btn btn-primary" onClick={scrollToContact}>
                        <FaRocket /> Get In Touch
                    </button>
                    <a href={cvFile} download="AbdulRehman_CV.pdf" className="btn btn-secondary">
                        <FaDownload /> Download CV
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
