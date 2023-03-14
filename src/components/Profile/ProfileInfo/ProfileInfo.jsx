import React from 'react'
import s from './ProfileInfo.module.css'


const Profile = (props) => {
    return (
        <>
            <div className={s.backgroundPicture}>
                <img src='https://images.unsplash.com/photo-1664023937999-5937f62d0f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2489&q=80'></img>
            </div>

            <div className={s.descriptionBlock}>
                <img scr='https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'></img>
                ava + description
            </div>
        </>
    );
}

export default Profile;
