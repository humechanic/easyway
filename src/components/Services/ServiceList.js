import React, {Component} from 'react';
import {ServiceSubListBusiness,
    ServiceSubListHousehold,
    ServiceSubListCleaning,
    ServiceSubListRestaurant,
    ServiceSubListZoo,
    ServiceSubListTaxi
} from "./ServiceSubList";
import './ServiceList.css'

class ServiceList extends Component {

state = {
   servicesSubList: <ServiceSubListBusiness/>,
    active: false,
    name: 'business',
};

 showServiceSubList = (subList, name) => {
     return (
         this.setState({
             servicesSubList: subList,
             name: name,
         })
     )
 };
    isActive(value) {
        return ((value === this.state.name) ? 'active' : null );
    }

    render() {
        return (
            <>

                <ul className={'Services'}>
                    <li
                        className={this.isActive('business')}
                        onClick={this.showServiceSubList.bind(this, <ServiceSubListBusiness/>, 'business')}>
                        Услуги для бизнеса</li>
                    <li className={this.isActive('household')}
                        onClick={this.showServiceSubList.bind(this, <ServiceSubListHousehold/>, 'household')}>
                        Бытовые услуги</li>
                    <li className={this.isActive('cleaning')}
                        onClick={this.showServiceSubList.bind(this, <ServiceSubListCleaning/>, 'cleaning')}>
                        Химчистка и прачечные</li>
                    <li className={this.isActive('restaurant')}
                        onClick={this.showServiceSubList.bind(this, <ServiceSubListRestaurant/>, 'restaurant')}>
                        Рестораны и кафе</li>
                    <li className={this.isActive('zoo')}
                        onClick={this.showServiceSubList.bind(this, <ServiceSubListZoo/>, 'zoo')}>
                        Зоомагазины</li>
                    <li className={this.isActive('taxi')}
                        onClick={this.showServiceSubList.bind(this, <ServiceSubListTaxi/>, 'taxi')}>
                        Такси</li>
                </ul>
            <div className={'ServiceSubList'}>{this.state.servicesSubList}</div>
            </>
        )
    }
}

export default ServiceList;
