import React, {Component} from 'react'
import classes from './Header.module.css'
import Menu from '../../components/Menu/Menu'
import Profile from '../../components/Menu/Profile/Profile'
import LogoIcon from "../../components/Logo/LogoIcon";
import Button from "../../components/Button/Button";
import MainPageTitle from "../../components/MainPageTitle/MainPageTitle";

class Header extends Component {

   /*constructor(props) {
        super(props);
            this.state = {
                HeaderTitle: 'ВМЕСТЕ МЫ ПОМОГАЕМ!',
            }

    }
    }*/
    render() {
        return (
            <>
            <div className={classes.Header}>
                    <LogoIcon />
                    <Menu />
                    <Profile />
                <div className={classes.title}>

                    <MainPageTitle />
                        <div className={classes.Buttons}>
                            <Button type="catalog">Каталог товаров</Button>
                            <Button type="service">Услуги</Button>
                        </div>

                </div>
            </div>
            </>
            )
    }
}

export default Header;