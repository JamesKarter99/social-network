import React from 'react';
import s from './Style/Intro.module.css';
import introImg from './../Images/intro.jpg';

const Nav = () => {
    return (
        <div className="intro">
            <div className="container">
                <div className={s.intro__img}>
                    <img src={introImg} alt=""/>
                </div>
            </div>
        </div> 
    );
}

export default Nav;