import React from 'react';
import "./CharityItem.css";

const CharityItem = (props) => {
    return(
        <div className={"CharityItem"}>
            <h3 className={[props.type]}>{props.moneyAmount}<p className={[props.type]}>руб.</p></h3>
            <img src={[props.logo]} alt={'logo'}/>
        </div>
    )

};

export default CharityItem;
