import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A modern e-commerce platform with cart functionality, product filtering, and secure checkout process.',
            technologies: ['React', 'Redux', 'Stripe API'],
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            image: 'project1'
        },
        {
            title: 'Task Management App',
            description: 'Collaborative task management tool with real-time updates, drag-and-drop functionality, and team features.',
            technologies: ['React', 'Firebase', 'Material-UI'],
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            image: 'project2'
        },
        {
            title: 'Weather Dashboard',
            description: 'Beautiful weather application with location-based forecasts, interactive maps, and detailed analytics.',
            technologies: ['React', 'OpenWeather API', 'Chart.js'],
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            image: 'project3'
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="section-header">
                    <h2>Featured <span className="gradient-text">Projects</span></h2>
                    <p>Some of my recent work</p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card glass-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div
                                className="project-header"
                                style={{ background: project.gradient }}
                            >
                                <div className="project-overlay">
                                    <h3 className="project-number">0{index + 1}</h3>
                                </div>
                            </div>

                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>

                                <div className="project-tech">
                                    {project.technologies.map((tech, idx) => (
                                        <span key={idx} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
