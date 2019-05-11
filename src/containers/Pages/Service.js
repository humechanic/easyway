import React from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumb';
import CurvyTitle from "../../components/CurvyWavePageDecor/CurvyTitle";
import SearchBar from "../../components/search-bar/SearchBar";
import ServiceList from "../../components/Services/ServiceList";
import ServiceCompanies from "../../components/Services/ServicesColumn/ServiceCompanies";
import BankMap from "../../components/Services/ServiceMaps/BankMap";
import Content from "../content/Content";

const Service = (props) => {
    return (
        <Content>
            <Header/>
            <Breadcrumbs/>
            <CurvyTitle
                title={'Услуги'}
                buttonType={"noBorder"} //yellow, blue, noBorder
                titleStyle={"fontSize"} //textBlack (white = default), fontSize (font-size: 40px)
            />
            <SearchBar/>
            <ServiceList/>
            <ServiceCompanies />
            <BankMap/>
            <Footer/>
        </Content>
    )

};

export default Service;
