export interface ITodo{
    todo?: string
    completed: boolean
}

export interface ITodoState {
    todos: ITodo[]
}

export enum ToDoActionType {
    ADD_TODO = '@@todo/ADD_TODO'
}