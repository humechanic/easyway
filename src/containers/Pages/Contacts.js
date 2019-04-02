import React, {Component} from 'react';
import Content from "../content/Content";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CurvyTitle from "../../components/CurvyWavePageDecor/CurvyTitle";
import TextBlock from "../../components/TextBlock/TextBlock";
import GoogleMapReact from 'google-map-react';
import MapPointer from "../../components/MapPointer/MapPointer";
import "../../components/MapPointer/MapPointer.css";
import Breadcrumbs from './../../components/Breadcrumbs/Breadcrumb';

class Contacts extends Component {
    static defaultProps = {
        center: {
            lat: 53.9251936,
            lng: 27.5061362,
        },
        zoom: 17
    };
    render() {
            return (
                <Content>
                    <Header/>
                    <Breadcrumbs/>
                    <CurvyTitle
                        title={'Контакты'}
                        buttonType={"noBorder"} //yellow, blue, noBorder
                        titleStyle={"fontSize"} //textBlack (white = default), fontSize (font-size: 40px)
                    />
                    <TextBlock>
                        <p>Заменить весь текст! Почтовый адрес: 220035, Республика Беларусь, г. Минск, ул. Тимирязева,
                            67,
                            кабинет 2002, почтовая ячейка №134.
                            <br/>
                            <br/>
                            Телефон (в рабочее время): +375 29 55 777 77 (МТС)
                            <br/>
                            <br/>
                            Email: <a href={"#"}>help@easyway.by</a> (по вопросам оказания помощи и сотрудничества)
                            <br/>
                            <br/>
                            <a href={"#"}>support@easyway.by</a> (техническая поддержка сайта)
                            <br/>
                            <br/>
                            Наши страницы в социальных сетях: ВКонтакте, Facebook, Instagram, Twitter, Google+, YouTube
                            <br/>
                            <br/>
                            Информация о регистрации
                            <br/>
                            <br/>
                            ООО "EasyWay" зарегистрировано решением Мингорисполкома от 08.09.2011г. в Едином
                            государственном
                            регистре юридических лиц и индивидуальных предпринимателей за №191686184.
                            <br/>
                            <br/>
                            Команда EasyWay готова к обсуждению и приветствует Ваши идеи и предложения по
                            сотрудничеству!
                        </p>
                    </TextBlock>
                    <div style={{height: '300px', width: '100%'}}>
                        <GoogleMapReact

                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                        >
                            <MapPointer className={"MapPointer"}
                                        lat={53.9251936}
                                        lng={27.5061362}

                            />
                        </GoogleMapReact>
                    </div>
                    <Footer/>
                </Content>

            )

    }
}

export default Contacts;