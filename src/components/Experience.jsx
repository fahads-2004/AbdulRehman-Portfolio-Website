import React from 'react';
import ScrollReveal from './ScrollReveal';
import './Experience.css';

const Experience = () => {
    const jobs = [
        {
            title: 'Front-End Developer',
            org: 'Qubitars',
            location: 'Remote',
            period: 'Present',
            points: [
                'Build responsive websites and React applications.',
                'Implement UI/UX designs and integrate with APIs and backends.',
                'Deliver clean, maintainable code and timely project completion.',
            ],
        },
        {
            title: 'Freelance Front-End Developer',
            org: 'Freelance',
            location: 'Remote',
            period: '2021 – Present',
            points: [
                'Build responsive websites and React applications for clients.',
                'Landing pages, portfolios, and web apps with React, JavaScript, and modern tooling.',
            ],
        },
    ];

    return (
        <section id="experience" className="experience">
            <div className="container">
                <ScrollReveal className="section-header">
                    <h2>Professional <span className="gradient-text">Experience</span></h2>
                    <p>Roles and contributions</p>
                </ScrollReveal>
                <div className="experience-list">
                    {jobs.map((job, index) => (
                        <ScrollReveal key={index} delay={index * 120}>
                        <div className="experience-item glass-card">
                            <div className="experience-header">
                                <h3>{job.title} — {job.org}</h3>
                                <span className="experience-meta">{job.location} • {job.period}</span>
                            </div>
                            <ul className="experience-points">
                                {job.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
