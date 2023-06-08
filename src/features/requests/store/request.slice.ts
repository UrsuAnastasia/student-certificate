import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from 'store/store'
import api from 'api/api'
import { IRequests, IRequestsStudent, PostRequest } from '../models/request.models'

export enum requestsActions {
  GET_ALL_REQUEST_BY_SECRETARY_ID = 'GET_ALL_REQUEST_BY_SECRETARY_ID',
  APPROVE_DECLINE_REQUEST = 'APPROVE_DECLINE_REQUEST',
  GET_REQUEST_BY_STUDENT_ID = 'GET_REQUEST_BY_STUDENT_ID',
}

interface RequestSliceState {
  requests: Array<IRequests>
  studentRequest: Array<IRequestsStudent>
}

const initialState: RequestSliceState = {
  requests: [],
  studentRequest: [],
}

export const getAllRequestBySecretaryId = createAsyncThunk(
  requestsActions.GET_ALL_REQUEST_BY_SECRETARY_ID,
  async (id: string) => {
    const response = await api.get(`certificate-requests/secretary/${id}`)
    return response.data
  },
)

export const approveDeclineRequest = createAsyncThunk(
  requestsActions.APPROVE_DECLINE_REQUEST,
  async (obj: PostRequest) => {
    const payload = {
      status: obj.status,
    }
    const response = await api.patch(`certificate-requests/${obj.id}`, payload)
    return response.data
  },
)

export const getRequestByStudentId = createAsyncThunk(
  requestsActions.GET_REQUEST_BY_STUDENT_ID,
  async (id: string) => {
    const response = await api.get(`certificate-requests/student/${id}`)
    return response.data
  },
)
export const requestSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllRequestBySecretaryId.fulfilled, (state, action) => {
      state.requests = [...action.payload]
    })
    builder.addCase(approveDeclineRequest.fulfilled, (state, action) => {
      const requestId = action.payload.id
      // Find the index of the request in the array
      const index = state.requests.findIndex((request) => request.id === requestId)
      // If the request is found in the array
      if (index !== -1) {
        // Update the status of the request
        state.requests[index].status = action.payload.status
      }
    })
    builder.addCase(getRequestByStudentId.fulfilled, (state, action) => {
      state.studentRequest = [...action.payload]
    })
  },
})

export default requestSlice.reducer

export const requestSelector = (state: RootState) => state.request
