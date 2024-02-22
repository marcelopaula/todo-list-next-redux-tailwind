import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '..'

export interface ItemState {
  id: number
  description: string
  completed: boolean
}

interface ListState {
  data: ItemState[]
}

const initialState: ListState = {
  data: [
    {
      id: 1,
      description: 'tarefa 1',
      completed: true
    },
    {
      id: 2,
      description: 'tarefa 2',
      completed: true
    },
    {
      id: 3,
      description: 'tarefa 3',
      completed: true
    },
    {
      id: 4,
      description: 'tarefa 4',
      completed: false
    }
  ]
}

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem: (state, action:PayloadAction<ItemState>) => {
      state.data.push(action.payload)
    },
    removeItem: () => {},
    completeItem: (state, action:PayloadAction<number>) => {
      state.data.map(task => {
        if (task.id === action.payload) {
          task.completed = true
        }
        return task
      })

    }
  }
})

export const {addItem, removeItem, completeItem} = listSlice.actions
export default listSlice.reducer