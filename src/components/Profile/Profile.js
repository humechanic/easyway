import React, {Component} from 'react'
import classes from './Profile.module.css'

class Profile extends Component {
    render() {
        return (
            <div className={classes.Profile}>
                <i className={'fas fa-user'}><a>Личный кабинет</a></i>
            </div>
        )
    }
}

export default Profile;