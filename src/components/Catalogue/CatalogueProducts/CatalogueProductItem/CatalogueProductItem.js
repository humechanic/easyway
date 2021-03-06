import React from 'react';
import './CatalogueProductItem.css';
import CatalogueProductItemImage from "./../CatalogueProductItemImage/CatalogueProductItemImage";
import CatalogueProductDescription from "./../CatalogueProductDescription/CatalogueProductDescription";
import CatalogueProductName from "./../CatalogueProductName/CatalogueProductName";
import CatalogueProductOfferAndBuy from "../CatalogueProductOfferAndBuy/CatalogueProductOfferAndBuy";
import {withRouter} from 'react-router-dom'



const CatalogueProductItem = (props) => {
    const displayBlock = props.displayBlock;
    if (displayBlock) {
        return (
            <div className={'displayBlock'}>
                <CatalogueProductItemImage
                    ProductPage={props.ProductPage}
                    itemImg={props.itemImg}/>
                <div className={'displayBlockDetails'}>
                    {
                        props.productName ?
                            <CatalogueProductName
                                path={props.path}
                                productName={props.productName}
                                url={props.match.url}
                            />
                            : null
                    }
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
    }
    return (
        <div className={'CatalogueProductItem'}>
            <CatalogueProductItemImage
                ProductPage={props.ProductPage}
                itemImg={props.itemImg}/>
            <div className={'ProductDetails'}>
                {
                    props.productName ?
                    <CatalogueProductName
                        path={props.path}
                        productName={props.productName}
                        url={props.match.url}
                    />
                        : null
                }
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

