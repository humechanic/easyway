import React from 'react';
import './IndividualData.css';
import {connect} from "react-redux";

const IndividualData = (props) => {
        return (
            <div className={"IndividualBlock"}>
                <div className={"IndividualUserAvatar"}>
                    <img src={props.userData.avatar} alt={'avatar'}/>
                    <a className={"Edit"} href={"#top"}>редактировать</a>
                </div>
                <div className={"UserInfo"}>
                    <p>{props.userData.name}</p>

                    <p className={"Weak"}>Зарегистрирован:<br/>
                        <span className={"UserInfoText"}>{props.userData.registrationDate}</span>
                    </p>

                    <p className={"Weak"}>Возраст:<br/>
                        <span className={"UserInfoText"}>{props.userData.age}</span>
                    </p>

                    <p className={"Weak"}>Телефон:<br/>
                        <span className={"UserInfoText"}>{props.userData.phone}</span>
                    </p>
                </div>
                {props.children}
            </div>
        )
};

function mapStateToProps(state) {
    return {
        userData: state.userData.PersonalInformation[0],
    }
}

export default connect(mapStateToProps)(IndividualData);