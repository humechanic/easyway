import React, {Component} from 'react'
import MenuItem from './MenuItem'
import './Menu.css'
import MainPageTitle from "../MainPageTitle/MainPageTitle";
import Button from "../Button/Button";
import { Route } from 'react-router-dom';


class Menu extends Component {
    constructor(props) {
        super(props);

        this.type = {
                type: [props.type]
                    };

        this.state = {
            MenuList: [
                {
                    title: 'О нас',
                    path: '/about',

                },
                {
                    title: 'Стать партнером',
                    path: '/join',
                },
                {
                    title: 'Контакты',
                    path: '/contacts',
                }
            ]
        }

    }
    render () {
        return (
                <nav className={"Menu"}>

                    <ul className={"Links"}>
                        {
                            this.state.MenuList.map((MenuList, index) => {
                                return <MenuItem key={index}
                                                 title={MenuList.title}
                                                 type={this.props.type}
                                                 path={MenuList.path}/>
                            })
                        }
                    </ul>

                    <div className={"MainPageTitle"}>

                        <Route exact path="/" component={MainPageTitle}
                        />

                        <div className={"Buttons"}>
                                <Button buttonType="yellow">Каталог товаров</Button>
                                <Button buttonType="blue">Услуги</Button>
                        </div>

                    </div>
                </nav>
        );
    }
}
export default Menu;