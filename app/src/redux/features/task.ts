import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { TaskState } from "../../services/interface/TaskState";

const initialState: TaskState = {
  data: [],
  isLoading: false,
  isError: false
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    isTask: ( state, action: PayloadAction<any[]>) => { 
      state.data = action.payload
    },
    isLoading: ( state, action: PayloadAction<boolean>) => { 
      state.isLoading = action.payload
    },
    isError: ( state, action: PayloadAction<boolean>) => { 
      state.isError = action.payload
    }
  }
})

export const { isTask, isLoading, isError } = taskSlice.actions
export default taskSlice.reducer