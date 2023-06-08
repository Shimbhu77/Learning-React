import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  balance: 1000,
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    deposit: (state) => {
      state.balance += 200
    },
    withdraw: (state) => {
      state.balance -= 100
    },
    depositByAmount: (state, action) => {
      state.balance += action.payload
    },
    withdrawByAmount: (state, action) => {
      state.balance -= action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { deposit, withdraw, depositByAmount,withdrawByAmount } = accountSlice.actions

export default accountSlice.reducer