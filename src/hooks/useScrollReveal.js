import { useEffect, useRef, useState } from 'react';

const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px',
};

/**
 * Hook to reveal element when it scrolls into view (like zuhaibbutt.vercel.app).
 * @param {Object} options - IntersectionObserver options
 * @returns {[React.RefObject, boolean]} [ref, inView]
 */
export function useScrollReveal(options = {}) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    const opts = { ...defaultOptions, ...options };

    const { threshold, rootMargin } = opts;

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setInView(true);
        }, { threshold, rootMargin });

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    return [ref, inView];
}
