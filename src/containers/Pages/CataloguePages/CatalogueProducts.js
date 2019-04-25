import React from 'react';
import CategoryList from "../../../components/Catalogue/Categories/CategoryList";
import AllProducts from '../../../components/Catalogue/CatalogueProducts/AllProducts';
import SearchBar from "../../../components/search-bar/SearchBar";
import Breadcrumbs from './../../../components/Breadcrumbs/Breadcrumb';
import { Route, withRouter } from 'react-router-dom';


const CatalogueProducts = (props) => {
    return (
      <>
          <Breadcrumbs/>
          <SearchBar/>
          <CategoryList products={props.products}/>
          <AllProducts  products={props.products}/>
      </>
  )
};

export default CatalogueProducts;