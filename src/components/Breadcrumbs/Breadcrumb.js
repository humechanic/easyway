import React from 'react';
import { NavLink} from 'react-router-dom';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import './Breadcrumb.css';

const routes = [
    {path: '/', breadcrumb: 'Главная'},
    {path: '/about', breadcrumb: ' О нас'},
    {path: '/contacts', breadcrumb: 'Контакты'},
    {path: '/service', breadcrumb: 'Услуги'},
    {path: '/profile', breadcrumb: 'Личный кабинет'},
    {path: '/sales', breadcrumb: 'Акции, скидки, призы'},
    {path: '/catalogue', breadcrumb: 'Каталог товаров'},
    {path: '/catalogue/bulky_machines', breadcrumb: " Крупногабаритная техника"},
    {path: '/catalogue/fridges', breadcrumb: 'Холодильники'},
    {path: '/catalogue/freezers', breadcrumb: 'Морозильники'},
    {path: '/catalogue/washmachines', breadcrumb: 'Стиральные машины'},
    {path: '/catalogue/driers', breadcrumb: 'Сушильные машины'},
    {path: '/catalogue/stovehoods', breadcrumb: 'Вытяжки'},
    {path: '/catalogue/cookers', breadcrumb: 'Кухонные плиты'},
    {path: '/catalogue/dishwashers', breadcrumb: 'Посудомоечные машины'},
    {path: '/catalogue/wineracks', breadcrumb: 'Винные шкафы'},
    {path: '/catalogue/built_in_appliances', breadcrumb: 'Встраиваемая техника'},
    {path: '/catalogue/cleaning', breadcrumb: 'Уборка, уход за одеждой'},
    {path: '/catalogue/climate', breadcrumb: 'Климатическая техника'},
    {path: '/catalogue/cooking', breadcrumb: 'Приготовление пищи'},
    {path: '/catalogue/tea_and_coffee', breadcrumb: 'Приготовление кофе и чая'},
    {path: '/catalogue/food_processing', breadcrumb: 'Подготовка и обработка продуктов'},
    {path: '/catalogue/hygienics', breadcrumb: 'Уход за волосами и телом'},
    {path: '/catalogue/health', breadcrumb: 'Техника для здоровья'},
    {path: '/catalogue/accessories', breadcrumb: 'Сопутствующие товары и аксессуары'},
    {path: '/sales/:salePath', breadcrumb: ''},
];

const Breadcrumbs = ({ match, breadcrumbs}) => (
    <div className={'breadcrumbs'}>
        <ul className={'breadcrumbItem'}>
        {breadcrumbs.map(({breadcrumb, path, match,}) => (
                <li key={breadcrumb.length}>
                <NavLink to={match.url}>
                    {breadcrumb}
                </NavLink>
                </li>
        ))}
        </ul>
    </div>
);


export default withBreadcrumbs(routes)(Breadcrumbs);