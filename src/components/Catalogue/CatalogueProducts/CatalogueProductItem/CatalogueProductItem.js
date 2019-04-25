import React from 'react';
import './CatalogueProductItem.css';
import CatalogueProductItemImage from "./../CatalogueProductItemImage/CatalogueProductItemImage";
import CatalogueProductDescription from "./../CatalogueProductDescription/CatalogueProductDescription";
import CatalogueProductName from "./../CatalogueProductName/CatalogueProductName";
import CatalogueProductOfferAndBuy from "../CatalogueProductOfferAndBuy/CatalogueProductOfferAndBuy";
import {withRouter, Route} from 'react-router-dom'
import ProductPage from "../../../../containers/Pages/CataloguePages/ProductPage";


const CatalogueProductItem = (props) => {
    return (
        <div className={'CatalogueProductItem'}>
            <CatalogueProductItemImage itemImg={props.itemImg}/>
            <div className={'ProductDetails'}>
                <CatalogueProductName
                    path={props.path}
                    productName={props.productName}
                    url={props.match.url}
                />
                <CatalogueProductDescription
                    path={props.path}
                    productDesc={props.productDesc}
                    productPrice={props.productPrice}
                />
            </div>
                <CatalogueProductOfferAndBuy
                    offers={props.offers}
                />
        </div>
    )
};
export default withRouter(CatalogueProductItem);

