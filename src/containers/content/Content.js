import React, {Component} from 'react';
import Catalogue from '../../components/Catalogue/Catalogue'
import classes from './Content.module.css'
import Carousel from '../../components/Caurosel/Carousel';
import Charity from "../../components/Charity/Charity";
import MoneyBlock from "../../components/MoneyBlock/MoneyBlock";
import Stock from "../../components/Stock(Sales)/Stock";

class Content extends Component {
    render() {
        return (
            <div className={classes.Content}>
                <Catalogue />
                <Carousel />
                <Charity />
                <MoneyBlock />
                <Stock />
            </div>
        )
    }
}

export default Content;
