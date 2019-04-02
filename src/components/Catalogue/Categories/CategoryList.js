import React from 'react';
import CategoryName from "./CategoryName";
import PriceFilter from './../PriceFilter';
import './CategoryList.css';
import RangeSlider from "./../../RangeSlider/RangeSlider";

const ListNames = [
    {
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
    },
    {
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
    },
    {
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
    },
];

const CategoryList = (props) => {
  return (
          <div className={'Categories'}>
              <CategoryName>Исполнение</CategoryName>
              <select className={'selects'}>
                  <option>Все</option>
                  <option>Горизонт</option>
                  <option>Витязь</option>
                  <option>Атлант</option>
                  <option>Гефест</option>
              </select>
              <CategoryName>Производитель</CategoryName>
              <select className={'selects'}>
                  <option>Все</option>
                  <option>Горизонт</option>
                  <option>Витязь</option>
                  <option>Атлант</option>
                  <option>Гефест</option>
              </select>
              <CategoryName>Конструкция</CategoryName>
              <select className={'selects'}>
                  <option>Все</option>
                  <option>Горизонт</option>
                  <option>Витязь</option>
                  <option>Атлант</option>
                  <option>Гефест</option>
              </select>
              <CategoryName>Цена</CategoryName>
              <RangeSlider/>
              <CategoryName>Система охлаждения</CategoryName>
              <select className={'selects'}>
                  <option>Все</option>
                  <option>Горизонт</option>
                  <option>Витязь</option>
                  <option>Атлант</option>
                  <option>Гефест</option>
              </select>
              <CategoryName>Магазины</CategoryName>
              <div style={{
                  display: 'flex',
              }}>
                  <div style={{
                      display: 'flex',
                  }}>
                  <input type={'checkbox'} style={{height: '15px', width: '15px'}}/>
                      <span style={{
                          fontSize: '14px',
                      }}>Склад</span>
                  </div>
                  <div style={{
                      display: 'flex',
                      marginLeft: '3%',
                  }}>
                  <input type={'checkbox'} style={{height: '15px', width: '15px'}}/>
                      <span style={{
                      fontSize: '14px',
                  }}>ТЦ "Глобо"</span>
                  </div>
              </div>
          </div>

  )
};

export default CategoryList;