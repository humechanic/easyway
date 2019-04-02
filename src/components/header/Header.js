import React, {Component} from 'react'
import classes from './Header.module.css'
import Menu from '../Menu/Menu'
import Profile from '../Profile/HeaderButton/Profile'
import LogoIcon from "../Logo/LogoIcon";


class Header extends Component {

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