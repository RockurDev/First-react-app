import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import s from './Profile.modules.css';


const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
};

export default Profile;