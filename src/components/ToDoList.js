import React, { Component } from "react";
import ToDoHeader from "./ToDoHeader";
import ToDoForm from "./ToDoForm";
import ToDoItems from "./ToDoItems";
import "../ToDoList.scss";

const ToDoList = props => {
    return (
        <div className="listComponent">
            <ToDoHeader />
            <ToDoForm />
            <ToDoItems/>
        </div>

    );

};

export default ToDoList;