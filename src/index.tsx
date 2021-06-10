import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost, StateType, subscribe, updateNewPost} from "./redux/State";
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPost={updateNewPost}/>,
        </BrowserRouter>,
        document.getElementById('root')
    )
}

rerenderEntireTree(state)

subscribe(() => {
    // rerenderEntireTree()
})
