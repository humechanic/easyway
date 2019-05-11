import React from 'react';
import './UserHistory.css';
import { connect } from 'react-redux';

const UserHistory = (props) => {
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
                    props.userPaymentHistory.map((UserPaymentHistory, index) => {
                        return (
                            <ul key={index + [UserPaymentHistory.Organization]} className={"Payments"}>
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
};

function mapStateToProps(state) {
    return {
        userPaymentHistory: state.userData.UserPaymentHistory,
    }
}

export default connect(mapStateToProps)(UserHistory);