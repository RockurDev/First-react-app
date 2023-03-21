import React from 'react';
import s from './Users.module.css';


let Users = (props) => {

    if (props.users.length === 0) {
    props.setUsers([ 
        {
            id: 1,
            photoUrl: 'https://cdn-icons-png.flaticon.com/512/5556/5556512.png',
            followed: false,
            fullName: 'Nika',
            status: 'I am a photographer!',
            location: { city: 'New York', country: 'United States' }
        },
        {
            id: 2,
            photoUrl: 'https://cdn-icons-png.flaticon.com/512/5556/5556468.png',
            followed: false,
            fullName: 'Ilya',
            status: 'France is the place of love',
            location: { city: 'Moscow', country: 'Russia' }
        },
        {
            id: 3,
            photoUrl: 'https://cdn-icons-png.flaticon.com/512/5556/5556499.png',
            followed: true,
            fullName: 'Sveta',
            status: 'I am a boss!',
            location: { city: 'Minsk', country: 'Belarus' }
        },
        {
            id: 4,
            photoUrl: 'https://cdn-icons-png.flaticon.com/512/5556/5556558.png',
            followed: false,
            fullName: 'Andrew',
            status: 'On relax, do not disturb me',
            location: { city: 'Tallin', country: 'Estonia' }
        },
        {
            id: 5,
            photoUrl: 'https://cdn-icons-png.flaticon.com/512/5556/5556520.png',
            followed: true,
            fullName: 'Kyle',
            status: 'Honey plump',
            location: { city: 'Madrid', country: 'Spain' }
        }

    ]
    )
    }

    return <div>
        {props.users.map(u =>
            <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.follow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.unfollow(u.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullname}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
    </div>
}

export default Users;