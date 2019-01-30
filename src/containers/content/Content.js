import React, {Component} from 'react';
import Catalogue from '../../components/Catalogue/Catalogue'
import classes from './Content.module.css'
import Carousel from '../../components/Caurosel/Carousel';
import Charity from "../../components/Charity/Charity";

class Content extends Component {
    render() {
        return (
            <div className={classes.Content}>
                <Catalogue />
                <Carousel />
                <Charity />
            </div>
        )
    }
}

export default Content;
