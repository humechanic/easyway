import React from 'react';
import './StockItem.css'


const StockItem = (props) => {
    return (
        <a href={"#"} className={[props.background] + " StockItem"}>

            <h2 className={[props.type]}>{props.title}</h2>
            <span className={[props.type]}>{props.waveLength}</span>
            <p>{props.info}</p>

        </a>
    )
};

export default StockItem;