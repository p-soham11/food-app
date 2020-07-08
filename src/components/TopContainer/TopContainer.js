import React from 'react';
import Logo from './Logo';
import './topContainer.css';
import Headline from './Headline';
import Location from './Location';

function TopContainer() {
    return (
        <div className="top">
            <Logo />
            <Headline />
            <Location />
        </div>
    );
}

export default TopContainer;
