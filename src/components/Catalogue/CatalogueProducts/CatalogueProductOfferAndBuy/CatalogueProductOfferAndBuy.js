import React from 'react';
import {Link} from 'react-router-dom';
import Button from "../../../Button/Button";


const CatalogueProductOfferAndBuy = (props) => {
  return (
      <div className={'OffersAndBuy'}>
          <Link className={'Offers'} to={'#'}>{props.offers} предложений</Link>
          <Button
              buttonType={'blue'}
              titleStyle={'textBlack'}
          >Купить</Button>
      </div>
  )
};

export default CatalogueProductOfferAndBuy;