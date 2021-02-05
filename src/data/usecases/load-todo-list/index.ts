import { LoadTodoList as ILTL } from '../../../domain/usecases'

export class LoadTodoList implements ILTL {
  constructor () {}

  async loadAll (): Promise<ILTL.Model[]> {
    return new Promise(resolve => {
      return resolve([
        {
          id: "1",
          title: "Title",
          text: "Text"
        }
      ])
    })
  }
}
