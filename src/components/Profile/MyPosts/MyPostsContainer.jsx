import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextCreator } from '../../../redux/profile-reducer'
// import StoreContext from '../../../StoreContext';
// import MyPostsContainer from './MyPostsContainer';
import { connect } from 'react-redux';


// const MyPostsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();

//                     let addPost = () => {
//                         store.dispatch(addPostActionCreator());
//                         // props.addPost();
//                     };

//                     let onPostChange = (text) => {
//                         // let text = newPostElement.current.value;
//                         // props.updateNewPostText(text);
//                         let action = updateNewPostTextCreator(text);
//                         store.dispatch(action);
//                     };

//                     return <MyPosts
//                         updateNewPostText={onPostChange}
//                         addPost={addPost}
//                         posts={state.profilePage.posts}
//                         newPostText={state.profilePage.newPostText}
//                     />
//                 }
//             }
//         </StoreContext.Consumer>)
// };

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;