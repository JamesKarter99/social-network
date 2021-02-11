import React from 'react';
import s from './Style/Profile.module.css';
import Sections from './Sections';
import profileAvatar from './../Images/avatar.png';

const Profile = () => {
    return (
        <div className={s.profile}>
            <div className={s.profile__avatar}>
                <img src={profileAvatar} alt=""/>
            </div>
            <div className={s.profile__name}>
                Владимир Иванов
            </div>
            <div className={s.profile__proff}>
                Fullstack разработчик
            </div>

            <a href="#" className={s.profile__btn}>Подписаться</a>

            <Sections/>

        </div> 
    );
}

export default Profile;