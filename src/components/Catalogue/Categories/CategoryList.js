import React from 'react';
import CategoryName from "./CategoryName";
import './CategoryList.css';
import RangeSlider from "./../../RangeSlider/RangeSlider";
import LocationFilter from "../LocationFilter";

const BrandName = {
    categoryName: 'Производитель',
    List: [
        {
            name: 'Все',
        },
        {
            name: 'Атлант',
        },
        {
            name: 'Витязь',
        },
        {
            name: 'Валькирия',
        },
        {
            name: 'Вафелька',
        },
    ],
};
const Design = {
        categoryName: 'Исполнение',
        List: [
            {
              name: 'Все',
            },
            {
                name: 'Какие',
            },
            {
                name: 'Варианты',
            },
            {
                name: 'Исполнения',
            },
            {
                name: 'Есть',
            },
        ],
    };
const Construction = {
        categoryName: 'Конструкция',
        List: [
            {
                name: 'Все',
            },
            {
                name: 'Атлант',
            },
            {
                name: 'Витязь',
            },
            {
                name: 'Валькирия',
            },
            {
                name: 'Вафелька',
            },
        ],
    };
const FreezingSystem = {
    categoryName: 'Система охлаждения',
    List:
        [
            {
                name: 'Все',
            },
            {
                name: 'Атлант',
            },
            {
                name: 'Витязь',
            },
            {
                name: 'Гефест',
            },
            {
                name: 'Горизонт',
            },
        ],
};

const BrandNameOptions = BrandName.List.map((BrandName, index) => {
    return (
        <option key={index}>{BrandName.name}</option>
    )
});
const DesignOptions = Design.List.map((Design, index) => {
    return (
        <option key={index}>{Design.name}</option>
    )
});
const ConstructionOptions = Construction.List.map((Construction, index) => {
    return (
        <option key={index}>{Construction.name}</option>
    )
});
const FreezingSystemOptions = FreezingSystem.List.map((FreezingSystem, index) => {
    return (
        <option key={index}>{FreezingSystem.name}</option>
    )
});


const CategoryList = () => {
    return (
        <div className={'Categories'}>
            <h3>Холодильники</h3>
            <CategoryName>{Design.categoryName}</CategoryName>
            <select className={'selects'}>
                {DesignOptions}
            </select>
            <CategoryName>{BrandName.categoryName}</CategoryName>
            <select className={'selects'}>
                {BrandNameOptions}
            </select>
            <CategoryName>{Construction.categoryName}</CategoryName>
            <select className={'selects'}>
                {ConstructionOptions}
            </select>
            <CategoryName>Цена</CategoryName>

            <RangeSlider/>

            <CategoryName>{FreezingSystem.categoryName}</CategoryName>
            <select className={'selects'}>
                {FreezingSystemOptions}
            </select>

            <CategoryName>Магазины</CategoryName>
            <div className={'LocationFiltersWrapper'}>
                <LocationFilter
                    LocationName={'Склад'}
                />
                <LocationFilter
                    LocationName={'ТЦ "Глобо"'}
                />
            </div>
        </div>
    )
};

export default CategoryList;