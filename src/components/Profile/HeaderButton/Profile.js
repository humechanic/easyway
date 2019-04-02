import React from 'react'
import classes from './Profile.module.css';
import { Link } from 'react-router-dom';

const Profile = (props) => {
        return (
            <div className={classes.Profile}>
                <i className={'fas fa-user'}><Link to="/profile">Личный кабинет</Link></i>
            </div>
        )
    };

export default Profile;