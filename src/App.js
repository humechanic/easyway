import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout'
import './App.css';
import Header from './containers/header/Header'
import Content from './containers/content/Content'

class App extends Component {
  render() {
    return (
        <Layout>
        <Header />
        <Content />
        </Layout>
    );
  }
}

export default App;