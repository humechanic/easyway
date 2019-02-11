import React, {Component} from 'react'
import classes from './Header.module.css'
import Menu from '../Menu/Menu'
import Profile from '../Profile/Profile'
import LogoIcon from "../Logo/LogoIcon";
import Button from "../Button/Button";
import MainPageTitle from "../MainPageTitle/MainPageTitle";
import { Route } from 'react-router-dom';

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
                    <LogoIcon/>
                    <Menu
                        type={'Header'}
                    />
                    <Profile/>
            </div>
            </>
            )
    }
}

export default Header;