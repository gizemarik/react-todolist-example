import { ADD_ITEM, GET_ITEM, DELETE_ITEM, UPDATE_ITEM_STATUS } from './action';

const initialState = {
    items: [],
};

export default function toDoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: state.items.concat(action.newTask)
            };
        case GET_ITEM:
            return {
                items: action.tasks
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(
                    item => item.id !== action.dId
                )
            };

        case UPDATE_ITEM_STATUS:
            const taskIndex = state.items.findIndex(task => task.id === action.uId);

            const updatedTask = {
                id: action.uId,
                name: action.name,
                status: !action.status
            }

            const updatedUserTask = [...state.items];
            updatedUserTask[taskIndex] = updatedTask;

            return {
                ...state,
                items: updatedUserTask
            };

        default:
            return state
    }

};
