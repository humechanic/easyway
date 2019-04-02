import React from 'react';
import Layout from "../Layout/Layout";
import Content from "../content/Content";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Route, Switch} from 'react-router-dom';
import CatalogueList from './CataloguePages/CatalogueList';
import CatalogueProducts from "./CataloguePages/CatalogueProducts";

const Catalogue = () => {

  return (
      <Layout>
         <Content>
            <Header/>
             <Switch>
                 <Route exact path='/catalogue' component={CatalogueList}/>
                 <Route path='/catalogue/:catalogueItem' component={CatalogueProducts}/>
             </Switch>
            <Footer/>
         </Content>
      </Layout>
  )
};

export default Catalogue;