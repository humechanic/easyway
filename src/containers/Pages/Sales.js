import React from 'react'
import Content from "../content/Content";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Stock, singleElement} from "../../components/Stock(Sales)/Stock";
import { Route, Switch} from 'react-router-dom'
import BlockTitle from "../../components/BlockTitle/BlockTitle";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumb";

const Sales = () => {
        return (
            <Content>
                <Header/>
                <Route path='/:path' component={Breadcrumbs}/>
                <BlockTitle title={'Акции, призы, скидки'}/>
                    <Switch>
                        <Route exact path={'/sales'} component={ () => <Stock MainPage={false}/> }/>
                        <Route path='/sales/:salePath' component={singleElement}/>
                    </Switch>
                <Footer/>
            </Content>
)
};
export default Sales;