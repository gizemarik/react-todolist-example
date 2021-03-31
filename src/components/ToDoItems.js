import React, { useState, useEffect, useCallback } from "react";
import * as taskActions from "../action";
import { useDispatch, useSelector } from 'react-redux';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

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
    }, [dispatch, loadTasks]);

    const deleteItem = useCallback(async (id) => {
        dispatch(taskActions.deleteItem(id));
    }, [dispatch]);

    const createTasks = (item) => {
        return <li key={item.id}>
            <span class="taskName">
                {item.name}
            </span>
            <DeleteForeverIcon onClick={deleteItem.bind(this,item.id)} style={{color: "red", float:"right"}} />
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

