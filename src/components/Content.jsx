import React from 'react';
import Profile from './Profile';
import Posts from './Posts';
import s from './Style/Content.module.css';

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