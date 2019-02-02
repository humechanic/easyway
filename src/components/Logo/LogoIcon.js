import React from 'react';
import LogoHeader from '../../img/Logo.png';
import LogoFooter from '../../img/Logo1.png';
import './LogoIcon.css'

const LogoIcon = (props) => {
        return(
            <div className={"LogoIcon"}>
            <img src={[props.logo]} alt={'logo'}/>
                <p className={[props.textColor]}>Благотворительный каталог</p>
            </div>
        )
};

LogoIcon.defaultProps = {
    logo: LogoHeader,
    textColor: 'white',
};

export default LogoIcon;