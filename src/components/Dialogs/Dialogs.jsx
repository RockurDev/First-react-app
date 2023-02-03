import React from "react";
import s from './Dialogs.module.css'


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink>Andrey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink>Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink>Masha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink>Sveta</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink>Viktor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink>Valera</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>You're pretty!</div>
            </div>
        </div>
    )
}

export default Dialogs;