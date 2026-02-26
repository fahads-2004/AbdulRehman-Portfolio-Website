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

    const proficiency = [
        { name: 'React / JavaScript', percent: 92 },
        { name: 'HTML / CSS', percent: 94 },
        { name: 'UI/UX & Responsive Design', percent: 88 },
        { name: 'Git / Tooling', percent: 85 },
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <div className="section-header">
                    <h2>Core <span className="gradient-text">Skills</span></h2>
                    <p>Hands-on technologies and practices</p>
                </div>

                <h3 className="skills-subtitle">Technical Stacks</h3>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="skill-card glass-card"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="skill-icon" style={{ color: skill.color }}>
                                {skill.icon}
                            </div>
                            <h4>{skill.name}</h4>
                        </div>
                    ))}
                </div>

                <h3 className="skills-subtitle">Proficiency Levels</h3>
                <div className="proficiency-list">
                    {proficiency.map((item, index) => (
                        <div key={index} className="proficiency-item">
                            <div className="proficiency-label">
                                <span>{item.name}</span>
                                <span>{item.percent}%</span>
                            </div>
                            <div className="proficiency-bar">
                                <div
                                    className="proficiency-fill"
                                    style={{ width: `${item.percent}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
