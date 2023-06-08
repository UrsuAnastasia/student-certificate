import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { RootState } from 'store/store'
import api from 'api/api'
import { ISpecialization, Secretares } from '../models/models.specialization'
export enum studyProgramActions {
  ADD_STUDY_PROGRAM = 'ADD_STUDY_PROGRAM',
  GET_ALL_STUDY_PROGRAMS = 'GET_ALL_STUDY_PROGRAMS',
  GET_CURRENT_PROGRAM_BY_ID = 'GET_CURRENT_PROGRAM_BY_ID',
  GET_ALL_SECRETARY = 'GET_ALL_SECRETARY',
  EDIT_STUDY_PROGRAM = 'EDIT_STUDY_PROGRAM',
}
interface StudyProgramSliceState {
  studyProgrames: Array<ISpecialization>
  studyProgram: ISpecialization | null
  secretares: Array<Secretares>
}

export const addStudyProgram: any = createAsyncThunk(
  studyProgramActions.ADD_STUDY_PROGRAM,
  async (request: ISpecialization) => {
    const response = await api.post('study-programs', request)
    return response
  },
)
export const editStudyProgram: any = createAsyncThunk(
  studyProgramActions.EDIT_STUDY_PROGRAM,
  async (request: ISpecialization) => {
    const response = await api.put('study-programs', request)
    return response
  },
)
export const getallStudyProgrames: any = createAsyncThunk(
  studyProgramActions.GET_ALL_STUDY_PROGRAMS,
  async () => {
    const response = await api.get('study-programs')
    return response.data
  },
)

export const getStudyProgramById: any = createAsyncThunk(
  studyProgramActions.GET_CURRENT_PROGRAM_BY_ID,
  async (id: number) => {
    const response = await api.get(`study-programs/${id}`)
    return response.data
  },
)

export const getAllSecretary: any = createAsyncThunk(
  studyProgramActions.GET_ALL_SECRETARY,
  async () => {
    const response = await api.get(`users/secretaries`)
    return response.data
  },
)
const initialState: StudyProgramSliceState = {
  studyProgrames: [],
  studyProgram: null,
  secretares: [],
}
export const studyProgrameSlice = createSlice({
  name: 'studyProgram',
  initialState,
  reducers: {},
  extraReducers(builder: any) {
    builder.addCase(getAllSecretary.fulfilled, (state: StudyProgramSliceState, action: any) => {
      state.secretares = [...action.payload]
    })
    builder.addCase(getStudyProgramById.fulfilled, (state: StudyProgramSliceState, action: any) => {
      state.studyProgram = action.payload!
    })
    builder.addCase(
      getallStudyProgrames.fulfilled,
      (state: StudyProgramSliceState, action: any) => {
        state.studyProgrames = [...action.payload]
      },
    )
    builder.addCase(addStudyProgram.fulfilled, (state: StudyProgramSliceState, action: any) => {
      state.studyProgrames = [...state.studyProgrames, action.payload.data]
    })
    builder.addCase(editStudyProgram.fulfilled, (state: StudyProgramSliceState, action: any) => {
      const updatedProgramIndex = state.studyProgrames.findIndex(
        (program) => program.id === action.payload.id,
      )
      if (updatedProgramIndex !== -1) {
        state.studyProgrames[updatedProgramIndex] = action.payload
        state.studyProgram = action.payload
      }
    })
  },
})

export default studyProgrameSlice.reducer
export const studyProgramSelector = (state: RootState) => state.studyProgram
