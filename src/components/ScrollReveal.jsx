import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './ScrollReveal.css';

/**
 * Wraps content and animates it into view on scroll (like zuhaibbutt.vercel.app).
 * @param {React.ReactNode} children
 * @param {string} className - Optional extra class
 * @param {number} delay - Optional delay in ms for staggered effect
 * @param {string} as - HTML tag to render (default 'div')
 */
const ScrollReveal = ({ children, className = '', delay = 0, as: Tag = 'div' }) => {
    const [ref, inView] = useScrollReveal();

    return (
        <Tag
            ref={ref}
            className={`scroll-reveal ${inView ? 'scroll-reveal-in-view' : ''} ${className}`.trim()}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
        >
            {children}
        </Tag>
    );
};

export default ScrollReveal;
