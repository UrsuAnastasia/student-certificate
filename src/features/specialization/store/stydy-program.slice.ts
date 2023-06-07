import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { RootState } from 'store/store'
import api from 'api/api'
import { ISpecialization } from '../models/models.specialization'
export enum studyProgramActions {
  ADD_STUDY_PROGRAM = 'ADD_STUDY_PROGRAM',
}
interface CertificateSliceState {
  studyProgrames: Array<ISpecialization>
}

export const addStudyProgram: any = createAsyncThunk(
  studyProgramActions.ADD_STUDY_PROGRAM,
  async (request: ISpecialization) => {
    const response = await api.post('study-programs', request)
    return response.data
  },
)

const initialState: CertificateSliceState = {
  studyProgrames: [],
}
export const certificateSlice = createSlice({
  name: 'certificate',
  initialState,
  reducers: {},
  extraReducers(builder: any) {
    builder.addCase(addStudyProgram.fulfilled, (state: CertificateSliceState, action: any) => {
      state.studyProgrames = [...state.studyProgrames, action.payload]
    })
  },
})

export default certificateSlice.reducer
export const certificateSelector = (state: RootState) => state.certificate
