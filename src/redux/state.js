// store - OOP
let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 12 },
                { id: 1, message: "It's my first post!", likesCount: 19 },
                { id: 1, message: 'My project will bring to everyone peaceful mood :)', likesCount: 3 }],
            newPostText: 'it-test'
            },
        messagesPage: {
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
    
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    _callSubscriber () {
        console.log('State changed')
    },
    addPost () {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0 
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText; 
        this._callSubscriber(this._state);
    },

    subcribe (observer) {
        this._callSubscriber = observer; //observer pattern
    }

}

export default store;

window.store = store;