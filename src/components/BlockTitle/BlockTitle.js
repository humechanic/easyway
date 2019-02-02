import React from 'react';
import './BlockTitle.css'

const BlockTitle = (props) => {
    return (
        <div className={"BlockTitle"}>
            <h2>{props.title}
            <a href={[props.link]}>{props.linkName}</a>
            </h2>
        </div>

    )
};

export default BlockTitle;