import React from 'react';
import s from './MyPosts.modules.css';
import Post from './Post/Post'


const MyPosts = () => {
    return (
        <div>
            <p> My posts:
                <div>
                    <textarea value='Поведай, путник, что у тебя интересного?'>Введите текст:</textarea>
                    <button>Add post</button>
                </div>
            </p>

            <div className={s.posts}>
                <Post message='Hi, how are you?' likesCount='12' />
                <Post message="It's my first post!" likesCount='19' />
                <Post message='My project will bring to everyone peaceful mood :)'/>
            </div>

        </div>
    )
};


export default MyPosts;