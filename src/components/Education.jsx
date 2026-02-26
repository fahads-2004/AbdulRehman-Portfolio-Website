import React from 'react';
import ScrollReveal from './ScrollReveal';
import './Education.css';

const Education = () => {
    const items = [
        {
            degree: "Bachelor's in Computer Science",
            school: 'GIFT University',
            period: '2017 – 2021',
            note: 'Focus on software development and web technologies.',
        },
    ];

    return (
        <section id="education" className="education">
            <div className="container">
                <ScrollReveal className="section-header">
                    <h2>Education</h2>
                    <p>Academic background</p>
                </ScrollReveal>
                <div className="education-list">
                    {items.map((item, index) => (
                        <ScrollReveal key={index} delay={index * 80}>
                        <div className="education-item glass-card">
                            <h3>{item.degree}</h3>
                            <p className="education-school">{item.school}</p>
                            <p className="education-period">{item.period}</p>
                            {item.note && <p className="education-note">{item.note}</p>}
                        </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
