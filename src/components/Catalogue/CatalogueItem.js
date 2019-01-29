import React from 'react';
import classes from './CatalogueItem.module.css'

const CatalogueItem = (props) => {
    const item = [
        classes.CatalogueItem,
        classes[props.type]
    ]
    return (
        <div className={item.join(' ')}>
            <a href={props.type}>{props.children}</a>
        </div>

    )
};

export default CatalogueItem;