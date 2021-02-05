import { LoadTodoList } from '../../../../../domain/usecases'
import React from 'react'

type Props = {
  todo: LoadTodoList.Model
}

const TodoItem: React.FC<Props> = ({ todo }: Props) => {
  return (
    <>
      <li>{todo.id}</li>
      <li>{todo.title}</li>
      <li>{todo.text}</li>
    </>
  )
}

export default TodoItem
