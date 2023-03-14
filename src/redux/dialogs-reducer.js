const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
                return state

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 6, message: body });
                return state

        default:
            return state;
    };
};

export const sendMessageCreator = (text) =>
    ({ type: SEND_MESSAGE, newText: text })

export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;