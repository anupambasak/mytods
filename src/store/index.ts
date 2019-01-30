import {combineReducers, Dispatch, Action, AnyAction} from 'redux';

import {todoReducer} from './todo/reducer';
import {ITodoState} from './todo/types';

export interface ApplicationState {
    todos: ITodoState
}

export interface ConnectedReduxProps<A extends Action = AnyAction> {
    dispatch: Dispatch<A>
}

export const rootReducer = combineReducers<ApplicationState>({
    todos: todoReducer
});

