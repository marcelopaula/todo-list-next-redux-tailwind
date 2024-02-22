import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ItemState {
  id: number
  description: string
  completed: boolean
  visible: boolean
}

interface ListState {
  data: ItemState[],
}

const initialState: ListState = {
  data: [],
}

export const fetchLocalStorage = createAsyncThunk(
  'tasks/fetchLocalStorage',
  async () => {
    const response: string|null = await localStorage.getItem('tasks')
    if (response) {
      const tasks = await JSON.parse(response);
      return tasks
    } else {
      return []
    }
  }
)

const _addItem = createAction('list/addItem');

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem: (state, action:PayloadAction<ItemState>) => {
      state.data.push(action.payload)
      localStorage.setItem('tasks', JSON.stringify(state.data))
    },
    completeItem: (state, action:PayloadAction<number>) => {
      state.data.map(task => {
        if (task.id === action.payload) {
          task.completed = true
        }
        return task
      })
      localStorage.setItem('tasks', JSON.stringify(state.data))
    },
    hideTask: (state, action:PayloadAction<number>) => {
      state.data.map(task => {
        if (task.id === action.payload) {
          task.visible = false
        }
        return task
      })
      
    }   
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLocalStorage.fulfilled, (state, action) => {
      state.data = action.payload.map((task:ItemState) => {
        if (task.completed) {
          task.visible = false
        }
        return task
      })
    })
  }
})

export const {addItem, hideTask, completeItem} = listSlice.actions
export default listSlice.reducer