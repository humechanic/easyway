import React from 'react';
import ProductCarousel from "../../../components/Catalogue/ProductPageCarousel/ProductCarousel";
import {withRouter, Route} from 'react-router-dom';
import CatalogueProductItem from "../../../components/Catalogue/CatalogueProducts/CatalogueProductItem/CatalogueProductItem";
import CatalogueProductName from "../../../components/Catalogue/CatalogueProducts/CatalogueProductName/CatalogueProductName";

const ProductPage = (props) => {
    debugger;
      return (
          <>
              <CatalogueProductName
                  productName={props.productName}
              />
              <ProductCarousel/>
          </>
      )
  };

export default ProductPage;