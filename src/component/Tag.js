import React from 'react';
import './Tag.css';

const Tag = ({ label }) => {
    return (
        <span className="tag">{label}</span>
    );
};

export default Tag;
