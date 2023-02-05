import React from 'react';
import s from './MyPosts.modules.css';
import Post from './Post/Post'


const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

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