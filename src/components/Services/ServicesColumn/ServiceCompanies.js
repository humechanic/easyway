import React from 'react';
import ServiceItem from "./ServiceItem";
import CompanyLogo from './../../../img/Services/LogoBank.png';
import './ServiceCompanies.css';
import ServiceFilters from "../ServicesFilters/DayTimeFilter";

const Services = [
    {
        name:'ВТБ Банк',
        logo: CompanyLogo,
        location:'Минск, ул. Московская, 98',
        prime: 'до 19:00',

    },
    {
        name: 'STS Банк',
        logo: CompanyLogo,
        location: 'Минск, ул. Мурковская, 98',
        prime: 'до 19:00',

    },
    {
        name: 'OHT Банк',
        logo: CompanyLogo,
        location: 'Минск, ул. Моржвская, 98',
        prime: 'до 19:00',

    },
    {
        name: 'Б1 Банк',
        logo: '',
        location: 'Минск, ул. Мсиковская, 98',
        prime: 'до 19:00',

    },
    {
        name: 'В1 Банк',
        logo: '',
        location: 'Минск, ул. Войсковрая, 98',
        prime:'до 19:00',

    },
    {
        name: '1451 Банк',
        logo: '',
        location: 'Минск, ул. Войсковрая, 98',
        prime: 'до 19:00',

    },
];

const ServiceCompanies = (props) => {
    return (
        <div className={'ServiceCompanies'}>
            <ServiceFilters/>
            {Services.map((services, index) => {
                return (
                    <ServiceItem
                        serviceName={services.name}
                        serviceLocation={services.location}
                        serviceWorktime={services.prime}
                        serviceLogo={services.logo}
                    />
                )
            })}
        </div>
    )
};


export default ServiceCompanies;