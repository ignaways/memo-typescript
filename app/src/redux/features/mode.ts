import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ModeState } from "../../services/interface/ModeState"

const initialState: ModeState = {
  colorMode: true,
  cardType: true
}

const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    isColorMode: (state, action: PayloadAction<boolean>) => {
      state.colorMode = action.payload
    },
    isCardType: (state, action: PayloadAction<boolean>) => {
      state.cardType = action.payload
    }
  }
})

export const { isColorMode, isCardType } = modeSlice.actions
export default modeSlice.reducer