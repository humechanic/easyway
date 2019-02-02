import React from 'react';
import './MenuItem.css'

const MenuItem = (props) => {
    return(
        <li className={[props.type]+ " MenuItem"}>
            <a href={"#"}>{props.title}</a>
        </li>
    )
};

export default MenuItem;