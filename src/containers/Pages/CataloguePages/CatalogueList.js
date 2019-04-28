import React from 'react';
import { CatalogueTitles }  from '../../../components/Catalogue/CatalogueList/CatalogueFullListOfNames';
import CurvyTitle from "../../../components/CurvyWavePageDecor/CurvyTitle";
import SearchBar from "../../../components/search-bar/SearchBar";
import Breadcrumbs from './../../../components/Breadcrumbs/Breadcrumb';

const CatalogueList = () => {

    return (
        <>
            <Breadcrumbs/>
            <CurvyTitle
                title={'Каталог товаров:'}
                buttonType={"noBorder"} //yellow, blue, noBorder
                titleStyle={"catalogue"} //textBlack (white = default), fontSize (font-size: 40px)
            />
            <SearchBar CataloguePage={true}/>
            <CatalogueTitles/>
        </>
    )
};

export default CatalogueList;