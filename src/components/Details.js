import React, { Component } from 'react';
import Header from './Header/Header';
import Body from './Body/Body'


class Details extends Component {
    render() { 
        return ( 
            <div>
                <Header />
                <Body />
            </div> 
        );
    }
}
 
export default Details;