import React from 'react';
import StockItem from './StockItem';
import './Stock.css';
import { Link, Route } from 'react-router-dom'
import CurvyTitle from "../CurvyWavePageDecor/CurvyTitle";
import TextBlock from "../TextBlock/TextBlock";

const StockAPI = {

    StockElements: [
        {
            title: '15%',
            info: 'Скидка на размещение в каталоге',
            type: 'blue',
            background: 'Cart',
            waveLength: '..........',
            path: 'first',
            terms: '1 В процессе своей деятельности предприятие должно принимать ряд решений: какой товар или номенклатуру товаров следует выпускать и продавать; на какие рынки надо выходить с этим товаром и как укрепить свои позиции на рынке; как выбрать оптимальную технологию производства; какие материалы приобретать и как их использовать; как распределить имеющиеся модели и финансовые ресурсы; \n' +
            'каких показателей своей деятельности предприятие предпочитает (должно) достигнуть в отношении технических характеристик выпускаемого товара, его качества, эффективности производства.\n' +
            'В процессе своей деятельности предприятие должно принимать ряд решений: какой товар или номенклатуру товаров следует выпускать и продавать; на какие рынки надо выходить с этим товаром и как укрепить свои позиции на рынке; как выбрать оптимальную технологию производства; какие материалы приобретать и как их использовать; как распределить имеющиеся модели и финансовые ресурсы;\n' +
            'каких показателей своей деятельности предприятие предпочитает (должно) достигнуть в отношении технических характеристик выпускаемого товара, его качества, эффективности производства.',
        },
        {
            title: 'Призы!',
            info: 'Регистрируйся и участвуй в розыгрыше призов',
            type: 'red',
            background: 'Price',
            waveLength: '..................',
            path: 'second',
            terms: '2 В процессе своей деятельности предприятие должно принимать ряд решений: какой товар или номенклатуру товаров следует выпускать и продавать; на какие рынки надо выходить с этим товаром и как укрепить свои позиции на рынке; как выбрать оптимальную технологию производства; какие материалы приобретать и как их использовать; как распределить имеющиеся модели и финансовые ресурсы; \n' +
            'каких показателей своей деятельности предприятие предпочитает (должно) достигнуть в отношении технических характеристик выпускаемого товара, его качества, эффективности производства.\n' +
            'В процессе своей деятельности предприятие должно принимать ряд решений: какой товар или номенклатуру товаров следует выпускать и продавать; на какие рынки надо выходить с этим товаром и как укрепить свои позиции на рынке; как выбрать оптимальную технологию производства; какие материалы приобретать и как их использовать; как распределить имеющиеся модели и финансовые ресурсы;\n' +
            'каких показателей своей деятельности предприятие предпочитает (должно) достигнуть в отношении технических характеристик выпускаемого товара, его качества, эффективности производства.',

        },
        {
            title: 'Акция',
            info: 'Бесплатная неделя размещения в каталоге',
            type: 'yellow',
            background: 'Sale',
            waveLength: '..................',
            path: 'third',
            terms: '3 В процессе своей деятельности предприятие должно принимать ряд решений: какой товар или номенклатуру товаров следует выпускать и продавать; на какие рынки надо выходить с этим товаром и как укрепить свои позиции на рынке; как выбрать оптимальную технологию производства; какие материалы приобретать и как их использовать; как распределить имеющиеся модели и финансовые ресурсы; \n' +
            'каких показателей своей деятельности предприятие предпочитает (должно) достигнуть в отношении технических характеристик выпускаемого товара, его качества, эффективности производства.\n' +
            'В процессе своей деятельности предприятие должно принимать ряд решений: какой товар или номенклатуру товаров следует выпускать и продавать; на какие рынки надо выходить с этим товаром и как укрепить свои позиции на рынке; как выбрать оптимальную технологию производства; какие материалы приобретать и как их использовать; как распределить имеющиеся модели и финансовые ресурсы;\n' +
            'каких показателей своей деятельности предприятие предпочитает (должно) достигнуть в отношении технических характеристик выпускаемого товара, его качества, эффективности производства.',

        },
        {
            title: '25%',
            info: 'Скидка на размещение в каталоге',
            type: 'blue',
            background: 'Cart',
            waveLength: '..........',
            path: 'fourth',
            terms: '4 В процессе своей деятельности предприятие должно принимать ряд решений: какой товар или номенклатуру товаров следует выпускать и продавать; на какие рынки надо выходить с этим товаром и как укрепить свои позиции на рынке; как выбрать оптимальную технологию производства; какие материалы приобретать и как их использовать; как распределить имеющиеся модели и финансовые ресурсы; \n' +
            'каких показателей своей деятельности предприятие предпочитает (должно) достигнуть в отношении технических характеристик выпускаемого товара, его качества, эффективности производства.\n' +
            'В процессе своей деятельности предприятие должно принимать ряд решений: какой товар или номенклатуру товаров следует выпускать и продавать; на какие рынки надо выходить с этим товаром и как укрепить свои позиции на рынке; как выбрать оптимальную технологию производства; какие материалы приобретать и как их использовать; как распределить имеющиеся модели и финансовые ресурсы;\n' +
            'каких показателей своей деятельности предприятие предпочитает (должно) достигнуть в отношении технических характеристик выпускаемого товара, его качества, эффективности производства.',

        },
        {
            title: 'Призы!',
            info: 'Регистрируйся и участвуй в розыгрыше призов',
            type: 'red',
            background: 'Price',
            waveLength: '..................',
            path: 'fifth',
            terms: '5 В процессе своей деятельности предприятие должно принимать ряд решений: какой товар или номенклатуру товаров следует выпускать и продавать; на какие рынки надо выходить с этим товаром и как укрепить свои позиции на рынке; как выбрать оптимальную технологию производства; какие материалы приобретать и как их использовать; как распределить имеющиеся модели и финансовые ресурсы; \n' +
            'каких показателей своей деятельности предприятие предпочитает (должно) достигнуть в отношении технических характеристик выпускаемого товара, его качества, эффективности производства.\n' +
            'В процессе своей деятельности предприятие должно принимать ряд решений: какой товар или номенклатуру товаров следует выпускать и продавать; на какие рынки надо выходить с этим товаром и как укрепить свои позиции на рынке; как выбрать оптимальную технологию производства; какие материалы приобретать и как их использовать; как распределить имеющиеся модели и финансовые ресурсы;\n' +
            'каких показателей своей деятельности предприятие предпочитает (должно) достигнуть в отношении технических характеристик выпускаемого товара, его качества, эффективности производства.',

        },
        {
            title: 'Акция',
            info: 'Бесплатная неделя размещения в каталоге',
            type: 'yellow',
            background: 'Sale',
            waveLength: '..................',
            path: 'sixth',
            terms: '6 В процессе своей деятельности предприятие должно принимать ряд решений: какой товар или номенклатуру товаров следует выпускать и продавать; на какие рынки надо выходить с этим товаром и как укрепить свои позиции на рынке; как выбрать оптимальную технологию производства; какие материалы приобретать и как их использовать; как распределить имеющиеся модели и финансовые ресурсы; \n' +
            'каких показателей своей деятельности предприятие предпочитает (должно) достигнуть в отношении технических характеристик выпускаемого товара, его качества, эффективности производства.\n' +
            'В процессе своей деятельности предприятие должно принимать ряд решений: какой товар или номенклатуру товаров следует выпускать и продавать; на какие рынки надо выходить с этим товаром и как укрепить свои позиции на рынке; как выбрать оптимальную технологию производства; какие материалы приобретать и как их использовать; как распределить имеющиеся модели и финансовые ресурсы;\n' +
            'каких показателей своей деятельности предприятие предпочитает (должно) достигнуть в отношении технических характеристик выпускаемого товара, его качества, эффективности производства.',

        },
        {
            title: '35%',
            info: 'Скидка на размещение в каталоге',
            type: 'blue',
            background: 'Cart',
            waveLength: '..........',
            path: 'seventh',
            terms: '7 В процессе своей деятельности предприятие должно принимать ряд решений: какой товар или номенклатуру товаров следует выпускать и продавать; на какие рынки надо выходить с этим товаром и как укрепить свои позиции на рынке; как выбрать оптимальную технологию производства; какие материалы приобретать и как их использовать; как распределить имеющиеся модели и финансовые ресурсы; \n' +
            'каких показателей своей деятельности предприятие предпочитает (должно) достигнуть в отношении технических характеристик выпускаемого товара, его качества, эффективности производства.\n' +
            'В процессе своей деятельности предприятие должно принимать ряд решений: какой товар или номенклатуру товаров следует выпускать и продавать; на какие рынки надо выходить с этим товаром и как укрепить свои позиции на рынке; как выбрать оптимальную технологию производства; какие материалы приобретать и как их использовать; как распределить имеющиеся модели и финансовые ресурсы;\n' +
            'каких показателей своей деятельности предприятие предпочитает (должно) достигнуть в отношении технических характеристик выпускаемого товара, его качества, эффективности производства.',

        },
        {
            title: 'Призы!',
            info: 'Регистрируйся и участвуй в розыгрыше призов',
            type: 'red',
            background: 'Price',
            waveLength: '..................',
            path: 'eighth',
            terms: '8 В процессе своей деятельности предприятие должно принимать ряд решений: какой товар или номенклатуру товаров следует выпускать и продавать; на какие рынки надо выходить с этим товаром и как укрепить свои позиции на рынке; как выбрать оптимальную технологию производства; какие материалы приобретать и как их использовать; как распределить имеющиеся модели и финансовые ресурсы; \n' +
            'каких показателей своей деятельности предприятие предпочитает (должно) достигнуть в отношении технических характеристик выпускаемого товара, его качества, эффективности производства.\n' +
            'В процессе своей деятельности предприятие должно принимать ряд решений: какой товар или номенклатуру товаров следует выпускать и продавать; на какие рынки надо выходить с этим товаром и как укрепить свои позиции на рынке; как выбрать оптимальную технологию производства; какие материалы приобретать и как их использовать; как распределить имеющиеся модели и финансовые ресурсы;\n' +
            'каких показателей своей деятельности предприятие предпочитает (должно) достигнуть в отношении технических характеристик выпускаемого товара, его качества, эффективности производства.',

        },
        {
            title: 'Акция',
            info: 'Бесплатная неделя размещения в каталоге',
            type: 'yellow',
            background: 'Sale',
            waveLength: '..................',
            path: 'nine',
            terms: '9 В процессе своей деятельности предприятие должно принимать ряд решений: какой товар или номенклатуру товаров следует выпускать и продавать; на какие рынки надо выходить с этим товаром и как укрепить свои позиции на рынке; как выбрать оптимальную технологию производства; какие материалы приобретать и как их использовать; как распределить имеющиеся модели и финансовые ресурсы; \n' +
            'каких показателей своей деятельности предприятие предпочитает (должно) достигнуть в отношении технических характеристик выпускаемого товара, его качества, эффективности производства.\n' +
            'В процессе своей деятельности предприятие должно принимать ряд решений: какой товар или номенклатуру товаров следует выпускать и продавать; на какие рынки надо выходить с этим товаром и как укрепить свои позиции на рынке; как выбрать оптимальную технологию производства; какие материалы приобретать и как их использовать; как распределить имеющиеся модели и финансовые ресурсы;\n' +
            'каких показателей своей деятельности предприятие предпочитает (должно) достигнуть в отношении технических характеристик выпускаемого товара, его качества, эффективности производства.',

        },
    ],

    all: function() {
        return this.StockElements
    },
    get: function(path) {
        const SingleElem = p => p.path === path;
        return this.StockElements.find(SingleElem)
    }
};

