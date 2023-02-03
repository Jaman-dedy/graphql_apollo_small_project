import React from 'react';
import {graphql} from 'graphql'
import Todo from './Todo'
import { useFragment } from 'react-relay';
import  {Todos_user$ref} from './__generated__/Todos_user.graphql';

export default function Todos({user: Todos_user$ref}) {
    const data = useFragment(
    graphql`
    fragment Todos_user on User {
        todos {
            ...Todo_todo
        }
    }`,
    user)
    return (
      <ul>
        {
          data?.user?.todos.map((todo) => {
            return (
              <Todo todo={todo} ke={todo.id}/>
            )
            
          })
        }
      </ul>
    )
  }