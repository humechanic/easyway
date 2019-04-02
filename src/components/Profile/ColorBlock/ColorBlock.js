import React, { Component } from 'react';
import './ColorBlock.css';

class ColorBlock extends Component{
    constructor(props) {
        super(props);
        this.setState = {
            MoneyAmount: '16152 руб.',
            RatingAmount: '256'
        }
    }
    render () {
        return (
            <div className={[this.props.type] + " ColorBlock"}>
                <p>{this.props.title}</p>
                <h2>{this.props.MoneyAmount}</h2>
                <h2>{this.props.RatingAmount}</h2>
            </div>
        )
    }
}

export default ColorBlock;