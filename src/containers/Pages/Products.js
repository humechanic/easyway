import React from 'react';
import Layout from "../Layout/Layout";
import Content from "../content/Content";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SearchBar from "../../components/search-bar/SearchBar";
import Breadcrumbs from './../../components/Breadcrumbs/Breadcrumb';
import ProductPage from "./CataloguePages/ProductPage";


const Products = () => {
    return  (
        <Layout>
            <Content>
                <Header/>
                <Breadcrumbs/>
                <SearchBar/>
                <ProductPage/>
                <Footer/>
            </Content>
        </Layout>
    )
};

export default Products;