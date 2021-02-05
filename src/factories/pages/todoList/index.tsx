import React from 'react'
import TodoList from '../../../presentation/pages/todoList'
import { makeLoadTodoList } from '../../../factories/usecases'

export const makeTodos: React.FC = () => {
  return (
    <TodoList loadTodoList={makeLoadTodoList()} />
  )
}
