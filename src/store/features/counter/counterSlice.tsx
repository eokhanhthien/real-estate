import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number,
  date: any,
  time: any,
  name: null,
  phone: null,
  email: null,
  note: null,
}

const initialState: CounterState = {
  value: 1,
  date: null,
  time: null,
  name: null,
  phone: null,
  email: null,
  note: null,

}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
    setViewDate: (state, action: PayloadAction<number>) => {
      state.date = action.payload
    },
    setViewTime: (state, action: PayloadAction<number>) => {
      state.time = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, setViewDate,setViewTime } = counterSlice.actions

export default counterSlice.reducer