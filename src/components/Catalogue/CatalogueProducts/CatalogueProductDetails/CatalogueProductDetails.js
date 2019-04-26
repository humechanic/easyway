import React from 'react';
import './CatalogueProductDetails.css';

const CatalogueProductDetails = (props) => {
    return (
        <div className={'CatalogueProductDetails'}>
            <h2>Описание:</h2>
            <p>Основные характеристики:</p>
            <div className={'DetailedDescription'}>
                <span>Исполнение</span><span>{props.design}</span>
                <span>Конструкция</span><span>{props.construction}</span>
                <span>Система охлаждения</span><span>{props.freezingSystem}</span>
                <span>Цвет</span><span>{props.color}</span>
                <span>Количество компрессоров</span><span>{props.compressorAmount}</span>
                <span>Количество полок</span><span>{props.shelfAmount}</span>
                <span>Количество отделений морозильной камеры</span><span>{props.iceBoxAmount}</span>
                <span>Полезный объём</span><span>{props.usefulVolume}</span>
                <span>Управление</span><span>{props.control}</span>
                <span>Класс энергоэффективности</span><span>{props.effectiveClass}</span>
                <span>Уровень шума</span><span>{props.noiseLevel}</span>
            </div>
            <hr/>
            <p>Конструкция:</p>
            <div className={'DetailedDescription'}>
            <span>Исполнение</span><span>{props.design}</span>
            </div>
        </div>
    )
};

export default CatalogueProductDetails;