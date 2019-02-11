import React, {Component} from 'react';
import Catalogue from '../../components/Catalogue/Catalogue'
import Carousel from '../../components/Caurosel/Carousel';
import Charity from "../../components/Charity/Charity";
import MoneyBlock from "../../components/MoneyBlock/MoneyBlock";
import Stock from "../../components/Stock(Sales)/Stock";
import CurvyTitle from "../../components/CurvyWavePageDecor/CurvyTitle";
import BlockTitle from "../../components/BlockTitle/BlockTitle";
import FeedbackBlock from "../../components/FeedbackBlock/FeedbackBlock";
import NewsBlock from "../../components/NewsBlock/NewsBlock";
import ShorInfoBlock from "../../components/ShortInfoBlock/ShorInfoBlock";
import Footer from "../../components/footer/Footer";
import Content from "../content/Content";
import Header from "../../components/header/Header";

class HomePage extends Component {
    render() {
        return (
            <Content>
                <Header/>
                <Catalogue/>
                <Carousel/>
                <Charity/>
                <MoneyBlock/>
                <Stock/>

                <CurvyTitle  title={'Все новости'}
                             buttonType={"yellow"}
                             titleStyle={"textBlack"}
                />

                <BlockTitle
                    title={'Отзывы'}
                    link={'#'}
                    linkName={'Все отзывы'}
                />

                <FeedbackBlock/>

                <BlockTitle
                    title={'Новости'}
                    link={'#'}
                    linkName={'Все новости'}
                />

                <NewsBlock/>

                <BlockTitle
                    title={'Помогать вместе - просто!'}
                />

                <ShorInfoBlock/>
                <Footer/>

            </Content>
        )
    }
}

export default HomePage;
