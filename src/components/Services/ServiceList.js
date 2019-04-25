import React, {Component} from 'react';
import {ServiceSubListBusiness,
    ServiceSubListHousehold,
    ServiceSubListCleaning,
    ServiceSubListRestaurant,
    ServiceSubListZoo,
    ServiceSubListTaxi
} from "./ServiceSubList";
import './ServiceList.css'

// services: [
//     {name: 'Услуги для бизнеса'},
//     {name: 'Бытовые услуги'},
//     {name: 'Химчистка и прачечные'},
//     {name: 'Рестораны и кафе'},
//     {name: 'Зоомагазины'},
//     {name: 'Такси'},
// ],
// serviceSubListNames: [
//     {
//         business: [
//             {name: 'Банки'},
//             {name: 'Конференц-залы'},
//             {name: 'Поставщики продуктов'},
//             {name: 'Клиниговые компании'},
//             {name: 'Медицинское оборудование'},
//             {name: 'Оборудование для кафе'},
//             {name: 'Оборудование для салонов'},
//             {name: 'Оборудование для саун'},
//         ],
//     },
//     {
//         household: [
//             {name: 'Бытовые услуги'},
//             {name: 'Всякие залы'},
//             {name: 'Поставщики еретиков'},
//             {name: 'Клиниговые машины'},
//             {name: 'Медицинское страховки'},
//             {name: 'Оборудование для душа'},
//             {name: 'Оборудование для начинающих'},
//             {name: 'Оборудование для русских'},
//         ],
//     },
//     {
//         cleaning: [
//             {name: 'Стирка - ластик'},
//             {name: 'Помоечная машина'},
//             {name: 'Поставщики поршка'},
//             {name: 'Клиниговые посудомойки'},
//             {name: 'Медицинская химчистка'},
//             {name: 'Оборудование для кипечения'},
//             {name: 'Оборудование для отжима'},
//             {name: 'Оборудование для сушки'},
//         ],
//     },
//     {
//         restaurant: [
//             {name: 'Каферес'},
//             {name: 'Конфеты'},
//             {name: 'Пицца'},
//             {name: 'Клиниговая посуда'},
//             {name: 'Каферудование'},
//             {name: 'Таблички "закрыто"'},
//             {name: 'Стулья как в фильмах'},
//             {name: 'Чаевые для работяг'},
//         ],
//     },
//     {
//         zoo: [
//             {name: 'Животные'},
//             {name: 'Вальеры'},
//             {name: 'Экскурсии по тюрьмам Беларуси'},
//             {name: 'Клиниговые компании'},
//             {name: 'Ветеринарное оборудование'},
//             {name: 'Оборудование для собак'},
//             {name: 'Оборудование для кошек'},
//             {name: 'Оборудование для хозяев'},
//         ],
//     },
//     {
//         taxi: [
//             {name: 'Машины с колесами'},
//             {name: 'Машины с Максимами'},
//             {name: 'Желтенькие как в кино'},
//             {name: 'Машины для растаманов'},
//             {name: 'Такси для интровертов'},
//             {name: 'Оборудование для диспетчера'},
//             {name: 'Такси для кошек'},
//             {name: 'Кареты'},
//         ],
//     },
// ]
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
