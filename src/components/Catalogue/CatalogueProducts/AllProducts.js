import React from 'react'
import CatalogueProductItem from "./CatalogueProductItem/CatalogueProductItem";
import './AllProducts.css'
import { Route, Switch } from 'react-router-dom'
import CatalogueFilter from "../CatalogueFilterbar/CatalogueFilters";
import ProductAmount from "./CatalogueProductAmount/ProductAmount";
import ProductPage from "../../../containers/Pages/CataloguePages/ProductPage";

const AllProducts = (props) => {
    return (
        <div className={'Products'}>
            <ProductAmount products={props.products}/>
            <CatalogueFilter/>
            {
                props.products.map((Products, index) => {
                    return (

                        <CatalogueProductItem
                            key={{index} + `${Products.id}`}
                            itemImg={Products.itemImg}
                            productName={Products.productName}
                            productDesc={Products.productDesc}
                            productPrice={Products.productPrice}
                            offers={Products.offers}
                            path={Products.path}
                        />
                    )
                })
            }
        </div>
    )
};

export default AllProducts;