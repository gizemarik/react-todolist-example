import React, { useState, useEffect, useCallback } from "react";
import * as taskActions from "../action";
import { useDispatch, useSelector } from 'react-redux';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Checkbox from '@material-ui/core/Checkbox';
import "../ToDoList.scss";

const ToDoItems = props => {
    const tasks = useSelector(state => state.assest.items);
    const dispatch = useDispatch();

    //Loads all saved data from json server
    const loadTasks = useCallback(async () => {
        try {
            await dispatch(taskActions.fetchItems());
        } catch (err) {
            console.log(err);
        }
    }, [dispatch]);


    useEffect(() => {
        loadTasks();
    }, [dispatch, loadTasks]);

    //Deletes the task which has given id
    const deleteItem = useCallback(async (id) => {
        dispatch(taskActions.deleteItem(id));
    }, [dispatch]);


    //Updates the clicked task's status only, if any other update is necessary, change action and reducer
    const updateTaskStatus = useCallback(async (id, name, status) => {
        dispatch(taskActions.updateItemStatus(id, name, status));
    }, [dispatch]);

    //Putting all individual object into list items with usage of Checkbox and ForeverIcon
    const createTasks = (item) => {
        return <li key={item.id}>
            <Checkbox style={{ color: "green" }} checked={item.status} onChange={() => { updateTaskStatus(item.id, item.name, item.status) }} />
            {item.status ?
                <span className="completed">
                    {item.name}
                </span> :
                <span className="notCompleted">
                    {item.name}
                </span>}
            <DeleteForeverIcon onClick={deleteItem.bind(this, item.id)} style={{ color: "red", float: "right" }} />
        </li>
    };

    var listItems = tasks.map(createTasks);

    return (
        <ul className="taskList">
            {listItems}
        </ul>
    );
};

export default ToDoItems;

