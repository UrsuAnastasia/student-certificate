import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { RootState } from 'store/store'
import api from 'api/api'
import { Raport, ReportByDomain } from 'features/models/dashboard.models'

export enum dashboardActions {
  GET_ALL_RAPORTS = 'GET_ALL_RAPORTS',
  GET_STUDENTS_REPORT_BY_DOMAIN = 'GET_STUDENTS_REPORT_BY_DOMAIN',
}
interface DashboardSliceState {
  raport: Raport | null
  raportByDomain: ReportByDomain | null
}
const initialState: DashboardSliceState = {
  raport: null,
  raportByDomain: null,
}

export const getAllRaports: any = createAsyncThunk(dashboardActions.GET_ALL_RAPORTS, async () => {
  const response = await api.get('certificate-requests/reports')
  return response.data
})
export const getStudentsRaportByDomain: any = createAsyncThunk(
  dashboardActions.GET_STUDENTS_REPORT_BY_DOMAIN,
  async (id: number) => {
    const response = await api.get(`users/report?domainId=${id}`)
    return response.data
  },
)
export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers(builder: any) {
    builder.addCase(getAllRaports.fulfilled, (state: DashboardSliceState, action: any) => {
      state.raport = action.payload
    })
    builder.addCase(
      getStudentsRaportByDomain.fulfilled,
      (state: DashboardSliceState, action: any) => {
        state.raportByDomain = action.payload
      },
    )
  },
})

export default dashboardSlice.reducer
export const dashboardSelector = (state: RootState) => state.dashboard
