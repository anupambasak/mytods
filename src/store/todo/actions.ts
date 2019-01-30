import {action,createStandardAction} from 'typesafe-actions';
import {ToDoActionType,ITodo} from "./types";

export const addtodo =  (t: string) => action(ToDoActionType.ADD_TODO,t);