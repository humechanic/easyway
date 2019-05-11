import React from 'react';
import CatalogueProductItem from "./CatalogueProductItem/CatalogueProductItem";
import './AllProducts.css';
import CatalogueFilter from "../CatalogueFilterbar/CatalogueFilters";
import ProductAmount from "./CatalogueProductAmount/ProductAmount";
import {connect} from 'react-redux';
import {displayBlockAC, displayListAC} from './../../../redux/reducers/cataloguePageReducer';

const AllProducts = (props) => {
    return (
        <div className={'ProductContainer'}>
            <ProductAmount products={props.products}/>
            <CatalogueFilter
                showAsBlock={props.displayAsBlock}
                showAsList={props.displayAsList}
            />
            <div className={'Products'}>
                {
                    props.products.map((Products, index) => {
                        return (
                            <CatalogueProductItem
                                displayBlock={props.displayBlock}
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
        </div>
    )
};

function mapStateToProps(state) {
    return {
        products: state.cataloguePage.allProducts(),
        displayBlock: state.cataloguePage.ProductsPageState.displayBlock
    }
}

function mapDispatchToProps(dispatch) {
    return {
        displayAsBlock: () => {
            dispatch(displayBlockAC());
        },
        displayAsList: () => {
            dispatch(displayListAC());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);