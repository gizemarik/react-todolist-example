import React, { useContext, useState } from "react";
import "../ToDoList.css";
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const ToDoForm = props => {
    const classes = useStyles();    
    return (
        <div className="listMain">
            <div className="header">
                <form noValidate autoComplete="off">
                    <TextField
                        id="outlined-basic"
                        label="New Task"
                        variant="outlined"
                        className={classes.textField}
                        value={() => { }}
                        onChange={() => { }}
                        margin="normal"
                        InputProps={{
                            className: classes.input,
                        }}
                    />
                    <Button onSubmit={props.addItem} className={classes.addButton} variant="contained" color="primary">
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
        color: 'white',
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
    },
    input: {
        color: 'white'
    },
    addButton: {
        width:'5%',
        height: 56
    }
}));

export default ToDoForm;


