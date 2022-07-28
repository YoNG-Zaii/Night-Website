import React, { memo } from 'react';
import './Dots.css';

const Dot = ({ active }) => {
    return (
        <div className={active ? "activeDot" : "nonActiveDot"} />
    );
}

const MemoDot = memo(Dot);

const Dots = ({ slides, current }) => {
    return (
        <div className="dots">
            {slides.map((pic, index) => (
                <MemoDot key={pic} active={current === index} />
            ))}
        </div>
    );
}

export default Dots;