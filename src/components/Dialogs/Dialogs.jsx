import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';

const Dialogs = (props) => {

    const DialogItem = (props) => {
        return <div className={`${s.dialog} + ${s.active}`}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    }

    const Message = (props) => {
        return (
            <div className={s.message}>{props.message}</div>
        );
    }

    let dialogs = [
        { id: 1, name: 'Andrey' },
        { id: 2, name: 'Sasha' },
        { id: 3, name: 'Masha' },
        { id: 4, name: 'Sveta' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' },
        { id: 7, name: 'Vladimir' },
        { id: 8, name: 'Vika' }
    ];

    let messages = [
        { id: 1, message: 'Hi!' },
        { id: 1, message: 'How are you?' },
        { id: 2, message: 'Wonderful time for baking' },
        { id: 2, message: "I'm going to make gorgeous cake with blackberries and white chocolate. Yummy!" },
        { id: 3, message: "You're pretty!" },
        { id: 4, message: "I feel upset today. My ballon is bursted" }
    ];

    let dialogsElements = dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />)


    let messagesElements = messages
        .map(m => <Message message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>

            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;