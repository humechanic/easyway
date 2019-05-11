import itemImage from './../../img/Catalogue/itemImage.png';


const DISPLAY_BLOCK = 'DISPLAY_BLOCK';
const DISPLAY_LIST = 'DISPLAY_LIST';

const initialState = {
        CatalogueNameItems: [
            {
                catalogueNameType: 'appliance',
                catalogueName: 'Бытовая техника',
            },
            {
                catalogueNameType: 'beauty',
                catalogueName: 'Красота и здоровье',
            },
            {
                catalogueNameType: 'sport',
                catalogueName: 'Спорт и туризм',
            },
            {
                catalogueNameType: 'forkids',
                catalogueName: 'Для детей',
            },
            {
                catalogueNameType: 'education',
                catalogueName: 'Образование',
            },
            {
                catalogueNameType: 'catalogue',
                catalogueName: 'Весь каталог',
            },

        ],
        CatalogueListNames: [
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
        ],
        Products: [
            {
                id: 1,
                path: 'atlantМХМ2826-90',
                productName: 'Холодильник ATLANT МХМ 2826-90',
                productDesc: 'без всяких там No Frost, механическое управление, класс A, полезный объём: 288 л (235 + 53 л), 60x63x167 см, белый',
                itemImg: itemImage,
                productPrice: 900,
                offers: '13',
                design: 'свободностоящее',
                construction: 'с нижней морозильной камерой',
                freezingSystem: 'No Frost',
                color: 'нержавеющая сталь',
                processorAmount: '1',
                shelfAmount: '5',
                iceBoxAmount: '3',
                usefulVolume: '351л',
                control: 'электронное',
                effectiveClass: 'A+',
                noiseLevel: '38дБ',
            },
            {
                id: 2,
                path: 'atlantМХМ2226-90',
                productName: 'Холодильник ATLANT МХМ 2226-90',
                productDesc: 'без No Frost, механическое управление, класс A, полезный объём: 288 л (235 + 53 л), 60x63x167 см, белый',
                itemImg: itemImage,
                productPrice: 130,
                offers: '12',
                design: 'дностоящее',
                construction: 'с ержановской морозильной камерой',
                freezingSystem: 'No Frost No cholodilnik',
                color: 'валерийская сталь',
                processorAmount: '2',
                shelfAmount: '15',
                iceBoxAmount: '43',
                usefulVolume: '1231л',
                control: 'электронное и механическое',
                effectiveClass: '1+',
                noiseLevel: '3дБ',
            },
            {
                id: 3,
                path: 'boschmxm4446-90',
                productName: 'Холодильник BOSCH МХМ 4446-90',
                productDesc: 'заменить текст No Frost, механическое управление, класс A, полезный объём: 288 л (235 + 53 л), 60x63x167 см, белый',
                itemImg: itemImage,
                productPrice: 100,
                offers: '15',
                design: 'стоящее на коне, как Король Ночи',
                construction: 'с нночной морозильной камерой',
                freezingSystem: 'No Human Kingdom',
                color: 'нержавеющий магический лед',
                processorAmount: '90',
                shelfAmount: '17',
                iceBoxAmount: '13',
                usefulVolume: '12351л',
                control: 'ледянной коловрат',
                effectiveClass: '+9999',
                noiseLevel: '-2дБ + 4дб(шелест костяшек)',
            },

        ],
        ProductsPageState: {
            displayBlock: false,
            sorted: {
                price: false,
                sale: false,
                mostBought: false
            },
        },
        allProducts: function () {
            return this.Products
        },
        getProduct: function(path) {
            const ProductItem = p => p.path === path;
            return this.Products.find(ProductItem);
        },
};

function cataloguePageReducer(state = initialState, action) {
    switch (action.type) {
        case DISPLAY_BLOCK: {
            let nextState = {...state,
            ProductsPageState: {...state.ProductsPageState}
            };
            //stateCopy.ProductsPageState = {...stateCopy.sorted};
            nextState.ProductsPageState.displayBlock = true;
            return nextState;
        }
        case DISPLAY_LIST: {
            let nextState = {...state};
            //stateCopy.ProductsPageState = {...stateCopy.sorted};
            nextState.ProductsPageState.displayBlock = false;
            return nextState;
        }
        default:
            return state
    }
}

export const displayBlockAC = () => ({type: DISPLAY_BLOCK});
export const displayListAC = () => ({type: DISPLAY_LIST});

export default cataloguePageReducer;