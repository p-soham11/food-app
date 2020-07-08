import React, { Component } from 'react';
import QSTop from './QSTop';
import QSTile from './QSTile';
import "./qs.css";
const axios = require("axios");

class QS extends Component {
  constructor() {
    super();
    this.state = {
      tiles: [],
    };
  }

  converToJson = (response) => {
    return response.json();
  };

  printResponse = (data) => {
    this.setState({
      tiles: data,
    });
  };

  componentWillMount() {
    fetch("https://demo4989913.mockable.io/options")
      .then(this.converToJson)
      .then(this.printResponse);
  }

  printTile = (tile) => {
    return <QSTile head={tile.head} subHead={tile.subHead} src={tile.src} />;
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="qs">
          <QSTop />
          {this.state.tiles.map(this.printTile)}
        </div>
      </div>
    );
  }
}

export default QS;


