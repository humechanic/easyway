import React from 'react'
import Content from "../content/Content";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Stock from "../../components/Stock(Sales)/Stock";
import { Route, Switch} from 'react-router-dom'
import BlockTitle from "../../components/BlockTitle/BlockTitle";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumb";
import StockDetails from "../../components/Stock(Sales)/StockDetails";

const Sales = (props) => {
        return (
            <Content>
                <Header/>
                <Route path='/:path' component={Breadcrumbs}/>
                <BlockTitle title={'Акции, призы, скидки'}/>
                    <Switch>
                        <Route exact path='/sales' render={() => <Stock MainPage={false}/>}/>
                        <Route path='/sales/:salePath' component={StockDetails}/>
                    </Switch>
                <Footer/>
            </Content>
)
};
export default Sales;