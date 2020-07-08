import React, { Component } from 'react';
import './filter.css'

class Filter extends Component {
    render() { 
        return (  
            <div className="srchFilter">
                    <div className="filter lftMargin">Filter</div>
                    <div className="srchLoc lftMargin">Select Location</div>
                    <select onChange={this.props.onLocationChange} className="selectLoc lftMargin">
                        <option>Chennai</option>
                        <option>Delhi</option>
                        <option>Kanpur</option>
                        <option>Kolkata</option>
                        <option>Mumbai</option>
                    </select>
                    <div className="cuisine lftMargin">Cuisine</div>
                    <div className="block lftMargin">
                        <input onChange={this.props.onCuisineChange} value="North Indian" type="checkbox" className="inline-block chkbox" />
                        <label className="inline-block ckeckbox-option">North Indian</label>
                    </div>
                    <div className="block lftMargin">
                        <input onChange={this.props.onCuisineChange} value="South Indian" type="checkbox" className="inline-block chkbox" />
                        <label className="inline-block ckeckbox-option">South Indian</label>
                    </div>
                    <div className="block lftMargin">
                        <input onChange={this.props.onCuisineChange} value="Chinese" type="checkbox" className="inline-block chkbox" />
                        <label className="inline-block ckeckbox-option">Chinese</label>
                    </div>
                    <div className="block lftMargin">
                        <input onChange={this.props.onCuisineChange} value="Fast Food" type="checkbox" className="inline-block chkbox" />
                        <label className="inline-block ckeckbox-option">Fast Food</label>
                    </div>
                    <div className="block lftMargin">
                        <input onChange={this.props.onCuisineChange} value="Street Food" type="checkbox" className="inline-block chkbox" />
                        <label className="inline-block ckeckbox-option">Street Food</label>
                    </div>
                    <div className="cf2 lftMargin">Cost for Two</div>
                    <div className="block lftMargin">
                        <input name='cft' type="radio" className="inline-block rdio" />
                        <label className="inline-block ckeckbox-option">Less than ₹500</label>
                    </div>
                    <div className="block lftMargin">
                        <input name='cft' type="radio" className="inline-block rdio" />
                        <label className="inline-block ckeckbox-option">₹500 to ₹1000</label>
                    </div>
                    <div className="block lftMargin">
                        <input name='cft' type="radio" className="inline-block rdio" />
                        <label className="inline-block ckeckbox-option">₹1000 to ₹1500</label>
                    </div>
                    <div className="block lftMargin">
                        <input name='cft' type="radio" className="inline-block rdio" />
                        <label className="inline-block ckeckbox-option">₹1500 to ₹2000</label>
                    </div>
                    <div className="block lftMargin">
                        <input name='cft' type="radio" className="inline-block rdio" />
                        <label className="inline-block ckeckbox-option">₹2000 and more</label>
                    </div>
                    <div className="sort lftMargin">Sort</div>
                    <div className="block lftMargin">
                        <input name='sort' type="radio" className="inline-block rdio" />
                        <label className="inline-block ckeckbox-option">Price low to high</label>
                    </div>
                    <div className="block lftMargin">
                        <input name='sort' type="radio" className="inline-block rdio" />
                        <label className="inline-block ckeckbox-option">Price high to low</label>
                    </div>
                </div>
        );
    }
}
 
export default Filter;