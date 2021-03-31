import axios from "axios";
export const ADD_ITEM = 'ADD_ITEM';
export const GET_ITEM = 'GET_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';


export const fetchItems = () => {
    return async (dispatch) => {
        axios.get('http://localhost:3004/Tasks')
        .then(response => {
            dispatch({ type: GET_ITEM, tasks: response.data });
        });
 
    };
};



