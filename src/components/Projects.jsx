import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Platform',
            category: 'Freelance Project',
            year: '2024',
            description: 'A modern e-commerce platform with cart functionality, product filtering, and secure checkout process.',
            technologies: ['React', 'Redux', 'Stripe API'],
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
        },
        {
            title: 'Task Management App',
            category: 'Personal Project',
            year: '2024',
            description: 'Collaborative task management tool with real-time updates, drag-and-drop functionality, and team features.',
            technologies: ['React', 'Firebase', 'Material-UI'],
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
        },
        {
            title: 'Weather Dashboard',
            category: 'Freelance Project',
            year: '2023',
            description: 'Beautiful weather application with location-based forecasts, interactive maps, and detailed analytics.',
            technologies: ['React', 'OpenWeather API', 'Chart.js'],
            image: 'https://images.unsplash.com/photo-1504386106331-3e4e71712b38?w=600&h=400&fit=crop',
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="section-header">
                    <h2>Selected <span className="gradient-text">Projects</span></h2>
                    <p>Client, freelance, and personal builds</p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card glass-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="project-header">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                />
                                <div className="project-overlay">
                                    <h3 className="project-number">0{index + 1}</h3>
                                </div>
                            </div>

                            <div className="project-content">
                                <div className="project-meta">
                                    <span className="project-category">{project.category}</span>
                                    <span className="project-year">{project.year}</span>
                                </div>
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
