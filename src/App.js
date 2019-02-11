import React, { Component } from 'react';
import Layout from './containers/Layout/Layout'
import './App.css';
import HomePage from "./containers/Pages/Home";
import {Route} from 'react-router-dom';
import AboutPage from "./containers/Pages/About";
import Contacts from "./containers/Pages/Contacts";


class App extends Component {
      render() {
        return (
            <Layout>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contacts" component={Contacts} />
            </Layout>
        );
      }
}

export default App;