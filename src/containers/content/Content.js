import React, {Component} from 'react';
import Catalogue from '../../components/Catalogue/Catalogue'
import classes from './Content.module.css'
import Carousel from '../../components/Caurosel/Carousel';
import Charity from "../../components/Charity/Charity";
import MoneyBlock from "../../components/MoneyBlock/MoneyBlock";
import Stock from "../../components/Stock(Sales)/Stock";
import CurvyTitle from "../../components/CurvyWavePageDecor/CurvyTitle";
import BlockTitle from "../../components/BlockTitle/BlockTitle";
import FeedbackBlock from "../../components/FeedbackBlock/FeedbackBlock";
import NewsBlock from "../../components/NewsBlock/NewsBlock";
import InfoBlock from "../../components/InfoBlock/InfoBlock";
import Footer from "../footer/Footer";

class Content extends Component {
    render() {
        return (
            <div className={classes.Content}>
                <Catalogue />
                <Carousel />
                <Charity />
                <MoneyBlock />
                <Stock />
                <CurvyTitle
                    title={'Все новости'}
                    buttonType={"yellow"}
                    buttonStyle={"textBlack"}
                />
                <BlockTitle
                    title={'Отзывы'}
                    link={'#'}
                    linkName={'Все отзывы'}
                />
                <FeedbackBlock />
                <BlockTitle
                    title={'Новости'}
                    link={'#'}
                    linkName={'Все новости'}
                />
                <NewsBlock/>
                <BlockTitle
                    title={'Помогать вместе - просто!'}
                />
                <InfoBlock />
                <Footer/>

            </div>
        )
    }
}

export default Content;
