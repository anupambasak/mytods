import {Reducer} from "redux";
import {ITodoState,ToDoActionType} from "./types";


export const initialState: ITodoState = {
    todos: []
};

const reducer: Reducer<ITodoState> = (state = initialState, action) => {
    switch (action.type) {
        case ToDoActionType.ADD_TODO: {
            return {
                todos: [...state.todos, action.payload]
            }
        }
        default: {
            return state;
        }
    }
};

export { reducer as todoReducer }
