import React from 'react';
import MoneyBlockItem from './MoneyBlockItem';
import './MoneyBlock.css';
import {connect} from 'react-redux'

const MoneyBlock = (props) => {

    return (
        <div className={"MoneyBlockList"}>
            {
                props.moneyBlockList.map((MoneyBlockList, index) => {
                    return <MoneyBlockItem
                        key={index + [MoneyBlockList.title]}
                        style={MoneyBlockList.style}
                        amount={MoneyBlockList.amount}
                        title={MoneyBlockList.title}
                    />
                })
            }
        </div>
    )
};

function mapStateToProps(state) {
    return {
        moneyBlockList: state.homePage.MoneyBlockList,
    }
}

export default connect(mapStateToProps)(MoneyBlock);
