import React from 'react';
import s from './Style/Sections.module.css';

const Sections = () => {
    return (
        <div class={s.section__list}>
            <div class={s.section}>
                <div class={s.section__amount}>12К</div>
                <div class={s.ection__text}>Подписчиков</div>
            </div>
            <div class={s.section}>
                <div class={s.section__amount}>56</div>
                <div class={s.section__text}>Подписок</div>
            </div>
            <div class={s.section}>
                <div class={s.section__amount}>4</div>
                <div class={s.section__text}>Публикации</div>
            </div>

        </div>
    );
}

export default Sections;