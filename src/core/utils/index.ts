import { ItemState } from "../store/slices/list"

const getCompleted = (tasks: ItemState[]) => {
  const completed = tasks.filter(item => item.completed).length
  const result = (completed/tasks.length)*100 
  return result
}

const getInProgress = (tasks: ItemState[]) => {
  const inProgress = tasks.filter(item => !item.completed).length
  const result = (inProgress/tasks.length)*100 
  return result
}

export {
  getCompleted,
  getInProgress
}