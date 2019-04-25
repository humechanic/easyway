import React from 'react';
import './LocationFilter.css';

const LocationFilter = (props) => {
    return (
        <div className={'LocationFilter'}>
            <input type={'checkbox'}/>
            <span>{props.LocationName}</span>
        </div>
    )
};

export default LocationFilter