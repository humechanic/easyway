import React from 'react';
import LogoHeader from '../../img/MainPage/Logo.png';
import { Link } from 'react-router-dom';
import './LogoIcon.css'

const LogoIcon = (props) => {
        return(

            <div className={"LogoIcon"}>

                <Link to="/">

                    <img src={[props.logo]} alt={'logo'}/>
                    <p className={[props.textColor]}>Благотворительный каталог</p>

                </Link>

            </div>

        )
};

LogoIcon.defaultProps = {
    logo: LogoHeader,
    textColor: 'white',
};

export default LogoIcon;