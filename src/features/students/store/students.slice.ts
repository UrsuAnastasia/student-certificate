import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { RootState } from 'store/store'
import api from 'api/api'
import { IStudents } from '../models/students.models'
export enum studentsActions {
  IMPORT_STUDENTS = 'IMPORT_STUDENTS',
  GET_ALL_STUDENTS = 'GET_ALL_STUDENTS',
}
interface StudentsSliceState {
  importFile: any | null
  students: Array<IStudents> | null
}

// Async thunk for importing the Excel file
export const importExcel = createAsyncThunk(studentsActions.IMPORT_STUDENTS, async (file: any) => {
  const formData = new FormData()
  formData.append('students', file)
  const response = await api.post('/users/import', formData)
  return response.data
})
export const getAllStudents: any = createAsyncThunk(studentsActions.GET_ALL_STUDENTS, async () => {
  const response = await api.get('/users')
  return response.data
})

const initialState: StudentsSliceState = {
  importFile: null,
  students: null,
}
export const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {},
  extraReducers(builder: any) {
    builder.addCase(importExcel.fulfilled, (state: any, action: any) => {
      state.importFile = action.payload
    })
    builder.addCase(getAllStudents.fulfilled, (state: any, action: any) => {
      state.students = [...action.payload]
    })
  },
})

export default studentsSlice.reducer
export const studentsSelector = (state: RootState) => state.students
