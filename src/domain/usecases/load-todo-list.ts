export interface LoadTodoList {
  loadAll: () => Promise<LoadTodoList.Model[]>
}
  
export namespace LoadTodoList {
  export type Model = {
    id: string
    title: string
    text: string
  }
}
