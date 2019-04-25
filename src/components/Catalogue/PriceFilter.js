import React from 'react';
import './PriceFilter.css';


const PriceFilter = (props) => {
    const minPrice = props.values.slice(0, 1).map(minPrice => (minPrice));
    const maxPrice = props.values.slice(1, 2).map(maxPrice => (maxPrice));

    return (

        <div className={'inputs'}>
        <span>от</span>
            <input type="text" placeholder="10"  value={minPrice}/>
        <span>до</span>
            <input type="text" placeholder="200" value={maxPrice}/>
        </div>
    )
};

export default PriceFilter;