import React from 'react';
import { FaCode, FaRocket, FaDownload } from 'react-icons/fa';
import cvFile from '../assets/Resume3.3.pdf';
import './Hero.css';

const Hero = () => {
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text fade-in-up">
                        <div className="hero-badges">
                            <span className="hero-badge glass-card">
                                <FaCode /> Front-End Developer
                            </span>
                            <span className="hero-available glass-card">Available for projects</span>
                        </div>
                        <h1>
                            Hi, I'm <span className="gradient-text">AbdulRehman</span>
                        </h1>
                        <p className="hero-subtitle">
                            Crafting beautiful, responsive, and user-friendly web experiences
                            with modern technologies and creative design solutions.
                        </p>
                        <div className="hero-tech-pills">
                            <span>React</span>
                            <span>JavaScript</span>
                            <span>CSS</span>
                            <span>UI/UX</span>
                        </div>
                        <div className="hero-stats">
                            <div className="hero-stat glass-card">
                                <strong>20+</strong>
                                <span>Projects</span>
                            </div>
                            <div className="hero-stat glass-card">
                                <strong>15+</strong>
                                <span>Clients</span>
                            </div>
                            <div className="hero-stat glass-card">
                                <strong>3+</strong>
                                <span>Years</span>
                            </div>
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

                    <div className="hero-visual">
                        <div className="floating-card glass-card">
                            <div className="code-snippet">
                                <div className="code-line">
                                    <span className="code-keyword">const</span>{' '}
                                    <span className="code-variable">developer</span> ={' '}
                                    <span className="code-bracket">{'{'}</span>
                                </div>
                                <div className="code-line code-indent">
                                    <span className="code-property">name</span>:{' '}
                                    <span className="code-string">'AbdulRehman'</span>,
                                </div>
                                <div className="code-line code-indent">
                                    <span className="code-property">skills</span>:{' '}
                                    <span className="code-bracket">['React', 'CSS', 'JS']</span>,
                                </div>
                                <div className="code-line code-indent">
                                    <span className="code-property">passion</span>:{' '}
                                    <span className="code-string">'Building Amazing UIs'</span>
                                </div>
                                <div className="code-line">
                                    <span className="code-bracket">{'}'}</span>
                                </div>
                            </div>
                        </div>

                        <div className="floating-shapes">
                            <div className="shape shape-1"></div>
                            <div className="shape shape-2"></div>
                            <div className="shape shape-3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
