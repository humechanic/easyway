import React from 'react';

const CatalogueProductItemImage = (props) => {
    const ProductPage = props.ProductPage;
    if (ProductPage) {
        return (
            null
        )
    }
  return (
      <div className={'itemImage'}>
          <img src={[props.itemImg]} alt={null}/>
      </div>
  )
};

export default CatalogueProductItemImage;