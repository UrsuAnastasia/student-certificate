import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { RootState } from 'store/store'
import api from 'api/api'
import { ISpecialization } from '../models/models.specialization'
export enum studyProgramActions {
  ADD_STUDY_PROGRAM = 'ADD_STUDY_PROGRAM',
  GET_ALL_STUDY_PROGRAMS = 'GET_ALL_STUDY_PROGRAMS',
}
interface StudyProgramSliceState {
  studyProgrames: Array<ISpecialization>
}

export const addStudyProgram: any = createAsyncThunk(
  studyProgramActions.ADD_STUDY_PROGRAM,
  async (request: ISpecialization) => {
    const response = await api.post('study-programs', request)
    return response.data
  },
)

export const getallStudyProgrames: any = createAsyncThunk(
  studyProgramActions.GET_ALL_STUDY_PROGRAMS,
  async () => {
    const response = await api.get('study-programs')
    return response.data
  },
)

const initialState: StudyProgramSliceState = {
  studyProgrames: [],
}
export const studyProgrameSlice = createSlice({
  name: 'studyProgram',
  initialState,
  reducers: {},
  extraReducers(builder: any) {
    builder.addCase(
      getallStudyProgrames.fulfilled,
      (state: StudyProgramSliceState, action: any) => {
        state.studyProgrames = [...action.payload]
      },
    )
    builder.addCase(addStudyProgram.fulfilled, (state: StudyProgramSliceState, action: any) => {
      state.studyProgrames = [...state.studyProgrames, action.payload]
    })
  },
})

export default studyProgrameSlice.reducer
export const studyProgramSelector = (state: RootState) => state.studyProgram
