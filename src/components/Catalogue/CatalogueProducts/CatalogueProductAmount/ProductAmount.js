import React from 'react';

const ProductAmount = (props) => {
    return (
        <h3 className={'productAmount'}>
            {props.products.length} товаров
        </h3>
    )
};

export default ProductAmount;