export const Stock = (props) => {
const MainPage = props.MainPage;

    if (MainPage) {
        return (
            <div className={"Stock"}>
                {
                    StockAPI.all().map((StockList, index) => {
                        return (
                            <>
                                <Link
                                    key={`${StockList.path}` + {index}}
                                    to={`/sales/${StockList.path}`} className={[StockList.background] + " StockItem"}>
                                    <StockItem
                                        key={StockList.path}
                                        title={StockList.title}
                                        info={StockList.info}
                                        background={StockList.background}
                                        type={StockList.type}
                                        waveLength={StockList.waveLength}
                                        path={StockList.path}
                                    />
                                </Link>

                            </>

                        )
                    }).slice(0, 3)
                }
            </div>
        )
    }
    else {
        return (
            <div className={"Stock"}>
                {
                    StockAPI.all().map((StockList, index) => {
                        return (
                            <>
                                <Link
                                    key={`${StockList.path}` + {index} + 1}
                                    to={`/sales/${StockList.path}`}
                                    className={[StockList.background] + " StockItem"}>
                                    <StockItem
                                        key={StockList.path}
                                        title={StockList.title}
                                        info={StockList.info}
                                        background={StockList.background}
                                        type={StockList.type}
                                        waveLength={StockList.waveLength}
                                        path={StockList.path}
                                    />
                                </Link>
                                <Route path='/sales/:id' component={singleElement}/>
                            </>
                        )
                    })
                }
            </div>
        )
    }
};

export const singleElement = (props) => {
    const SingleStockElement = StockAPI.get(props.match.params.salePath);

    if (!SingleStockElement) {
        return <div>Sorry, but page was not found</div>
    }
    return (
        <>
            <div className={"Stock"}>
                <div className={[SingleStockElement.background] + " SingleStockItem"}>
                    <StockItem
                        key={SingleStockElement.path}
                        title={SingleStockElement.title}
                        info={SingleStockElement.info}
                        background={SingleStockElement.background}
                        type={SingleStockElement.type}
                        waveLength={SingleStockElement.waveLength}
                        path={SingleStockElement.path}
                    />

                </div>
            </div>
            <CurvyTitle

                title={'Условия:'}
                buttonType={"noBorder"} //yellow, blue, noBorder
                titleStyle={"fontSize"} //textBlack (white = default), fontSize (font-size: 40px)
            />
            <TextBlock>{SingleStockElement.terms}</TextBlock>
        </>
    )
};



export default Stock;