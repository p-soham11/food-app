import React from 'react';
import Select from './Select';
import Search from './Search';
import './location.css';

function Location() {
    return (
        <div className="flex-column flex-md-row justify-content-between">
            <div className="locationSelector">
                <Select />
                <Search />
            </div>
        </div>
    );
}

export default Location;