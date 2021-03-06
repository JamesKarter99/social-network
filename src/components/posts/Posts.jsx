import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';

import imagePost1 from './../../images/post_1.jpg';
import imagePost2 from './../../images/post_2.jpg';
import imagePost3 from './../../images/post_3.jpg';
import imagePost4 from './../../images/post_4.jpg';

const Posts = () => {
    return (
        <div class={s.posts}>
            <Post title='Почему путешествия делают нас счастливее?' date='09.02.2020 14:15' img='https://all.accor.com/magazine/imagerie/1-e6c7.jpg' text='Путешествие для каждого является индивидуальным. Услышав слово «путешествие» всем на ум приходят свои ассоциации: длительная поездка с друзьями в туристическом трейлере, не менее захватывающее путешествие автостопом, вспоминаются красоты других стран, несколько дневный хайкинг на длительное расстояние, восхождение в горы или все то, о чем вы мечтаете.'
            />
            <Post title='Извечный вопрос путешественника: "Как сделать идеальное фото?' date='09.02.2020 14:15' img='https://o.mandruy.com/wp-content/uploads/2017/02/pexels-photo-915972-1-768x512.jpg' text='Иногда обычного снимка бывает недостаточно. Когда вы показываете дома фотографии, сделанные в путешествии, то хочется увидеть на лицах окружающих явно не скуку. Хочется видеть восторг, удивление и радость. Чтобы на лицах вашей семьи были именно такие эмоции, фотография должна быть интересной, оригинальной и завораживающей. Такие фотографии сделать трудно, но можно. Я дам вам несколько полезных советов.'
            />
            <Post title='Как правильно выбрать место для фотосессии?' date='09.02.2020 14:15' img='https://euroroaming.ru/wp-content/uploads/2018/05/puteshestvie-v-odinochku-1.jpeg' text='Выбор места для фотосессии – сложный выбор, но выполнимый. Если внимательно приглядеться, то можно найти очарование в местах, где вы бывали сотни раз. Вы просто не замечали этого. Исследование своего города и окрестностей принесет вам много интересных и необычных фотографий. Рассматривая красивые фотографии, вы наверняка неоднократно думали, как же возможно сделать такие чудесные фотографии? Как удалось фотографам уловить цветовую палитру, свет и пейзаж? Хотя бы раз, но вы точно задавались подобными вопросами. Если вы наткнулись на эту статью, то вы, скорее всего, не профессиональный фотограф, а новичок, который ищет вдохновения или подсказки. Если же вы, всё-таки, профессионал, то думаем, вы почерпнете для себя здесь что-нибудь новое.'
            />
            <Post title='Лучше один раз увидеть, чем сто раз услышать' date='09.02.2020 14:15' img='http://www.menslife.com/upload/iblock/b0d/puteshestvie_1_.jpg' text='В современном мире мало рассказать о своем путешествии. Сейчас никто не поверит в то, что вы побывали в интересной и необычной стране, если вы не предоставите фотографии. Рассказы о достопримечательностях города и его людях нужно подтверждать в обязательном порядке фотографиями. Как говорится: « Лучше один раз увидеть, чем сто раз услышать».'
            />
            
        </div> 
    );
}

export default Posts;