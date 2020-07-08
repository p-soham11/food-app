import React, { Component } from 'react';
import './header.css'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="logo">
                    <span className="e">e!</span>
                </div>
                <div className="right">
                    <div className="login">
                        Login
                    </div>
                    <div className="signup">
                        Create an account
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;