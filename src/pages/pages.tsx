import { PAGES_PATHS } from 'common/constants/constant'
import { Login } from 'features/auth/components/login/login'
import { Dashboard } from 'features/dashboard/components/dashboard/dashboard'
import { Requests } from 'features/requests/components/requests/requests'
import { Settings } from 'features/settings/components/settings/settings'
import { Specialization } from 'features/specialization/components/programes/programes'
import { StudentRequest } from 'features/student-request/components/certificate-request'
import { Students } from 'features/students/components/students/students'
import { UserProfile } from 'features/user-profile/components/user-profile/user-profile'
import { LayoutBody } from 'layout/layout-body/layout-body'
import { Route, Routes } from 'react-router-dom'

export const PageRouter = () => {
  return (
    <Routes>
      <Route path={PAGES_PATHS.LOGIN} element={<Login />} />
      <Route path={PAGES_PATHS.STUDENT_REQUEST} element={<StudentRequest />} />
      <Route element={<LayoutBody />}>
        <Route path={PAGES_PATHS.DASHBOARD} element={<Dashboard />} />
        <Route path={PAGES_PATHS.SPECIALIZATION} element={<Specialization />} />
        <Route path={PAGES_PATHS.STUDENT} element={<Students />} />
        <Route path={PAGES_PATHS.REQUESTS} element={<Requests />} />
        <Route path={PAGES_PATHS.SETTINGS} element={<Settings />} />
        <Route path={PAGES_PATHS.PROFILE} element={<UserProfile />} />
      </Route>
    </Routes>
  )
}
