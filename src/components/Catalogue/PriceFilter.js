import React from 'react';
import './PriceFilter.css';

const PriceFilter = ({values}) => {
    return (
        <div className={'inputs'}>
        <span>от</span>
            <input type="text" placeholder="10" value={values.slice(0, 1).map(minPrice => (minPrice))}/>
        <span>до</span>
            <input type="text" placeholder="200" value={values.slice(1, 2).map(maxPrice => (maxPrice))}/>
        </div>
    )
};

export default PriceFilter;