import ProjectImage from './../../img/UserProfile/CharityProject1.png';
import ProjectImage1 from './../../img/UserProfile/CharityProject2.png';
import ProjectImage2 from './../../img/UserProfile/HappyKids.png';

const initialState = {
    projects: [
        {
            title: 'Оплата расходов на оказание бесплатной паллиативной медицинской помщи детям с тяжелыми заболеваниями',
            info: 'Белорусский детский хоспис',
            ProjectImage: ProjectImage,
        },
        {
            title: 'Оплата расходов на оказание бесплатной паллиативной медицинской помщи детям с тяжелыми заболеваниями',
            info: 'Белорусский детский хоспис',
            ProjectImage: ProjectImage1,
        },
        {
            title: 'Оплата расходов на оказание бесплатной паллиативной медицинской помщи детям с тяжелыми заболеваниями',
            info: 'Белорусский детский хоспис',
            ProjectImage: ProjectImage2,
        },
        {
            title: 'Оплата расходов на оказание бесплатной паллиативной медицинской помщи детям с тяжелыми заболеваниями',
            info: 'Белорусский детский хоспис',
            ProjectImage: ProjectImage1,
        },
        {
            title: 'Оплата расходов на оказание бесплатной паллиативной медицинской помщи детям с тяжелыми заболеваниями',
            info: 'Белорусский детский хоспис',
            ProjectImage: ProjectImage,
        },
    ],
};

function projectReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}

export default projectReducer;