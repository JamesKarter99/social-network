import React from 'react';
import s from './Style/Header.module.css';

const Header = () => {
    return (
        <div className={s.header}>
            <div className="container">
                <div className={s.nav}>
                    <a href="#" className={s.nav__link}>Новости</a>
                    <a href="#" className={s.nav__link}>Рекомендации</a>
                    <a href="#" className={s.nav__link}>Профиль</a>
                    <a href="#" className={s.nav__link}>Подписки</a>
                    <a href="#" className={s.nav__link}>Настройки</a>
                </div>
            </div>
        </div>
    );
}

export default Header;