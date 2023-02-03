import React from 'react';
import s from './Post.modules.css';


const Post = (props) => {
    return (
        <div className={s.Post}>
            <img className={s.avatar} src='https://us.123rf.com/450wm/happyvector071/happyvector0711904/happyvector071190414500/happyvector071190414500.jpg?ver=6' alt=''></img>
                {props.message}
            <span><button>Like</button></span> {props.likesCount}

        </div>
    )
};

export default Post;