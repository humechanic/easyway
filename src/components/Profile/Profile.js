import React from 'react'
import classes from './Profile.module.css'

const Profile = (props) => {
        return (
            <div className={classes.Profile}>
                <i className={'fas fa-user'}><a href="#">Личный кабинет</a></i>
            </div>
        )
    };

export default Profile;