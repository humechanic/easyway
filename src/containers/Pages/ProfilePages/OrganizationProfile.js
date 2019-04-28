import React, {Component} from 'react'
import Content from "../../content/Content";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import BlockTitle from "../../../components/BlockTitle/BlockTitle";
import OrganizationData from "../../../components/Profile/User/OrganizationData/OrganizationData";
import UserHistory from "../../../components/Profile/User/UserHistory/UserHistory";
import ColorBlock from "../../../components/Profile/ColorBlock/ColorBlock";
import CurvyTitle from "../../../components/CurvyWavePageDecor/CurvyTitle";
import TextBlock from "../../../components/TextBlock/TextBlock";
import Button from "../../../components/Button/Button";
import ProjectList from "../../../components/ProjectList/ProjectList";



class OrganizationProfile extends Component {
    render() {
        return (
            <Content>
                <Header/>


                <BlockTitle
                    title={'Личный кабинет'}/>

                <OrganizationData>
                    <ColorBlock
                        type={'blueBox'}
                        title={'Ваш баланс:'}
                        MoneyAmount={'14199 руб.'}/>
                    <ColorBlock
                        type={'redBox'}
                        title={'Рейтинг:'}
                        MoneyAmount={'259'}/>
                </OrganizationData>

                <UserHistory/>

                <CurvyTitle
                    titleStyle={'fontSize'}
                    buttonType={'noBorder'}
                    title={'Описание:'}/>

                <TextBlock>
                    В процессе своей деятельности предприятие должно принимать ряд решений: какой товар или номенклатуру
                    товаров следует выпускать и продавать; на какие рынки надо выходить с этим товаром и как укрепить
                    свои позиции на рынке; как выбрать оптимальную технологию производства; какие материалы приобретать
                    и как их использовать; как распределить имеющиеся модели и финансовые ресурсы;
                    каких показателей своей деятельности предприятие предпочитает (должно) достигнуть в отношении
                    технических характеристик выпускаемого товара, его качества, эффективности производства.
                </TextBlock>

                <Button
                    position={'center'}
                    buttonType={'blue'}
                    titleStyle={'chooseProject'}>Выбрать благотворительный проект</Button>
                <ProjectList/>
                <Footer/>
            </Content>
        )
    }
}

export default OrganizationProfile;