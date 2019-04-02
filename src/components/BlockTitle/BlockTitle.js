import React from 'react';
import './BlockTitle.css';
import {Link} from 'react-router-dom';


const BlockTitle = (props) => {
    return (
        <div className={"BlockTitle"}>
            <h2>{props.title}
            <Link to={[props.link]}>{props.linkName}</Link>
            </h2>
        </div>

    )
};

export default BlockTitle;