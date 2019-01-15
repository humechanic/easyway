import React from 'react';
import classes from './MenuItem.module.css'

const MenuItem = (props) => {
    return(
        <li className={classes.MenuItem}><a href="#">{props.title}</a></li>
    )
};

export default MenuItem;