import React from 'react';
import './CatalogueFilters.css';



const CatalogueFilter = (props) => {
    return (
        <div className={'filterBar'}>
            <div className={'filterButtons'}>
            <button onClick={() => props.showAsBlock(true)}><i className="fas fa-th"> </i></button>
            <button onClick={() => props.showAsBlock(false)}><i className="fas fa-th-list"> </i></button>
            </div>
            <ul>
                <li>По цене</li>
                <li>Акции</li>
                <li>Новинки</li>
                <li>Хиты продаж</li>
            </ul>
        </div>
    )

};

export default CatalogueFilter;
