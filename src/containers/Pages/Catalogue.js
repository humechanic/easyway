import React from 'react';
import Content from "../content/Content";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Route, Switch} from 'react-router-dom';
import CatalogueList from './CataloguePages/CatalogueList';
import CatalogueProducts from "./CataloguePages/CatalogueProducts";
import ProductPage from "./CataloguePages/ProductPage";
import itemImage from './../../img/Catalogue/itemImage.png';

const ProductAPI = {
    Products: [
        {
            id: 1,
            path: 'atlantМХМ2826-90',
            productName: 'Холодильник ATLANT МХМ 2826-90',
            productDesc: 'без всяких там No Frost, механическое управление, класс A, полезный объём: 288 л (235 + 53 л), 60x63x167 см, белый',
            itemImg: itemImage,
            productPrice: 900,
            offers: '13',
            design: 'свободностоящее',
            construction: 'с нижней морозильной камерой',
            freezingSystem: 'No Frost' ,
            color: 'нержавеющая сталь',
            processorAmount: '1',
            shelfAmount: '5',
            iceBoxAmount: '3',
            usefulVolume: '351л',
            control: 'электронное',
            effectiveClass: 'A+',
            noiseLevel: '38дБ',
        },
        {
            id: 2,
            path: 'atlantМХМ2226-90',
            productName: 'Холодильник ATLANT МХМ 2226-90',
            productDesc: 'без No Frost, механическое управление, класс A, полезный объём: 288 л (235 + 53 л), 60x63x167 см, белый',
            itemImg: itemImage,
            productPrice: 130,
            offers: '12',
            design: 'дностоящее',
            construction: 'с ержановской морозильной камерой',
            freezingSystem: 'No Frost No cholodilnik',
            color: 'валерийская сталь',
            processorAmount: '2',
            shelfAmount: '15',
            iceBoxAmount: '43',
            usefulVolume: '1231л',
            control: 'электронное и механическое',
            effectiveClass: '1+',
            noiseLevel: '3дБ',
        },
        {
            id: 3,
            path: 'boschmxm4446-90',
            productName: 'Холодильник BOSCH МХМ 4446-90',
            productDesc: 'заменить текст No Frost, механическое управление, класс A, полезный объём: 288 л (235 + 53 л), 60x63x167 см, белый',
            itemImg: itemImage,
            productPrice: 100,
            offers: '15',
            design: 'стоящее на коне, как Король Ночи',
            construction: 'с нночной морозильной камерой',
            freezingSystem: 'No Human Kingdom',
            color: 'нержавеющий магический лед',
            processorAmount: '90',
            shelfAmount: '17',
            iceBoxAmount: '13',
            usefulVolume: '12351л',
            control: 'ледянной коловрат',
            effectiveClass: '+9999',
            noiseLevel: '-2дБ + 4дб(шелест костяшек)',
        },

    ],

    all: function() {
        return this.Products
    },


    get: function(path){
        const ProductItem = p => p.path === path;
        return this.Products.find(ProductItem);
    },
};

const Catalogue = (props) => {
    return (
        <Content>
                <Header/>
                <Switch>
                    <Route path='/catalogue/:catalogueItem/:itemDetails'
                           render={() => <ProductPage products={ProductAPI} />}/>
                    <Route path='/catalogue/:catalogueItem'
                           render={() => <CatalogueProducts products={ProductAPI.Products}/>}/>
                    <Route path='/catalogue'
                           render={() => <CatalogueList/>}/>
                </Switch>
                <Footer/>
        </Content>
    )
};

export default Catalogue;