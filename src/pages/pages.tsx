import { PAGES_PATHS } from 'common/constants/constant'
import { Login } from 'features/auth/components/login/login'
import { Dashboard } from 'features/dashboard/components/dashboard/dashboard'
import { Specialization } from 'features/specialization/components/specialization'
import { StudentRequest } from 'features/student-request/components/student-request'
import { Students } from 'features/students/components/students4/students'
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
      </Route>
    </Routes>
  )
}
