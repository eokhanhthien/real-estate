import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface EstateState {
  estate: any
}

const initialState: EstateState = {
  estate: null,
}

export const estateSlice = createSlice({
  name: 'estatebook',
  initialState,
  reducers: {
    pushEstate: (state, action: PayloadAction<number>) => {
      if (!state.estate) {
        // Nếu state.estate chưa tồn tại, hãy khởi tạo nó là một mảng trống
        state.estate = [];
      }
      // Sau đó, thêm action.payload vào mảng estate
      state.estate.push(action.payload);
    },

    setEstate: (state, action: PayloadAction<any>) => {
      state.estate = action.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { setEstate, pushEstate } = estateSlice.actions

export default estateSlice.reducer