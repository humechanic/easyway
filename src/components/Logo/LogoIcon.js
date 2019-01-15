import React from 'react';
import Logo from '../../img/Logo.png';
import classes from './LogoIcon.module.css'

const LogoIcon = (props) => {
        return(
            <div className={classes.LogoIcon}>
            <img src={Logo} alt={Logo}/>
                <p>Благотворительный каталог</p>
            </div>
        )
};
export default LogoIcon;