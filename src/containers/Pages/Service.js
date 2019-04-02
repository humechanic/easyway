import React from 'react';
import Layout from "../Layout/Layout";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumb';
import CurvyTitle from "../../components/CurvyWavePageDecor/CurvyTitle";
import SearchBar from "../../components/search-bar/SearchBar";

const Service = () => {
    return (
        <Layout>
            <Header/>
            <Breadcrumbs/>
            <CurvyTitle
                title={'Услуги'}
                buttonType={"noBorder"} //yellow, blue, noBorder
                titleStyle={"fontSize"} //textBlack (white = default), fontSize (font-size: 40px)
            />
            <SearchBar/>
            <Footer/>
        </Layout>
    )

};

export default Service;
