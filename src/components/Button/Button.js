import React from 'react';
import classes from './Button.module.css';
import { Link } from 'react-router-dom';

const Button = (props) => {
    const cls = [
        classes.Button,
        classes[props.buttonType],
        classes[props.titleStyle],
    ];
    return (
    <Link className={classes[props.position]} to={`${props.to}`}>
        <button
            className={cls.join(' ')}
        >{props.children}</button>
    </Link>
        )

};

export default Button;

