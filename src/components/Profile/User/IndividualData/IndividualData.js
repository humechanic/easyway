import React, {Component} from 'react';
import './IndividualData.css';
import Avatar from './../../../../img/UserProfile/IndAvatar.png';

class IndividualData extends Component {
    constructor(props) {
        super(props);
        this.state = {

            Avatar: Avatar,
            Name: 'ЮРИЙ СЕМЕНОВИЧ',
            RegistrationDate: '19.01.2005',
            Age: '29',
            Phone: '+375 11 123 45 67',
        }
    }

    render() {
        return (
            <div className={"IndividualBlock"}>
                <div className={"IndividualUserAvatar"}>
                    <img src={this.state.Avatar} alt={'avatar'}/>
                    <a className={"Edit"} href={"#top"}>редактировать</a>

                </div>
                <div className={"UserInfo"}>
                    <p>{this.state.Name}</p>

                    <p className={"Weak"}>Зарегистрирован:<br/>
                        <span className={"UserInfoText"}>{this.state.RegistrationDate}</span>
                    </p>

                    <p className={"Weak"}>Возраст:<br/>
                        <span className={"UserInfoText"}>{this.state.Age}</span>
                    </p>

                    <p className={"Weak"}>Телефон:<br/>
                        <span className={"UserInfoText"}>{this.state.Phone}</span>
                    </p>

                </div>
                {this.props.children}
            </div>


        )
    }
}

export default IndividualData;