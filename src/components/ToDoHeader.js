import React, { useContext, useState } from "react";
import "../ToDoList.css";
import { Button } from '@material-ui/core';

const ToDoHeader = props => {

    return (
        <div className="todoHeader">
            <h1>ToDo List</h1>
        </div>
    );
}

export default ToDoHeader;


