export const ADD_ITEM = 'ADD_ITEM';
export const GET_ITEM = 'GET_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';


export const fetchItems = () => {
    return async (dispatch) => {
        try {
            let response = await (
                await fetch("https://jsonplaceholder.typicode.com/todos")
            ).json();
            dispatch({ type: GET_ITEM, tasks: response });
        } catch (err) {
            throw err;
        }



    };
};



