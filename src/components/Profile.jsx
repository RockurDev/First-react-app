import React from 'react';
import s from './Profile.modules.css';


const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://images.unsplash.com/photo-1664023937999-5937f62d0f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2489&q=80' alt='2'></img>
            </div>

            <div>
                <img scr='https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80' alt='ava'></img>
                ava + description
            </div>

            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={s.posts}>

                    <div className={s.item}>
                        Post 1
                    </div>

                    <div className={s.item}>
                        Post 2

                    </div>

                    <div className={s.item}>
                        Post 3

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Profile;