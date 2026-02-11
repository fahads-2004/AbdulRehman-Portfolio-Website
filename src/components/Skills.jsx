import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaFigma, FaSass, FaNpm } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiRedux, SiVite } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
    const skills = [
        { name: 'React', icon: <FaReact />, color: '#61DAFB' },
        { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
        { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
        { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
        { name: 'Sass', icon: <FaSass />, color: '#CC6699' },
        { name: 'Redux', icon: <SiRedux />, color: '#764ABC' },
        { name: 'Vite', icon: <SiVite />, color: '#646CFF' },
        { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
        { name: 'Figma', icon: <FaFigma />, color: '#F24E1E' },
        { name: 'npm', icon: <FaNpm />, color: '#CB3837' },
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <div className="section-header">
                    <h2>My <span className="gradient-text">Skills</span></h2>
                    <p>Technologies I work with</p>
                </div>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="skill-card glass-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="skill-icon" style={{ color: skill.color }}>
                                {skill.icon}
                            </div>
                            <h3>{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
