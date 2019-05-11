import logoBlrKCompany from './../../img/MainPage/logoBlrKCompany.png';
import logoGasProm from './../../img/MainPage/logoGasProm.png';
import logoBlrBank from './../../img/MainPage/logoBlrBank.png';

const initialState = {
    CharityList: [
        {
            type: 'red',
            moneyAmount: '13000',
            path: 'router',
            logo: logoBlrKCompany,
        },

        {
            type: 'blue',
            moneyAmount: '15000',
            path: 'router',
            logo: logoGasProm,
        },

        {
            type: 'yellow',
            moneyAmount: '10000',
            path: 'router',
            logo: logoBlrBank,
        },

    ],
    MoneyBlockList: [
        {
            title: 'получено средств',
            amount: '19900',
            style: 'blueBox',
        },
        {
            title: 'не распределено',
            amount: '4002',
            style: 'redBox',
        },
        {
            title: 'пожертвовано',
            amount: '15898',
            style: 'yellowBox',
        },
    ],
};

function homePageReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}

export default homePageReducer;