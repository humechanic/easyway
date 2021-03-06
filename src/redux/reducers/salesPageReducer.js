const initialState = {
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

    allStockElements: function() {
        return this.StockElements
    },
    getStockElement: function(path) {
        const SingleElem = elem => elem.path === path;
        return this.StockElements.find(SingleElem)
    }
};

function salesPageReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}

export default salesPageReducer;