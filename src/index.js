import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import ToDoList from "../src/components/ToDoList";
import { Provider } from 'react-redux'
import { createStore, combineReducers,applyMiddleware } from 'redux'
import toDoReducer from './reducer';
import ReduxThunk from 'redux-thunk';

var destination = document.querySelector("#container");

const rootReducer = combineReducers({
    assest: toDoReducer,
});

const store = createStore(rootReducer,applyMiddleware(ReduxThunk));


ReactDOM.render(
    <Provider store={store}>
        <ToDoList />
    </Provider>,
    destination
);