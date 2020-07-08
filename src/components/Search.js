import React, { Component } from 'react';
import Header from './Header/Header';
import Title from './SearchTitle/Title';
import SearchBody from './SearchBody/SearchBody';

class Search extends Component {
    constructor() {
        super();
        this.state={
            loc:'all over India'
        }
    }

    onLocationChange = (event) => {
        this.setState({ loc: event.target.value});
        console.log(this.state.loc);
        alert('Location : '+ event.target.value);
    }

    onCuisineChange = (event) => {
        alert('Cuisine: ' + event.target.value);
    }
    
    render() { 
        return (  
            <div>
                <div>{this.props.location.search}</div>
                <Header />
                <Title text={`Exclusive restaurants at ${this.state.loc} !!`}/>
                <SearchBody onLocationChange={this.onLocationChange} onCuisineChange={this.onCuisineChange} queryString={this.props.location.search}/>
            </div>
        );
    }
}
 
export default Search;