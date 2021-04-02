import React, { useContext, useState, useCallback, useRef } from "react";
import "../ToDoList.scss";
import { useSelector, useDispatch } from 'react-redux';
import * as taskActions from "../action";
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const ToDoForm = props => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const textRef = useRef();

    const addNewItem = useCallback(async () => {
        const nameNew = textRef.current.value;
    
        if (nameNew.length > 0) {
            dispatch(taskActions.addItems(nameNew));
        }
    }, [dispatch]);

    return (
        <div className="listMain">
            <div className="header">
                <form noValidate autoComplete="off">
                    <TextField
                        inputRef={textRef}
                        id="outlined-basic"
                        label="New Task"
                        multiline={true}
                        variant="outlined"
                        className={classes.textField}
                        margin="normal"
                        InputProps={{
                            className: classes.input,
                        }}
                        onKeyPress={(ev) => {
                            if (ev.key === 'Enter') {
                                addNewItem();
                                ev.preventDefault();
                            }
                        }}
                    />
                    <Button onClick={addNewItem} className={classes.addButton} variant="contained" color="primary">
                        Add
                    </Button>
                </form>
            </div>
        </div>
    );
};

const useStyles = makeStyles(theme => ({
    textField: {
        width: '50%',
        marginRight: '20px',
        color: 'black',
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
    },
    input: {
        color: 'black'
    },
    addButton: {
        width: '5%',
        height: 56
    },
    listMain: {
        paddingTop: 20
    }
}));

export default ToDoForm;


