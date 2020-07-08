import React, { Component } from 'react';
import './srcres.css'

class PrintRes extends Component {
    render() { 
        return (  
            <div className="srchTile">
                <div className="row height">
                    <div className="col-sm-3">
                        <img className="tile-img" src={this.props.image} alt="Image not found" />
                    </div>
                    <div className="col-sm-9">
                        <div className="tile-head">{this.props.name}</div>
                        <div className="tile-loc">{this.props.city}</div>
                        <div className="tile-add">{this.props.address}</div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="tile-sub">
                        <div>CUISINES:</div>
                        <div>COST FOR TWO:</div>
                    </div>
                    <div className="tile-sub-res">
                        <div>{this.props.cuisines}</div>
                        <div>{this.props.cft}</div>
                    </div>
                </div>
            </div> 
        );
    }
}
 
export default PrintRes;