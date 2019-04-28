import React from 'react'
import Content from "../content/Content";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CurvyTitle from "../../components/CurvyWavePageDecor/CurvyTitle";
import TextBlock from "../../components/TextBlock/TextBlock";
import AboutPageImg from "../../img/AboutPage/AboutPage.png";
import Breadcrumbs from './../../components/Breadcrumbs/Breadcrumb';

const AboutPage = () => {
        return (
            <Content>
                <Header/>
                <Breadcrumbs/>
                <CurvyTitle

                    title={'О нас'}
                    buttonType={"noBorder"} //yellow, blue, noBorder
                    titleStyle={"fontSize"} //textBlack (white = default), fontSize (font-size: 40px)

                />
                <TextBlock>
                    <p><b>EASY WAY</b> - это центр поддержки общественно полезных проектов, в фундаменте которого лежит
                    уникальный механизм – аукцион встреч. EASY WAY – это место, где Вы можете выставить встречу с собой
                    на аукцион или выиграть встречу со знаменитостью, специалистом в какой-либо сфере либо просто с
                    человеком, который Вам интересен. EASY WAY дает Вам возможность завести новых друзей и деловых
                    партнёров, получить новый незабываемый опыт и установить полезные контакты.
                    Лежит уникальный механизм – аукцион встреч.
                    <br/>
                    <br/>
                    EASY WAY – это место, где Вы можете выставить встречу с
                    собой на аукцион или выиграть встречу со знаменитостью, специалистом в какой-либо сфере либо просто
                    с человеком, который Вам интересен. EASY WAY дает Вам возможность завести новых друзей и деловых
                    партнёров, получить новый незабываемый опыт и установить полезные контакты.
                    Лежит уникальный механизм – аукцион встреч.
                    <br/>
                    <br/>
                    EASY WAY – это место, где Вы можете выставить встречу с
                    собой на аукцион или выиграть встречу со знаменитостью, специалистом в какой-либо сфере либо просто
                    с человеком, который Вам интересен. EASY WAY дает Вам возможность завести новых друзей и деловых
                        партнёров, получить новый незабываемый опыт и установить полезные контакты.</p>
                <img src={AboutPageImg} alt={'img'}/>
                </TextBlock>

                <Footer/>
            </Content>
        )

};

export default AboutPage;