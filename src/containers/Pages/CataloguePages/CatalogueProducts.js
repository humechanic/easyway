import React from 'react';
import CategoryList from "../../../components/Catalogue/Categories/CategoryList";
import AllProducts from '../../../components/Catalogue/CatalogueProducts/AllProducts';
import SearchBar from "../../../components/search-bar/SearchBar";
import Breadcrumbs from './../../../components/Breadcrumbs/Breadcrumb';

const CatalogueProducts = () => {
    return (
      <>
          <Breadcrumbs/>
          <SearchBar/>
          <CategoryList/>
          <AllProducts/>
      </>
  )
};

export default CatalogueProducts;