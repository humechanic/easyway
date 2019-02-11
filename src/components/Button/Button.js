import React from 'react';
import classes from './Button.module.css'

const Button = (props) => {
    const cls = [
        classes.Button,
        classes[props.buttonType],
        classes[props.titleStyle]
    ];
    return (
        <button
            className={cls.join(' ')}
        >{props.children}</button>
        )
};

export default Button;

