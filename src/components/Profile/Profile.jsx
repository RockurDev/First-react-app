import React from 'react';
<<<<<<< HEAD
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'
// import s from './Profile.modules.css';
=======
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.modules.css'
>>>>>>> 36bef21 (add context API)


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
<<<<<<< HEAD
            <MyPosts 
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch} />
=======
            <MyPostsContainer />
>>>>>>> 36bef21 (add context API)
        </div>
    )
};

export default Profile;