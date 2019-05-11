import React from 'react';
import './OrganizationData.css';
import {connect} from 'react-redux';

const OrganizationData = (props) => {
    return (
        <div className={"UserBlock"}>
            <div className={"Avatar"}>
                <img src={props.userData.avatar} alt={'avatar'}/>
                <a className={"Edit"} href={"#top"}>редактировать</a>

            </div>
            <div className={"UserInfo"}>
                <p>{props.userData.name}</p>

                <p className={"Weak"}>Зарегистрирован:<br/>
                    <span className={"UserInfoText"}>{props.userData.registrationDate}</span>
                </p>

                <p className={"Weak"}>Сфера деятельности:<br/>
                    <span className={"UserInfoText"}>{props.userData.occupation}</span>
                </p>

            </div>
            {props.children}
        </div>
    )
};

function mapStateToProps(state) {
    return {
      userData: state.userData.PersonalInformation[1],
    }
}

export default connect(mapStateToProps)(OrganizationData);