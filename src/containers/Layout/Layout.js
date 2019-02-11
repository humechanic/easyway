import React, {Component} from 'react';
import classes from './Layout.module.css';
import {Switch, Route} from 'react-router-dom'
import HomePage from "../Pages/Home";
import AboutPage from "../Pages/About";
class Layout extends Component {
    render() {
        return (
            <div className={classes.Layout}>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;