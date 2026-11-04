import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  goals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const goalSlice = createSlice({
  name: 'goal',
  initialState,
  reducers: {},
})

export default goalSlice.reducer
