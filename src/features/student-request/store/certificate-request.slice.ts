import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Certificate } from '../models/certificate-request'
import { RootState } from 'store/store'
import api from 'api/api'
export enum certificateActions {
  POST_CERTIFICATE_REQUEST = 'POST_CERTIFICATE_REQUEST',
}
interface CertificateSliceState {
  certificate: Certificate | null
}

export const createRequest: any = createAsyncThunk(
  certificateActions.POST_CERTIFICATE_REQUEST,
  async (request: Certificate) => {
    const response = await api.post('certificate-requests', request)
    return response.data
  },
)

const initialState: CertificateSliceState = {
  certificate: null,
}
export const certificateSlice = createSlice({
  name: 'certificate',
  initialState,
  reducers: {},
  extraReducers(builder: any) {
    builder.addCase(createRequest.fulfilled, (state: CertificateSliceState, action: any) => {
      state.certificate = action.payload
    })
  },
})

export default certificateSlice.reducer
export const certificateSelector = (state: RootState) => state.certificate
