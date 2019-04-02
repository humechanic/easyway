import React, { Component } from 'react';
import './OrganizationData.css'
import Avatar from './../../../../img/UserProfile/OrgAvatar.png'

class OrganizationData extends Component {
    constructor(props) {
        super(props);
        this.state = {

                   Avatar: Avatar,
                   Name: 'ООО "СВЕТОТЕХНИКА"',
                   RegistrationDate: '19.01.2005',
                   Occupation: 'оптовая продажа бытовой техники',
                }
        }

    render () {
        return (
            <div className={"UserBlock"}>
                <div className={"Avatar"}>
                    <img src={this.state.Avatar} alt={'avatar'}/>
                    <a className={"Edit"} href={"#top"}>редактировать</a>

                </div>
                <div className={"UserInfo"}>
                    <p>{this.state.Name}</p>

                    <p className={"Weak"}>Зарегистрирован:<br/>
                        <span className={"UserInfoText"}>{this.state.RegistrationDate}</span>
                    </p>

                    <p className={"Weak"}>Сфера деятельности:<br/>
                        <span className={"UserInfoText"}>{this.state.Occupation}</span>
                    </p>

                </div>
                {this.props.children}
            </div>


        )
    }
}

export default OrganizationData;