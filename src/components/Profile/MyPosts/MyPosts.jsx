import React from 'react';
import s from './MyPosts.modules.css';
import Post from './Post/Post'
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profile-reducer' 


const MyPosts = (props) => {
    let postsElement = props.posts
        .map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostCreator());
    }
    
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextCreator(text);
        props.dispatch(action);
    }

    return (
        <>
            <h3>My posts:</h3>
            <div>
                {/* onChange={'Поведай, путник, что у тебя интересного?'} */}
                <textarea onChange={ onPostChange }
                          ref={newPostElement} 
                          value={props.newPostText}
                          placeholder='Enter your text:' />
                <button onClick={ addPost }>Add post</button>
            </div>

            <div className={s.posts}>
                {postsElement}
            </div>
        </>
    )
};


export default MyPosts;