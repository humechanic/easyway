import React from 'react';
import './CatalogueFilters.css';

const CatalogueFilter = () => {
    return (
        <div className={'filterBar'}>
            <div className={'filterButtons'}>
            <button><i className="fas fa-th"> </i></button>
            <button><i className="fas fa-th-list"> </i></button>
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
