import React, { useState, useEffect } from 'react';
import BrButton from '../BrButton';

const GoToTop: React.FC = () => {
    const [visible, setVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Toggle visibility after scrolling 300px
    const handleScroll = () => {
        if (window.pageYOffset > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Cleanup listener on unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const containerStyle: React.CSSProperties = {
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        zIndex: 1000,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
        pointerEvents: visible ? 'auto' : 'none', // Prevent clicks when not visible
    };

    return (
        <div style={containerStyle}>
            <BrButton onClick={scrollToTop} type="button" icon="chevron-up" primary circle />
        </div>
    );
};

export default GoToTop;
