import React, {Component} from 'react'
import CatalogueProductItem from "./CatalogueProductItem/CatalogueProductItem";
import './AllProducts.css'
import CatalogueFilter from "../CatalogueFilterbar/CatalogueFilters";
import ProductAmount from "./CatalogueProductAmount/ProductAmount";


class AllProducts extends Component {
    state = {
        displayBlock: false,
        sorted: {price: false, sale: false, mostBought: false},
    };

    showAsBlock = (showAsBlock) => {
        this.setState({
            displayBlock: showAsBlock,
        });
    };


    render() {
        return (
            <div className={'ProductContainer'}>
                <ProductAmount products={this.props.products}/>
                <CatalogueFilter showAsBlock={this.showAsBlock}
                />
                <div className={'Products'}>
                {
                    this.props.products.map((Products, index) => {
                        return (

                            <CatalogueProductItem
                                displayBlock={this.state.displayBlock}
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
    }
}

export default AllProducts;