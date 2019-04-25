import React from 'react';
import Layout from "../Layout/Layout";
import Content from "../content/Content";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Route, Switch} from 'react-router-dom';
import CatalogueList from './CataloguePages/CatalogueList';
import CatalogueProducts from "./CataloguePages/CatalogueProducts";
import ProductPage from "./CataloguePages/ProductPage";
import itemImage from './../../img/Catalogue/itemImage.png';

const Products = [
        {
            id: 1,
            path: '/atlantМХМ2826-90',
            productName: 'Холодильник ATLANT МХМ 2826-90',
            productDesc: 'без всяких там No Frost, механическое управление, класс A, полезный объём: 288 л (235 + 53 л), 60x63x167 см, белый',
            itemImg: itemImage,
            productPrice: '160,00',
            offers: '13'
        },
        {
            id: 2,
            path: '/atlantМХМ2226-90',
            productName: 'Холодильник ATLANT МХМ 2226-90',
            productDesc: 'без No Frost, механическое управление, класс A, полезный объём: 288 л (235 + 53 л), 60x63x167 см, белый',
            itemImg: itemImage,
            productPrice: '160,00',
            offers: '12'
        },
        {
            id: 3,
            path: '/boschmxm4446-90',
            productName: 'Холодильник BOSCH МХМ 4446-90',
            productDesc: 'заменить текст No Frost, механическое управление, класс A, полезный объём: 288 л (235 + 53 л), 60x63x167 см, белый',
            itemImg: itemImage,
            productPrice: '160,00',
            offers: '15'
        },
];


const Catalogue = (props) => {
    return (
        <Layout>
            <Content>
                <Header/>
                <Switch>
                    <Route path='/catalogue/:catalogueItem/:itemDetails'
                           render={() => <ProductPage />}/>
                    <Route path='/catalogue/:catalogueItem'
                           render={() => <CatalogueProducts products={Products}/>}/>
                    <Route path='/catalogue'
                           render={() => <CatalogueList/>}/>
                </Switch>
                <Footer/>
            </Content>
        </Layout>
    )
};

export default Catalogue;