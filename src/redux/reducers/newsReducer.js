const initialState = {
    News: [
        {
            title: 'Благодаря нашим пожертвованиям, десткий дом №12 смог приобрести новую мебель, мягкие игрушки и техническое оборудование, что обеспечивает качество проживания детей на высоком уровне',
            background: 'Block',
        },
        {
            title: 'Помощь многодетным семьям - это всегда огромная волна позитива и приятных эмоций. Ведь счастье не убавляется от того, что им делишься, так же как и огонь свечи не гаснет от зажжения другой свечи',
            background: 'Block1',
        },
        {
            title: 'В детском доме №2 прошла благотворительная акция "Неделя лета", в ходе которой были разыграны суперпризы от спонсовров акции и проведено около 100 мероприятий для детей культурно-массового, образовательного и развлекательного характеров',
            background: 'Block2',
        },
        {
            title: 'Благодаря нашим пожертвованиям, десткий дом №12 смог приобрести новую мебель, мягкие игрушки и техническое оборудование, что обеспечивает качество проживания детей на высоком уровне',
            background: 'Block',
        },
        {
            title: 'В детском доме №2 прошла благотворительная акция "Неделя лета", в ходе которой были разыграны суперпризы от спонсовров акции и проведено около 100 мероприятий для детей культурно-массового, образовательного и развлекательного характеров',
            background: 'Block2',
        },
    ],
};

function newsReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}

export default newsReducer;