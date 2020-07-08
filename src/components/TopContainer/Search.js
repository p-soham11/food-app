import React, { Component } from 'react';
import './location.css';

class Select extends Component {
    render() {
        return (
            <input type="text" className='searchBar' placeholder="Search for your Dish or Restaurants :)"></input>
        );
    }
}

export default Select;