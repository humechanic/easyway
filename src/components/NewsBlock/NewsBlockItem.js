import React from 'react';
import './NewsBlockItem.css'

const NewsBlockItem = (props) => {
    return (
        <div className={[props.background] + " NewsBlockItem"}>
            <a href={"#"}>
                <p>{props.title}</p>
            </a>
        </div>

    )
};

export default NewsBlockItem;
