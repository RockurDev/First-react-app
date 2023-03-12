import React from 'react';
import s from './MyPosts.modules.css';
import Post from './Post/Post'
<<<<<<< HEAD
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
=======


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
>>>>>>> 36bef21 (add context API)

    return (
        <>
            <h3>My posts:</h3>
            <div>
<<<<<<< HEAD
                {/* onChange={'Поведай, путник, что у тебя интересного?'} */}
=======
>>>>>>> 36bef21 (add context API)
                <textarea onChange={ onPostChange }
                          ref={newPostElement} 
                          value={props.newPostText}
                          placeholder='Enter your text:' />
<<<<<<< HEAD
                <button onClick={ addPost }>Add post</button>
=======
                <button onClick={ onAddPost }>Add post</button>
>>>>>>> 36bef21 (add context API)
            </div>

            <div className={s.posts}>
                {postsElement}
            </div>
        </>
    )
};


export default MyPosts;