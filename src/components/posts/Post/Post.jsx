import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div class={s.post}>
            <div class={s.post__content}>
                <div class={s.post__title}>{props.title}</div>
                <div class={s.post__date}>{props.date}</div>
                <div class={s.post__text}>{props.text}</div>
            </div>
            <div class={s.post__img}>
                <img src={props.img} alt="" />
            </div>
        </div>
    );
}

export default Post;