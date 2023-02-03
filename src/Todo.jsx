import React from 'react';
import { useFragment } from 'react-relay';
import {graphql} from 'graphql';
import {Todo_todo$key} from './__generated__/Todo_todo.graphql';


const Todo = (props: {todo:Todo_todo$key}) => {

    const todo = useFragment(graphql`
    fragment Todo_todo on Todo {
        id 
        title 
        isCompleted
    }
    `, props.todo)
    return (
        <div>
          <input checked={todo.isCompleted}/>
          <label>{todo.title}</label>
          <button></button>
        </div>
    )
}

export default Todo