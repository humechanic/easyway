import React from 'react';
import './CatalogueFullListOfNames.css';
import Item from "./CatalogueFullListItem";
import CatalogueNameItem from "./../CatalogueTitles/CatalogueNameItem";


export const CatalogueListNames = [
    {
        catalogueNameType: 'appliance',
        catalogueName: 'Бытовая техника',
        ListItem: [
            {
                itemName: 'Крупногабаритная техника',
                itemPath: '/bulky_machines',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Встраиваемая техника',
                itemPath: '/built_in_appliances',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Уборка, уход за одеждой',
                itemPath: '/cleaning',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Климатическая техника',
                itemPath: '/climate',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Приготовление пищи',
                itemPath: '/cooking',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Приготовление кофе и чая',
                itemPath: '/tea_and_coffee',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Подготовка и обработка продуктов',
                itemPath: '/food_processing',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Уход за волосами и телом',
                itemPath: '/hygienics',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Техника для здоровья',
                itemPath: '/health',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Сопутствующие товары и аксессуары',
                itemPath: '/accessories',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
        ],
    },
    {
        catalogueNameType: 'beauty',
        catalogueName: 'Красота и здоровье',
        ListItem: [
            {
                itemName: 'Крупногабаритная техника',
                itemPath: '/bulky_machines',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Встраиваемая техника',
                itemPath: '/built_in_appliances',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Уборка, уход за одеждой',
                itemPath: '/cleaning',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Климатическая техника',
                itemPath: '/climate',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Приготовление пищи',
                itemPath: '/cooking',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Приготовление кофе и чая',
                itemPath: '/tea_and_coffee',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Подготовка и обработка продуктов',
                itemPath: '/food_processing',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Уход за волосами и телом',
                itemPath: '/hygienics',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Техника для здоровья',
                itemPath: '/health',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Сопутствующие товары и аксессуары',
                itemPath: '/accessories',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
        ],
    },
    {
        catalogueNameType: 'sport',
        catalogueName: 'Спорт и туризм',
        classRight: 'right',
        ListItem: [
            {
                itemName: 'Крупногабаритная техника',
                itemPath: '/bulky_machines',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Встраиваемая техника',
                itemPath: '/built_in_appliances',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Уборка, уход за одеждой',
                itemPath: '/cleaning',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Климатическая техника',
                itemPath: '/climate',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Приготовление пищи',
                itemPath: '/cooking',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
        ],

    },
    {
        catalogueNameType: 'forkids',
        catalogueName: 'Для детей',
        ListItem: [
            {
                itemName: 'Крупногабаритная техника',
                itemPath: '/bulky_machines',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Встраиваемая техника',
                itemPath: '/built_in_appliances',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Уборка, уход за одеждой',
                itemPath: '/cleaning',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Климатическая техника',
                itemPath: '/climate',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Приготовление пищи',
                itemPath: '/cooking',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Приготовление кофе и чая',
                itemPath: '/tea_and_coffee',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Подготовка и обработка продуктов',
                itemPath: '/food_processing',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Уход за волосами и телом',
                itemPath: '/hygienics',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Техника для здоровья',
                itemPath: '/health',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Сопутствующие товары и аксессуары',
                itemPath: '/accessories',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
        ],
    },
    {
        catalogueNameType: 'education',
        catalogueName: 'Образование',
        ListItem: [
            {
                itemName: 'Крупногабаритная техника',
                itemPath: '/bulky_machines',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Встраиваемая техника',
                itemPath: '/built_in_appliances',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Уборка, уход за одеждой',
                itemPath: '/cleaning',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Климатическая техника',
                itemPath: '/climate',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Приготовление пищи',
                itemPath: '/cooking',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Приготовление кофе и чая',
                itemPath: '/tea_and_coffee',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Подготовка и обработка продуктов',
                itemPath: '/food_processing',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Уход за волосами и телом',
                itemPath: '/hygienics',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Техника для здоровья',
                itemPath: '/health',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
            {
                itemName: 'Сопутствующие товары и аксессуары',
                itemPath: '/accessories',
                ListItem: [
                    {
                        itemPath: '/fridges',
                        itemName: 'Холодильники',
                    },
                    {
                        itemPath: '/freezers',
                        itemName: 'Морозильники',
                    },
                    {
                        itemPath: '/washmachines',
                        itemName: 'Стиральные машины',
                    },
                    {
                        itemPath: '/driers',
                        itemName: 'Сушильные машины',
                    },
                    {
                        itemPath: '/stovehoods',
                        itemName: 'Вытяжки',
                    },
                    {
                        itemPath: '/cookers',
                        itemName: 'Кухонные плиты',
                    },
                    {
                        itemPath: '/dishwashers',
                        itemName: 'Посудомоечные машины',
                    },
                    {
                        itemPath: '/wineracks',
                        itemName: 'Винные шкафы',
                    },
                ],
            },
        ],
    },
];

export const CatalogueTitles = () => {
    return (
        <div className={"CatalogueFull"}>
            {
                CatalogueListNames.map((itemData, index) => {
                    return (
                        <div className={'CatalogueItem ' + [itemData.classRight]}>
                            <CatalogueNameItem
                                key={`${itemData.catalogueNameType}` + {index}}
                                type={itemData.catalogueNameType}>{itemData.catalogueName}</CatalogueNameItem>
                            {
                                    <ul>

                                        {itemData.ListItem.map((item, index) => (
                                            <Item item={item} key={index}/>
                                        ))}

                                    </ul>

                            }

                        </div>
                    )
                })
            }
        </div>/*catalogue full*/
    )
};/*catalogue titles*/

