import React from 'react';

const CataloguePruductItemImage = (props) => {
  return (
      <div className={'itemImage'}>
          <img src={[props.itemImg]} alt={'item'}/>
      </div>
  )
};

export default CataloguePruductItemImage;