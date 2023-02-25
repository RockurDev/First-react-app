import React from "react";
import s from './Dialogs.module.css';
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = state.messages.map(m => <Message message={m.message} />)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>

                <div>
                    <div>
                        <div>
                            <textarea value={ newMessageBody }
                                      onChange={onNewMessageChange}
                                      placeholder='Enter your text:'>
                            </textarea>
                        </div>
                        <>
                            <button onClick={ onSendMessageClick }>Send</button>
                        </>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;