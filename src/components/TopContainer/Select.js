import React, { Component } from 'react';
import './location.css';

class Select extends Component {
    render() { 
        return ( 
            <select className='locationDropdown'>
                <option value="saltlake">Salt Lake, Kolkata</option>
                <option value="dumdum">Dum Dum, Kolkata</option>
                <option value="esplanade" selected>Esplanade, Kolkata</option>
                <option value="bidyanagar">Bidyanagar Rd, Kolkata</option>
                <option value="behala">Behala, Kolkata</option>
            </select>
        );
    }
}
 
export default Select;