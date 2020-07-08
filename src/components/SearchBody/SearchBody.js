import React, { Component } from 'react';
import Filter from '../Filter/Filter';
import SearchRes from './SearchRes';


class SearchBody extends Component {
    render() { 
        return (  
            <div className="row">
                
                <div className="col-sm-3 col-md-3 col-lg-3">
                    <Filter onLocationChange={this.props.onLocationChange} onCuisineChange={this.props.onCuisineChange}/>
                </div>
                <div className="col-sm-9 col-md-9 col-lg-9">
                    <div>{this.props.queryString}</div>
                    <SearchRes city={this.props.city}/>
                </div>
            </div>
        );
    }
}
 
export default SearchBody;