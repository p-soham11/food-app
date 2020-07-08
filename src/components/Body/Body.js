import React from 'react';
import Img from './Img';
import Rhead from './Rhead';
import Details from './Details';
import './body.css';

function Body() {
    return (
        <div className="content">
            <Img />
            <Rhead />
            <Details />
        </div>
    );
}

export default Body;
