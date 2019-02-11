import React, { Component} from 'react';
import MapPointerStyle from './MapPointerStyle'

export default class MapPointer extends Component {
    render() {
        return (
            <div className={"MapPointer"} style={MapPointerStyle}>
                {this.props.text}
            </div>
        );
    }
}