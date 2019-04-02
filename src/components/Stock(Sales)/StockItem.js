import React from 'react';
import './StockItem.css';

const StockItem = (props) => {
    return (
         <>
                <h2 className={[props.type]}>{props.title}</h2>
                <span className={[props.type]}>{props.waveLength}</span>
                <p>{props.info}</p>
         </>
    )
};

export default StockItem;