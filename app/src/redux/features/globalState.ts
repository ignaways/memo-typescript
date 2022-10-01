import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { GlobalState } from "../../services/interface/GlobalState";

const initialState: GlobalState = {
  closePopup: true,
  popupView: "",
};

const gobalSlice = createSlice({
  name: "globalState",
  initialState,
  reducers: {
    isClosePopup: (state, action: PayloadAction<boolean>) => {
      state.closePopup = action.payload;
    },
    isPopupView: (state, action: PayloadAction<string>) => {
      state.popupView = action.payload;
    },
  },
});

export const { isClosePopup, isPopupView } = gobalSlice.actions;
export default gobalSlice.reducer;
