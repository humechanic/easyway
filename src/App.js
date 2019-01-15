import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout'
import './App.css';
import Header from './containers/header/Header'

class App extends Component {
  render() {
    return (
        <Layout>
        <Header />
        </Layout>
    );
  }
}

export default App;