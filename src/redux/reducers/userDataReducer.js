import AvatarCompany from './../../img/UserProfile/OrgAvatar.png'
import AvatarIndividual from './../../img/UserProfile/IndAvatar.png';

const initialState = {
    PersonalInformation: [
        {
            id: 1,
            avatar: AvatarIndividual,
            name: 'ЮРИЙ СЕМЕНОВИЧ',
            registrationDate: '19.01.2005',
            age: '29',
            phone: '+375 11 123 45 67',
            type: 'individual',
        },
        {
            id: 2,
            avatar: AvatarCompany,
            name: 'ООО "СВЕТОТЕХНИКА"',
            registrationDate: '19.01.2005',
            occupation: 'оптовая продажа бытовой техники',
            type: 'company',
        },
    ],
    UserPaymentHistory: [
        {
            Date: '03.04.2015',
            Organization: 'Детский дом № 11 г. Минска',
            Sum: '200 руб.',
        },
        {
            Date: '03.04.2016',
            Organization: 'Детский дом № 12 г. Минска',
            Sum: '200 руб.',
        },
        {
            Date: '03.04.2017',
            Organization: 'Детский дом № 13 г. Минска',
            Sum: '200 руб.',
        },
        {
            Date: '03.04.2018',
            Organization: 'Детский дом № 14 г. Минска',
            Sum: '200 руб.',
        },
        {
            Date: '03.04.2019',
            Organization: 'Детский дом № 23 г. Минска',
            Sum: '200 руб.',
        },
    ],
};

function userDataReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}

export default userDataReducer;