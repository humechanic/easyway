import React from 'react';
import './TextBlock.css';


const TextBlock = (props) => {
    return (
        <div className={"TextBlock"}>
            {props.children}
        </div>
    )
};

export default TextBlock;