import { LoadTodoList as ILTL } from '../../../domain/usecases'
import { LoadTodoList } from '../../../data/usecases'

export const makeLoadTodoList = (): ILTL => {
  return new LoadTodoList()
}
