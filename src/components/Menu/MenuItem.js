import React from 'react';
import './MenuItem.css'
import {Link} from 'react-router-dom';

const MenuItem = (props) => {
    return (
              <li className={[props.type]+ " MenuItem"}>

              <Link to={props.path}>{props.title}</Link>

              </li>
    )
};

export default MenuItem;