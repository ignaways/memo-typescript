import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {GlobalState} from "../../services/interface/GlobalState"

const initialState: GlobalState = {
    closePopup: true,
    // addForm: false,
}

const gobalSlice = createSlice({
    name:'globalState',
    initialState,
    reducers:{
        isClosePopup: (state, action: PayloadAction<boolean>) => {
            state.closePopup = action.payload
        }
        // isAddForm: (state, action: PayloadAction<boolean>) => {
        //     state.addForm = action.payload
        // }
    }
})

export const { isClosePopup } = gobalSlice.actions
export default gobalSlice.reducer