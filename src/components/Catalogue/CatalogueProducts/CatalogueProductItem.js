import React from 'react';
import './CatalogueProductItem.css';
import { Link } from 'react-router-dom'
import Button from "./../../Button/Button";
import Rating from "../../Rating/Rating";


const CatalogueProductItem = (props) => {
    return (
        <div className={'CatalogueProductItem'}>
            <div className={'itemImage'}>
            <img src={[props.itemImg]} alt={'item'}/>
            </div>
            <div className={'ProductDescriPosition'}>
                <Link to={props.path} className={'ProductName'}>{props.productName}</Link>
                <span className={'ProductDesc'}>{props.productDesc}</span>
                <span className={'ProductDesc'}>
                    от&nbsp;<span className={'ProductPrice'}>{props.productPrice}</span>&nbsp;руб.</span>
                <Rating/>
            </div>

            <div className={'OffersAndBuy'}>
                <Link className={'Offers'} to={'#'}>{props.offers} предложений</Link>
                <Button
                    buttonType={'blue'}
                    titleStyle={'textBlack'}
                >Купить</Button>
            </div>
        </div>
    )
};
export default CatalogueProductItem;

