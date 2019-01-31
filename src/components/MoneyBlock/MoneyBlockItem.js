import React from 'react';
import './MoneyBlockItem.css'

const MoneyBlockItem = (props) => {
    return(
        <div className={[props.style] + " moneyBlockItem"}>
                <p>{props.title}</p>
            <h2>{props.amount} <span>руб.</span></h2>
        </div>
    )
};

export default MoneyBlockItem;