import React from 'react';
import './Experience.css';

const Experience = () => {
    const jobs = [
        {
            title: 'Front-End Developer',
            org: 'Freelance & Projects',
            location: 'Remote',
            period: '2021 – Present',
            points: [
                'Build responsive websites and React applications for clients.',
                'Implement UI/UX designs and integrate with APIs and backends.',
                'Deliver clean, maintainable code and timely project completion.',
            ],
        },
        {
            title: 'Web Development & UI Work',
            org: 'Personal & Academic',
            location: 'Various',
            period: '2019 – 2021',
            points: [
                'Developed multiple front-end projects and portfolio sites.',
                'Worked with React, JavaScript, CSS, and modern tooling.',
            ],
        },
    ];

    return (
        <section id="experience" className="experience">
            <div className="container">
                <div className="section-header">
                    <h2>Professional <span className="gradient-text">Experience</span></h2>
                    <p>Roles and contributions</p>
                </div>
                <div className="experience-list">
                    {jobs.map((job, index) => (
                        <div key={index} className="experience-item glass-card">
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
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
