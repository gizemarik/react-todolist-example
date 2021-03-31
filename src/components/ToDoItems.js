import React, { useState, useEffect, useCallback } from "react";
import * as taskActions from "../action";
import { useDispatch, useSelector } from 'react-redux';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';

const GreenCheckbox = makeStyles({
    root: {
        color: "green",
        '&$checked': {
            color: "green",
        },
    },
});


const ToDoItems = props => {
    const tasks = useSelector(state => state.assest.items);
    const dispatch = useDispatch();
    const classes = GreenCheckbox();


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

    const deleteItem = useCallback(async (id) => {
        dispatch(taskActions.deleteItem(id));
    }, [dispatch]);

    const updateTaskStatus = useCallback(async (id, name, status) => {
        dispatch(taskActions.updateItemStatus(id, name, status));
    }, [dispatch]);

    const createTasks = (item) => {
        return <li key={item.id}>
            <Checkbox className={classes.root} checked={item.status} onChange={() => { updateTaskStatus(item.id, item.name, item.status) }} />
            {item.status ?
                <span className="completed">
                    {item.name}
                </span> :
                <span className="notCompleted">
                    {item.name}
                </span>}
            <DeleteForeverIcon onClick={deleteItem.bind(this, item.id)} style={{ color: "red", float: "right"}} />
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

