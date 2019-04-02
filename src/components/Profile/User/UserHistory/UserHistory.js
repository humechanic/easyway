import React, {Component} from 'react';
import './UserHistory.css'

class UserHistory extends Component{
    constructor(props) {
        super(props);
        this.state = {
            UserPaymentHistory: [
                {
                    Date:'03.04.2015',
                    Organization:'Детский дом № 11 г. Минска',
                    Sum:'200 руб.',
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

        }
    };

    render () {
        return (
            <div className={"UserHistoryBox"}>
                <div className={"UserHistory"}>
                    <h4 className={"UserHistoryTitle"}>История платежей </h4>
                    <ul className={"UserHistoryItems"}>
                        <li>Дата</li>
                        <li>Организация</li>
                        <li>Сумма</li>
                    </ul>
                    {
                        this.state.UserPaymentHistory.map((UserPaymentHistory, index) => {
                            return (
                                <ul key={index} className={"Payments"}>
                                    <li>{UserPaymentHistory.Date}</li>
                                    <li>{UserPaymentHistory.Organization}</li>
                                    <li>{UserPaymentHistory.Sum}</li>
                                </ul>

                            )
                        })
                    }

                </div>
                <a className={"wholeHistory"} href={"#top"}>Вся история</a>
            </div>
        )
    }
}

export default UserHistory;