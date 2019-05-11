import React from 'react';
import CompanyLogo from './../../img/Services/LogoBank.png';
import { ServiceSubListBusiness } from "../../components/Services/ServiceSubList";
const SHOW_SERVICE_SUBLIST = 'SHOW_SERVICE_SUBLIST';

const initialState = {
    Services: [
        {
            name: 'ВТБ Банк',
            logo: CompanyLogo,
            location: 'Минск, ул. Московская, 98',
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
            prime: 'до 19:00',

        },
        {
            name: '1451 Банк',
            logo: '',
            location: 'Минск, ул. Войсковрая, 98',
            prime: 'до 19:00',

        },
    ],
    ServiceList: {
        servicesSubList: <ServiceSubListBusiness/>,
        name: 'business',
        className: '',
    }
};

function servicePageReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_SERVICE_SUBLIST: {
            let nextState = {
                ...state,
                ServiceList: {...state.ServiceList}
            };
            nextState.ServiceList.servicesSubList = action.subList;
            nextState.ServiceList.name = action.name;
            return nextState
        }
        default:
            return state
    }
}

export const serviceSublistAC = (subList, name) => ({ type: SHOW_SERVICE_SUBLIST, subList, name });

export default servicePageReducer;