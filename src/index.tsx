import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/State";
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} dispatch={store.dispatch.bind(store)}/>,
        </BrowserRouter>, document.getElementById('root')
    )
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)

