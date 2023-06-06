import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { RootState } from 'store/store'
import api from 'api/api'
import { Domain, Year } from '../models/settings.modal'

export enum settingsActions {
  POST_YEAR = 'POST_YEAR',
  FINISH_YEAR = 'FINISH_YEAR',
  GET_YEAR = 'GET_YEAR',
  ADD_DOMAIN = 'ADD_DOMAIN',
  GET_DOMAIN = 'GET_DOMAIN',
  DELETE_DOMAINS = 'DELETE_DOMAINS',
}
interface SettingsSliceState {
  year: Year | null
  domains: Array<Domain>
}

export const postYear: any = createAsyncThunk(settingsActions.POST_YEAR, async (obj: Year) => {
  try {
    const response = await api.post('academic-year', obj)
    return response.data
  } catch (error) {
    throw new Error('A apărut o problemă. Te rog încearcă din nou mai târziu.')
  }
})
export const finishYear: any = createAsyncThunk(settingsActions.FINISH_YEAR, async (obj: Year) => {
  try {
    const response = await api.patch('academic-year/end-academic-year')
    return response.status
  } catch (error) {
    throw new Error('A apărut o problemă. Te rog încearcă din nou mai târziu.')
  }
})
export const getCurrentYear: any = createAsyncThunk(settingsActions.GET_YEAR, async (obj: Year) => {
  const response = await api.get('academic-year/current-year')
  return response.data
})

export const getDomains: any = createAsyncThunk(settingsActions.GET_DOMAIN, async () => {
  const response: any = await api.get('domains')
  return response.data
})
export const deleteDomain: any = createAsyncThunk(
  settingsActions.DELETE_DOMAINS,
  async (id: number) => {
    try {
      await api.delete(`domains/${id}`)
      return id // Return the ID as the payload
    } catch (error) {
      throw new Error('A apărut o problemă. Te rog încearcă din nou mai târziu.')
    }
  },
)
export const postDomain: any = createAsyncThunk(
  settingsActions.ADD_DOMAIN,
  async (payload: Domain) => {
    try {
      const response = await api.post('domains', payload)
      return response.data
    } catch (error) {
      throw new Error('A apărut o problemă. Te rog încearcă din nou mai târziu.')
    }
  },
)
const initialState: SettingsSliceState = {
  year: null,
  domains: [],
}
export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {},
  extraReducers(builder: any) {
    builder.addCase(postYear.fulfilled, (state: SettingsSliceState, action: any) => {
      state.year = action.payload
    })
    builder.addCase(finishYear.fulfilled, (state: SettingsSliceState, action: any) => {
      state.year = action.payload
    })
    builder.addCase(getCurrentYear.fulfilled, (state: SettingsSliceState, action: any) => {
      state.year = action.payload
    })
    builder.addCase(getDomains.fulfilled, (state: SettingsSliceState, action: any) => {
      state.domains = [...action.payload]
    })
    builder.addCase(deleteDomain.fulfilled, (state: SettingsSliceState, action: any) => {
      const deletedDomainId = action.payload
      state.domains = state.domains.filter((domain: Domain) => domain.id !== deletedDomainId)
    })
    builder.addCase(postDomain.fulfilled, (state: SettingsSliceState, action: any) => {
      state.domains = [...state.domains, action.payload]
    })
  },
})

export default settingsSlice.reducer
export const settingsSelector = (state: RootState) => state.settings
