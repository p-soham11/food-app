import React, { Component } from 'react';
import './qsTile.css'

class QSTile extends Component {
    render() {
        return (
            <div className="qsTile">
                <div className="qsTileImg">
                    <img src={this.props.src} width={160} height={160} />
                </div>
                <div className="qsTileText">
                    <div className="qsTileHead">
                        {this.props.head}
                    </div>
                    <div className="qsTileSubHead">
                        {this.props.subHead}
                    </div>
                </div>
            </div>
        );
    }
}

export default QSTile;


