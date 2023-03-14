// store - OOP
import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import sidebarReducer from "./sidebar-reducer"

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 12 },
                { id: 1, message: "It's my first post!", likesCount: 19 },
                { id: 1, message: 'My project will bring to everyone peaceful mood :)', likesCount: 3 }],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Andrey' },
                { id: 2, name: 'Sasha' },
                { id: 3, name: 'Masha' },
                { id: 4, name: 'Sveta' },
                { id: 5, name: 'Viktor' },
                { id: 6, name: 'Valera' },
                { id: 7, name: 'Vladimir' },
                { id: 8, name: 'Vika' }],
            messages: [
                { id: 1, message: 'Hi!' },
                { id: 1, message: 'How are you?' },
                { id: 2, message: 'Wonderful time for baking' },
                { id: 2, message: "I'm going to make gorgeous cake with blackberries and white chocolate. Yummy!" },
                { id: 3, message: "You're pretty!" },
                { id: 4, message: "I feel upset today. My ballon is bursted" }],
            newMessageBody: '',
        },
        sidebar: {

        }
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subcribe(observer) {
        this._callSubscriber = observer; //observer pattern
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebarReducer, action)

        this._callSubscriber(this._state);
    }
}

export default store;

window.store = store;