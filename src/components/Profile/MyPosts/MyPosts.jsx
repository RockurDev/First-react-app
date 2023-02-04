import React from 'react';
import s from './MyPosts.modules.css';
import Post from './Post/Post'


const MyPosts = () => {

    let posts = [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 1, message: "It's my first post!", likesCount: 19 },
        { id: 1, message: 'My project will bring to everyone peaceful mood :)', likesCount: 3 }
    ]

    let postsElement = posts
        .map(p => <Post message={p.message} likesCount={p.likesCount} />
        )

    return (
        <>
            <h3>My posts:</h3>
            <div>
                <textarea onChange={'Поведай, путник, что у тебя интересного?'}>Введите текст:</textarea>
                <button>Add post</button>
            </div>

            <div className={s.posts}>
                {postsElement}
            </div>

        </>
    )
};


export default MyPosts;