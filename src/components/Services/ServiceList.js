import React from 'react';
import {ServiceSubListBusiness,
    ServiceSubListHousehold,
    ServiceSubListCleaning,
    ServiceSubListRestaurant,
    ServiceSubListZoo,
    ServiceSubListTaxi
} from "./ServiceSubList";
import './ServiceList.css';
import {serviceSublistAC} from "../../redux/reducers/servicePageReducer";
import {connect} from 'react-redux';

const ServiceList = (props) => {

    function isActive(value) {
        return ((value === props.serviceList) ? 'active' : null);
    }

    return (
        <>
            <ul className={'Services'}>
                <li className={isActive('business')}
                    onClick={() => props.showServiceSubList(<ServiceSubListBusiness/>, 'business')}>
                    Услуги для бизнеса
                </li>
                <li className={isActive('household')}
                    onClick={() => props.showServiceSubList(<ServiceSubListHousehold/>, 'household')}>
                    Бытовые услуги
                </li>
                <li className={isActive('cleaning')}
                    onClick={() => props.showServiceSubList(<ServiceSubListCleaning/>, 'cleaning')}>
                    Химчистка и прачечные
                </li>
                <li className={isActive('restaurant')}
                    onClick={() => props.showServiceSubList(<ServiceSubListRestaurant/>, 'restaurant')}>
                    Рестораны и кафе
                </li>
                <li className={isActive('zoo')}
                    onClick={() => props.showServiceSubList(<ServiceSubListZoo/>, 'zoo')}>
                    Зоомагазины
                </li>
                <li className={isActive('taxi')}
                    onClick={() => props.showServiceSubList(<ServiceSubListTaxi/>, 'taxi')}>
                    Такси
                </li>
            </ul>
            <div className={'ServiceSubList'}>{props.servicesSubList}</div>
        </>
    )
};

function mapStateToProps(state) {
    return {
        servicesSubList: state.servicePage.ServiceList.servicesSubList,
        serviceList: state.servicePage.ServiceList.name
    }
}

function mapDispatchToProps(dispatch) {
    return {
        showServiceSubList: (subList, name) => {
            dispatch(serviceSublistAC(subList, name))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceList);
