import React from 'react';
import ProductCarousel from "../../../components/Catalogue/ProductPageCarousel/ProductCarousel";
import { withRouter } from 'react-router-dom';
import CatalogueProductItem from "../../../components/Catalogue/CatalogueProducts/CatalogueProductItem/CatalogueProductItem";
import CatalogueProductName from "../../../components/Catalogue/CatalogueProducts/CatalogueProductName/CatalogueProductName";
import './ProductPage.css';
import CatalogueProductDetails
    from "../../../components/Catalogue/CatalogueProducts/CatalogueProductDetails/CatalogueProductDetails";
import {connect} from 'react-redux';

const ProductPage = (props) => {

    const SingleProductPage = props.singleProduct.getProduct(props.match.params.itemDetails);

    if (!SingleProductPage) {
        return (
            <div>Item haven't added yet</div>
        )
    }
      return (
          <div className={'ProductDetailInformation'}>
              <div className={'Column'}>
                  <CatalogueProductName
                      productName={SingleProductPage.productName}
                      url={'#'}
                  />
                  <ProductCarousel/>
              </div>
              <div className={'Column'}>
                  <CatalogueProductItem
                      key={SingleProductPage.id}
                      ProductPage={true}
                      productName={null}
                      productDesc={SingleProductPage.productDesc}
                      productPrice={SingleProductPage.productPrice}
                      offers={SingleProductPage.offers}
                      path={SingleProductPage.path}
                  />
                  <CatalogueProductDetails
                      design={SingleProductPage.design}
                      construction={SingleProductPage.construction}
                      freezingSystem={SingleProductPage.freezingSystem}
                      color={SingleProductPage.color}
                      processorAmount={SingleProductPage.processorAmount}
                      shelfAmount={SingleProductPage.shelfAmount}
                      iceBoxAmount={SingleProductPage.iceBoxAmount}
                      usefulVolume={SingleProductPage.usefulVolume}
                      control={SingleProductPage.control}
                      effectiveClass={SingleProductPage.effectiveClass}
                      noiseLevel={SingleProductPage.noiseLevel}
                  />
              </div>
          </div>
      )
  };

function mapStateToProps(state) {
    return {
        singleProduct: state.cataloguePage,
    }
}

export default connect(mapStateToProps)(withRouter(ProductPage));