import React, { useState, useEffect,useCallback } from "react";
import * as taskActions from "../action";
import { useDispatch,useSelector } from 'react-redux';

const ToDoItems = props => {
    const tasks = useSelector(state => state.assest.items);
    console.log(tasks);
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
        return <li onClick={() => deleteTasks(item.id)} key={item.id}>{item.title}</li>
    };

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

