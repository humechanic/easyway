import React from 'react';
import CategoryList from "../../../components/Catalogue/Categories/CategoryList";
import AllProducts from '../../../components/Catalogue/CatalogueProducts/AllProducts';
import SearchBar from "../../../components/search-bar/SearchBar";
import Breadcrumbs from './../../../components/Breadcrumbs/Breadcrumb';
import { Route } from 'react-router-dom';

const CatalogueProducts = () => {
  return (
      <>
          <Breadcrumbs/>
          <SearchBar/>
          <CategoryList/>
          <Route path={'/catalogue/:catalogueItem'} component={AllProducts}/>
      </>
  )
};

export default CatalogueProducts;