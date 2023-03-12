import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
<<<<<<< HEAD
import store from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state}
                dispatch={store.dispatch.bind(store)}
                store={store}
                />
=======
import store from './redux/redux-store';
import {Provider} from './StoreContext';


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
>>>>>>> 36bef21 (add context API)
        </React.StrictMode>
    );

}

rerenderEntireTree(store.getState());
<<<<<<< HEAD
store.subcribe(rerenderEntireTree)
=======

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
})
>>>>>>> 36bef21 (add context API)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
