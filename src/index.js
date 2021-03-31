import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ToDoList from "../src/components/ToDoList";
import { Provider } from 'react-redux'
import { createStore, combineReducers,applyMiddleware } from 'redux'
import toDoReducer from './reducer';
import ReduxThunk from 'redux-thunk';
import "bootstrap/dist/css/bootstrap.min.css";

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