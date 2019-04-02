import React from 'react';
import CatalogueNamesList from '../../components/Catalogue/CatalogueNames/CatalogueNamesList'
import Carousel from '../../components/Caurosel/Carousel';
import Charity from "../../components/Charity/Charity";
import MoneyBlock from "../../components/MoneyBlock/MoneyBlock";
import CurvyTitle from "../../components/CurvyWavePageDecor/CurvyTitle";
import BlockTitle from "../../components/BlockTitle/BlockTitle";
import FeedbackBlock from "../../components/FeedbackBlock/FeedbackBlock";
import NewsBlock from "../../components/NewsBlock/NewsBlock";
import ShortInfoBlock from "../../components/ShortInfoBlock/ShorInfoBlock";
import Footer from "../../components/footer/Footer";
import Content from "../content/Content";
import Header from "../../components/header/Header";
import Stock from "../../components/Stock(Sales)/Stock";

const HomePage = () => {

    return (
        <Content>
            <Header/>
            <CatalogueNamesList/>
            <Carousel/>
            <Charity/>
            <MoneyBlock/>
            <Stock MainPage={true}
            />

            <CurvyTitle title={'Все новости'}
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

            <ShortInfoBlock/>
            <Footer/>

        </Content>
    );
};

export default HomePage;
