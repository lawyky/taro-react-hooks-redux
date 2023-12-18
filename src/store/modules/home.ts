import { createSlice } from '@reduxjs/toolkit'

const homeSlice = createSlice({
  name: "home",
  initialState: {
    counter: 900
  },
  reducers: {
    increment(state, action) {
      state.counter = state.counter +  action.payload
      console.log({state, action})
    },
    decrement(state, action) {
      state.counter = state.counter +  action.payload
      console.log({state, action})
    }
  }
})

export const { increment, decrement } = homeSlice.actions
export default homeSlice.reducer
