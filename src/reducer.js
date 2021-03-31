import { ADD_ITEM, GET_ITEM, DELETE_ITEM } from './action';

const initialState = {
    items: [],
};

export default function toDoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
            };
        case GET_ITEM:
            return {
                items: action.tasks
            };
        case DELETE_ITEM:
            return {
                ...state,
            };
        default:
            return state
    }

};