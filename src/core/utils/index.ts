import { ItemState } from "../store/slices/list"

const getCompleted = (tasks: ItemState[]) => {
  const completed = tasks.filter(item => item.completed).length
  const result = (completed/tasks.length)*100 
  return isNaN(result) ? 0 : Math.round(result)
}

const getInProgress = (tasks: ItemState[]) => {
  const inProgress = tasks.filter(item => !item.completed).length
  const result = (inProgress/tasks.length)*100 
  return isNaN(result) ? 0 : Math.floor(result)
}

export {
  getCompleted,
  getInProgress
}