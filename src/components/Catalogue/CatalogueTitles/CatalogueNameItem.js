import React from 'react';
import './CatalogueNameItem.css';
import {Link} from 'react-router-dom';

const CatalogueNameItem = (props) => {

    return (
        <div className={[props.type] + " CatalogueNameItem"}>
            <Link to={`${props.type}`}>{props.children}</Link>
        </div>

    )
};

export default CatalogueNameItem;