import React from 'react';
import Content from "../content/Content";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Route, Switch} from 'react-router-dom';
import CatalogueList from './CataloguePages/CatalogueList';
import CatalogueProducts from "./CataloguePages/CatalogueProducts";
import ProductPage from "./CataloguePages/ProductPage";

const Catalogue = (props) => {
    return (
        <Content>
                <Header/>
                <Switch>
                    <Route path='/catalogue/:catalogueItem/:itemDetails' component={ProductPage}/>
                    <Route path='/catalogue/:catalogueItem' component={CatalogueProducts}/>
                    <Route path='/catalogue' component={CatalogueList}/>
                </Switch>
                <Footer/>
        </Content>
    )
};

export default Catalogue;