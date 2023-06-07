import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { RootState } from 'store/store'
import { User } from '../models/auth.models'
import api from 'api/api'
export enum userActions {
  GET_CURRENT_USER = 'GET_CURRENT_USER',
}
interface UserSliceState {
  user: User | null
}
export const getCurrentUser: any = createAsyncThunk(userActions.GET_CURRENT_USER, async () => {
  const response: any = await api.get('users/current')
  return response.data
})
const initialState: UserSliceState = {
  user: null,
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder: any) {
    builder.addCase(getCurrentUser.fulfilled, (state: UserSliceState, action: any) => {
      state.user = action.payload
    })
  },
})

export default userSlice.reducer
export const userSelector = (state: RootState) => state.user
