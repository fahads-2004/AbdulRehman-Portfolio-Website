import React from 'react';
import { FaHeart, FaLightbulb, FaRocket } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <ScrollReveal className="section-header">
                    <h2>About <span className="gradient-text">Me</span></h2>
                    <p>Get to know me better</p>
                </ScrollReveal>

                <div className="about-content">
                    <ScrollReveal>
                    <div className="about-text glass-card">
                        <h3>Front-End Developer & UI/UX Enthusiast</h3>
                        <p>
                            I'm a passionate front-end developer with a keen eye for design and a love for creating
                            seamless user experiences. With expertise in modern web technologies, I transform ideas
                            into beautiful, functional websites that users love.
                        </p>
                        <p>
                            My journey in web development started 5 years ago, and since then, I've been constantly
                            learning and evolving with the ever-changing landscape of web technologies. I believe in
                            writing clean, maintainable code and creating interfaces that are both aesthetically
                            pleasing and highly functional.
                        </p>

                        <div className="about-stats">
                            <div className="stat-item glass-card">
                                <div className="stat-icon">
                                    <FaRocket />
                                </div>
                                <div className="stat-info">
                                    <h4>50+</h4>
                                    <p>Projects Completed</p>
                                </div>
                            </div>

                            <div className="stat-item glass-card">
                                <div className="stat-icon">
                                    <FaHeart />
                                </div>
                                <div className="stat-info">
                                    <h4>30+</h4>
                                    <p>Happy Clients</p>
                                </div>
                            </div>

                            <div className="stat-item glass-card">
                                <div className="stat-icon">
                                    <FaLightbulb />
                                </div>
                                <div className="stat-info">
                                    <h4>5+</h4>
                                    <p>Years Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default About;
