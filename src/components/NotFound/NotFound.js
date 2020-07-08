import React, { Component } from 'react';
import './notFound.css';
import Header from '../Header/Header';

class NotFound extends Component {
    render() { 
        return (  
            <div> 
                <Header />     
                <img className="nf" src='https://image.freepik.com/free-vector/glitch-error-404-page-background_23-2148072533.jpg' />
            </div>
        );
    }
}
 
export default NotFound;