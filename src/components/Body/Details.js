import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './details.css';

class Details extends Component {
    render() { 
        return (  
            <Tabs>
                <TabList>
                    <Tab>
                        <div className="modes selected">
                            Overview
                        </div>
                    </Tab>
                    <Tab>
                        <div className="modes">
                            Contact
                        </div>
                    </Tab>
                </TabList>

                <TabPanel>
                    <div className="details">
                        <div className="about">
                            About this place
                        </div>
                        <div className="cntHead">
                            Cuisine
                        </div>
                        <div className="cntSubHead">
                            Bakery, Fast-food
                        </div>
                        <div className="cntHead">
                            Average Cost
                        </div>
                        <div className="cntSubHead">
                            ‎₹700 for two people (approx.)
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>Phone : 12345</div>
                </TabPanel>
            </Tabs>
        );
    }
}
 
export default Details;



