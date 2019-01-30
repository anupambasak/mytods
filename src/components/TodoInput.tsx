import {Component} from "react";
import React from "react";
import {Dispatch} from "redux";
import {connect} from 'react-redux';
import {ApplicationState} from "../store";
import {ITodoState,ITodo} from "../store/todo/types";
import {addtodo} from "../store/todo/actions";
import {store} from '../configureStore';

export interface OwnProps {
}

export interface StateProps {
    todos: ITodo[]
}

export interface DispatchProps {
    dispatch: Dispatch;
}


type Props = ITodoState & DispatchProps & OwnProps;

export class TodoInput extends Component<Props> {

    public componentDidMount(): void {
        this.props.dispatch(addtodo('oui'));
    }

    render() {
        return (
            <>
                <button onClick={() => this.props.dispatch(addtodo('asf'))}>
                    Activate Lasers
                </button>
                {JSON.stringify(this.props.todos)}
            </>
        );
    }
}

const  mapStateToProps = (state: ApplicationState): StateProps =>({todos: state.todos.todos});


// export default TodoInput;

// export default connect()(TodoInput) // only dispatch
export default connect(mapStateToProps)(TodoInput)