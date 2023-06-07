import { configureStore } from '@reduxjs/toolkit'
import userSlice from 'features/auth/store/auth.slice'
import settingsSlice from 'features/settings/store/settings.slice'
import certificateSlice from 'features/student-request/store/certificate-request.slice'
import studentsSlice from 'features/students/store/students.slice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    certificate: certificateSlice,
    students: studentsSlice,
    settings: settingsSlice,
    user: userSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
