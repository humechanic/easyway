import React from 'react';
import Rating from "../../../Rating/Rating";

const CatalogueProductDescription = (props) => {
    return (
        <>
            <div className={'ProductDescriPosition'}>
                <span className={'ProductDesc'}>{props.productDesc}</span>
                <span className={'ProductDesc'}>
                    от&nbsp;<span className={'ProductPrice'}>{props.productPrice.toFixed(2)}</span>&nbsp;руб.</span>
                <Rating/>
            </div>
        </>

    )
};

export default CatalogueProductDescription;