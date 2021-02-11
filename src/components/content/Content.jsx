import React from 'react';
import Profile from '../profile/Profile';
import Posts from '../posts/Posts';
import s from './Content.module.css';

const Content = () => {
    return (
        <div className="container">
            <div className={s.content__inner}>
                <Profile/>
                <Posts/>
            </div>
        </div>
    );
}

export default Content;