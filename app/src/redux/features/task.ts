import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface TaskStage {
  data: {
    title: string,
    description: string,
    status: boolean
  }[]
}

const initialState: TaskStage = {
  data: [],
}

export const taskSlice = createSlice({
  name: 'memo',
  initialState,
  reducers: {
    isTask: ( state, action: PayloadAction<any[]>) => { 
      state.data = action.payload
    }
  }
})

export const { isTask } = taskSlice.actions
export default taskSlice.reducer


