import React, {Component} from 'react'
import Content from "../../content/Content";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import BlockTitle from "../../../components/BlockTitle/BlockTitle";
import UserHistory from "../../../components/Profile/User/UserHistory/UserHistory";
import ColorBlock from "../../../components/Profile/ColorBlock/ColorBlock";
import Button from "../../../components/Button/Button";
import ProjectList from "../../../components/ProjectList/ProjectList";
import IndividualData from "../../../components/Profile/User/IndividualData/IndividualData";
import AutoCharity from "../../../components/Form/Form";
import { Route} from 'react-router-dom';


const IndividualProfile = ({match}) => {
        return (
            <Content>
                <Header/>

                <BlockTitle
                    title={'Личный кабинет'}
                />

                <IndividualData>
                    <ColorBlock
                        type={'blueBox'}
                        title={'Ваш баланс:'}
                        MoneyAmount={'14199 руб.'}/>
                    <ColorBlock
                        type={'redBox'}
                        title={'Рейтинг:'}
                        MoneyAmount={'259'}/>
                </IndividualData>
                <UserHistory/>
                <AutoCharity/>
                <Button
                    position={'center'}
                    buttonType={'blue'}
                    titleStyle={'chooseProject'}
                >Осуществить пожертвование</Button>
                <ProjectList/>
                <Footer/>
            </Content>
        )
};

export default IndividualProfile;