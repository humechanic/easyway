import React from 'react';
import phoneIcon from "./../../../img/Services/phoneIcon.png";

const ServiceItem = (props) => {
    if (props.serviceLogo.length > 0 ) {
        return (
            <div className={'ServiceItem'}>
                <p>{props.serviceName}</p>
                <div className={'ServiceLocationAndWorktime'}>
                    <a href={'#'}>{props.serviceLocation}</a>
                    <span>{props.serviceWorktime}</span>
                    <img src={phoneIcon} alt={'↓'}/>
                </div>
                <div className={'CompanyLogo'}>
                    <img src={[props.serviceLogo]} alt={'Logo'}/>
                </div>
            </div>
        )
    }
    return (
    <div className={'ServiceItem LogoLess'}>
        <p>{props.serviceName}</p>
        <div className={'ServiceLocationAndWorktime'}>
            <a href={'#'}>{props.serviceLocation}</a>
            <span>{props.serviceWorktime}</span>
            <img src={phoneIcon} alt={'↓'}/>
        </div>
    </div>
    )
};

export default ServiceItem;
