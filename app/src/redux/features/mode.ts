import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ModeState } from "../../services/interface/ModeState"

const initialState: ModeState = {
  colorTheme: 8,
  colorMode: true,
  cardType: true
}

const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    isColorTheme: (state, action: PayloadAction<number>) => {
      state.colorTheme = action.payload
    },
    isColorMode: (state, action: PayloadAction<boolean>) => {
      state.colorMode = action.payload
    },
    isCardType: (state, action: PayloadAction<boolean>) => {
      state.cardType = action.payload
    }
  }
})

export const { isColorMode, isCardType, isColorTheme } = modeSlice.actions
export default modeSlice.reducer