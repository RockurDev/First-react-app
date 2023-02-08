import React from 'react';
import s from './MyPosts.modules.css';
import Post from './Post/Post'


const MyPosts = (props) => {
    let postsElement = props.posts
        .map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }
    
    let onPostChange = () => {
        debugger
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <>
            <h3>My posts:</h3>
            <div>
                {/* onChange={'Поведай, путник, что у тебя интересного?'} */}
                <textarea onChange={ onPostChange }
                          ref={newPostElement} 
                          value={props.newPostText} />
                <button onClick={ addPost }>Add post</button>
            </div>

            <div className={s.posts}>
                {postsElement}
            </div>
        </>
    )
};


export default MyPosts;