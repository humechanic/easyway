import React from 'react';
import Layout from './containers/Layout/Layout'
import './App.css';
import HomePage from "./containers/Pages/Home";
import {Route, Switch} from 'react-router-dom';
import AboutPage from "./containers/Pages/About";
import Contacts from "./containers/Pages/Contacts";
import TestPage from "./containers/Pages/ProfilePages/TestPage";
import Sales from "./containers/Pages/Sales";
import Catalogue from './containers/Pages/Catalogue';
import Service from './containers/Pages/Service';

const App = (props) => {
        return (
            <Layout>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/contacts" component={Contacts} />
                    <Route path="/profile" component={TestPage} />
                    <Route path="/sales" render={ () => <Sales />}/>
                    <Route path="/catalogue" component={Catalogue}/>
                    <Route path="/service" component={Service}/>
                </Switch>
            </Layout>
        );
};

export default App;