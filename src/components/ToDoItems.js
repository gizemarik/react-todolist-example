import React, { useState, useEffect,useCallback } from "react";
import * as taskActions from "../action";
import { useDispatch,useSelector } from 'react-redux';

const ToDoItems = props => {
    const tasks = useSelector(state => state.assest.items);
    const dispatch = useDispatch();

    const loadTasks = useCallback(async () => {
        try {
            await dispatch(taskActions.fetchItems());
        } catch (err) {
            console.log('Inside loadTask action!');
            console.log(err);
        }
    }, [dispatch]);


    useEffect(() => {
        loadTasks();
    }, [dispatch,loadTasks]);

    const createTasks = (item) => {
        return <li key={item.id}>{item.name}</li>
    };

    console.log(tasks)
    var listItems = tasks.map(createTasks);


    const deleteTasks = (key) => {
        props.delete(key);
    };

    return (
        <ul className="taskList">
            {listItems}
        </ul>
    );
};

export default ToDoItems;

