import React, { Component } from 'react';
import PrintRes from './PrintRes';

class SearchRes extends Component {
    constructor() {
        super();
        this.state = {
            ResTiles: []
        }
    }
    
    converToJson = (response) => {
        return response.json();
    }

    // cityFilter = (rest) =>{
    //     return rest.city == this.props.city
    // }

    printResponse = (data) => {
        //var arrfilter = data.filter(this.cityFilter);
        
        this.setState({
            ResTiles: data
        })
    }

    componentWillMount() {
        fetch('https://demo4989913.mockable.io/restList').then(this.converToJson).then(this.printResponse);
    }

    printTile = (tile) => {
        return <PrintRes name={tile.restName} city={tile.city} address={tile.address} cuisines={tile.cuisines} cft={tile.costForTwo} image={tile.image} />
    }

    render() {
        return (
            <div>{this.state.ResTiles.map(this.printTile)}</div>
        );
    }
}

export default SearchRes;