import React, {Component} from 'react';
import MoneyBlockItem from './MoneyBlockItem';
import './MoneyBlock.css';

class MoneyBlock extends Component{
    constructor(props) {
        super(props);
        this.state = {
            MoneyBlockList: [
                {
                    title: 'получено средств',
                    amount:'19900',
                    style:'blueBox',
                },
                {
                    title:'не распределено',
                    amount:'4002',
                    style:'redBox',
                },
                {
                    title:'пожертвовано',
                    amount:'15898',
                    style:'yellowBox',
                },
            ],

        }
    };
    render () {
        return ( <div className={"MoneyBlockList"}>

                {
                    this.state.MoneyBlockList.map((MoneyBlockList, index) => {
                        return <MoneyBlockItem
                            key={index}
                            style={MoneyBlockList.style}
                            amount={MoneyBlockList.amount}
                            title={MoneyBlockList.title}
                        />
                    })
                }

            </div>
        )
    }

}

export default MoneyBlock;
