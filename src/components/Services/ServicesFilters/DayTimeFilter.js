import React from 'react';
import './DayTimeFilter.css';

const ServiceFilters = (props) => {
    return (
        <div className={'Filters'}>
        <label className={'ServiceFilter'}>
            <select>
                <option value="" disabled selected>Расположение</option>
                <option>поближе</option>
                <option>подальше</option>
                <option>в париже</option>
                <option>без фальши</option>
            </select>
        </label>
            <label className={'ServiceFilter'}>
                <select>
                    <option value="" disabled selected>Время работы</option>
                    <option>Утром</option>
                    <option>Вечером</option>
                    <option>Ночью</option>
                    <option>Предвечером</option>
                </select>
            </label>
        </div>

    )
};

export default ServiceFilters;