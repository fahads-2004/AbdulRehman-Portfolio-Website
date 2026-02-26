import React from 'react';
import './Services.css';

const Services = () => {
    const services = [
        {
            title: 'Responsive Web Design',
            description: 'Mobile-first, accessible layouts that look great on every device and screen size.',
        },
        {
            title: 'React & Single Page Apps',
            description: 'Fast, interactive applications with React, state management, and modern tooling.',
        },
        {
            title: 'UI/UX & Front-End Development',
            description: 'Clean interfaces and smooth user experiences with attention to design and performance.',
        },
        {
            title: 'Landing Pages & Portfolios',
            description: 'Conversion-focused landing pages and professional portfolio sites.',
        },
        {
            title: 'Integration & APIs',
            description: 'Connecting your front-end to REST APIs, auth, and third-party services.',
        },
        {
            title: 'Maintenance & Support',
            description: 'Updates, bug fixes, and ongoing support to keep your project running smoothly.',
        },
    ];

    return (
        <section id="services" className="services">
            <div className="container">
                <div className="section-header">
                    <h2>Freelance <span className="gradient-text">Services</span></h2>
                    <p>Front-End • React • UI/UX • Web Apps</p>
                </div>
                <div className="services-grid">
                    {services.map((item, index) => (
                        <div key={index} className="service-card glass-card">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
