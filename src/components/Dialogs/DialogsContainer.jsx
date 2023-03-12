import React from "react";
import s from './Dialogs.module.css';
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState().dialogsPage;

                {/* let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
            let messagesElements = state.messages.map(m => <Message message={m.message} />)
            let newMessageBody = state.newMessageBody; */}

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                }

                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body))
                }

                return (<Dialogs
                    updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogsPage={state} />)
            }
        }
    </StoreContext.Consumer>
};


export default DialogsContainer;