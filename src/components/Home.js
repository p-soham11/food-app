import React, { Component } from 'react';
import TopContainer from './TopContainer/TopContainer';
import QS from './QS/QS'


class Home extends Component {
    render() { 
        return (  
            <div>
                <TopContainer />
                <QS />
            </div>
        );
    }
}
 
export default Home;