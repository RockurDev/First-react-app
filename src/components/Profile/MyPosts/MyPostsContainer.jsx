import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextCreator } from '../../../redux/profile-reducer'
import StoreContext from '../../../StoreContext';


const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                        // props.addPost();
                    };

                    let onPostChange = (text) => {
                        // let text = newPostElement.current.value;
                        // props.updateNewPostText(text);
                        let action = updateNewPostTextCreator(text);
                        store.dispatch(action);
                    };

                    return <MyPosts
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}
                    />
                }
            }
        </StoreContext.Consumer>)
};

export default MyPostsContainer;