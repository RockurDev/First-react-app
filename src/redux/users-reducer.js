let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        { id: 1, photoUrl: 'https://cdn-icons-png.flaticon.com/512/5556/5556512.png', followed: false, fullName: 'Nika', status: 'I am a photographer!', location: { city: 'New York', country: 'United States' } },
        { id: 2, photoUrl: 'https://cdn-icons-png.flaticon.com/512/5556/5556468.png', followed: false, fullName: 'Ilya', status: 'France is the place of love', location: { city: 'Moscow', country: 'Russia' } },
        { id: 3, photoUrl: 'https://cdn-icons-png.flaticon.com/512/5556/5556499.png', followed: true, fullName: 'Sveta', status: 'I am a boss!', location: { city: 'Minsk', country: 'Belarus' } },
        { id: 4, photoUrl: 'https://cdn-icons-png.flaticon.com/512/5556/5556558.png', followed: false, fullName: 'Andrew', status: 'On relax, do not disturb me', location: { city: 'Tallin', country: 'Estonia' } },
        { id: 5, photoUrl: 'https://cdn-icons-png.flaticon.com/512/5556/5556520.png', followed: true, fullName: 'Kyle', status: 'Honey plump', location: { city: 'Madrid', country: 'Spain' } }
    ]
}

const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }

        case SET_USERS:
            return { ...state, users: [ ...state.users, ...action.users ]}

        default:
            return state;
    }
}

// AC - action creator
export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;