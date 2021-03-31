import axios from "axios";
export const ADD_ITEM = 'ADD_ITEM';
export const GET_ITEM = 'GET_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const UPDATE_ITEM_STATUS = 'UPDATE_ITEM_STATUS';


export const fetchItems = () => {
    return async (dispatch) => {
        axios.get('http://localhost:3004/Tasks')
        .then(response => {
            dispatch({ type: GET_ITEM, tasks: response.data });
        });
 
    };
};

export const addItems = (name) => {
    return async (dispatch) => {
        axios.post('http://localhost:3004/Tasks',
        {id: Date.now(), name: name,status: false}
        )
        .then(response => {
            dispatch({ type: ADD_ITEM, newTask: response.data });
        });
 
    };
};

export const deleteItem = (id) => {
    return async (dispatch) => {
        axios.delete('http://localhost:3004/Tasks/' + id)
        .then(response => {
            dispatch({ type: DELETE_ITEM, deletedItem: response.data, dId: id });
        });
 
    };
};

export const updateItemStatus = (id,name,status) => {
    return async (dispatch) => {
        
        axios.put('http://localhost:3004/Tasks/' + id, {id: id, name: name, status: !status})
        .then(response => {
            dispatch({ type: UPDATE_ITEM_STATUS, updatedItem: response.data, uId: id, name: name, status: status });
        });
 
    };
};




