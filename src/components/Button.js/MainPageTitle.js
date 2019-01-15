import React from 'react';
import classes from './MainPageTitle.module.css'

const MainPageTitle = (props) => {
    return (
        <h1 className={classes.Title}>{props.HeaderTitle}</h1>
        )
};

export default MainPageTitle;

