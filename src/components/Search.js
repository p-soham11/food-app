import React, { Component } from 'react';
import Title from './SearchTitle/Title';
import SearchBody from './SearchBody/SearchBody';
import queryString from 'query-string';
import {withRouter} from 'react-router-dom';

class Search extends Component {
    constructor() {
        super();
        this.state={
            loc:'all over India',
            flagCuisine : 'test',
            flagCount:1
        }
    }

    onLocationChange = (event) => {
        var query = this.props.location.search;
        var queryObject = queryString.parse(query);
        this.props.history.push(`/search?city=${event.target.value}&cuisine=${queryObject.cuisine}&cft=${queryObject.cft}`);
        this.setState({ loc: event.target.value});
    }

    onCuisineChange = (event) => {
        var query = this.props.location.search;
        var queryObject = queryString.parse(query);
        if ((this.state.flagCuisine == event.target.value)&&(this.state.flagCount < 0))
        {
            this.props.history.push(`/search?city=${queryObject.city}&cuisine=${'undefined'}&cft=${queryObject.cft}`);
            this.setState({ flagCount: this.state.flagCount * (-1) });
        }   
        else
        {
            this.props.history.push(`/search?city=${queryObject.city}&cuisine=${event.target.value}&cft=${queryObject.cft}`);
            this.setState({ flagCount: this.state.flagCount *(-1) });
        }  
        this.setState({ flagCuisine: event.target.value });
    }

    onCFTchange = (event) => {
        var query = this.props.location.search;
        var queryObject = queryString.parse(query);
        this.props.history.push(`/search?city=${queryObject.city}&cuisine=${queryObject.cuisine}&cft=${event.target.value}`);
    }
    
    render() { 
        return (  
            <div>
                <div>{this.props.location.search}</div>
                <Title text={`Exclusive restaurants at ${this.state.loc} !!`}/>
                <SearchBody onLocationChange={this.onLocationChange} onCuisineChange={this.onCuisineChange} onCftChange={this.onCFTchange} queryString={this.props.location.search}/>
            </div>
        );
    }
}
 
export default withRouter(Search);