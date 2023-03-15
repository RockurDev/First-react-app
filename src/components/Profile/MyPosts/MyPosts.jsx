import React from 'react';
import s from './MyPosts.modules.css';
import Post from './Post/Post'


const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };
    
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <>
            <h3>My posts:</h3>
            <div>
                <textarea onChange={ onPostChange }
                          ref={newPostElement} 
                          value={props.newPostText}
                          placeholder='Enter your text:' />
                <button onClick={ onAddPost }>Add post</button>
            </div>

            <div className={s.posts}>
                {postsElement}
            </div>
        </>
    )
};


export default MyPosts;