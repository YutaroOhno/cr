import { LoadTodoList } from '../../../../../domain/usecases'
import { TodoItem, TodoItemEmpty } from '..'

import React from 'react'

type Props = {
  todos: LoadTodoList.Model[]
}

const List: React.FC<Props> = ({ todos }: Props) => {
  return (
    <div>
      { todos.map((todo: LoadTodoList.Model) => 
        <ul>
          <TodoItem key={todo.id} todo={todo} />
        </ul>
        )
      }
    </div>
  )
}

export default List
