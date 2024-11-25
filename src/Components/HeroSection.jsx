import React from 'react';
import './HeroSection.css';

const HeroSection = ({ title, subtitle, backgroundImage }) => {
    return (

        <div className="hero-background  text-center py-5" style={{ backgroundImage: `url(${backgroundImage})` }}>

            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
};

export default HeroSection;
