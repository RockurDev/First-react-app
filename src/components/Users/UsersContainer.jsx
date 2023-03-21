import React from 'react';
import Users from "./Users";
import { connect } from "react-redux";
import { unfollowAC, followAC, setUsersAC } from "../../redux/users-reducer";


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => { 
            dispatch(followAC(userId)); 
        },
        unfollow: (userId) => { 
            dispatch(unfollowAC(userId)); 
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UserContainer;