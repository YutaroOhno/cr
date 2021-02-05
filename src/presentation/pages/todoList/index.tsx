import { LoadTodoList } from '../../../domain/usecases'
import { useEffect, useState } from 'react' 
import { LoadTodoList as ILTL } from '../../../domain/usecases'
import { TodoListItem, TodoItemEmpty } from '../todoList/components'

type Props = {
  loadTodoList: LoadTodoList
}

const TodoList = ({loadTodoList}: Props) => {
  const [todos, setTodos] = useState<ILTL.Model[]>()

  useEffect(() => {
    let unmounted = false;
    const load = async () => {
      await loadTodoList.loadAll().then((todos) => {
        setTodos(todos)
      }).catch(e => {console.error(e)})
    };

    load();
    const cleanup = () => {
      unmounted = true;
    };
    return cleanup;
  }, [])

  return (
    todos?.length
      ? <TodoListItem todos={todos} />
      : <TodoItemEmpty />
    )
    
}

export default TodoList
