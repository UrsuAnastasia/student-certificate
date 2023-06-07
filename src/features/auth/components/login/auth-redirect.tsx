import { Navigate, useLocation } from 'react-router-dom'

export const OauthRedirect: React.FC<any> = (...props) => {
  const location = useLocation()
  if (location.pathname === 'http://localhost:8080/users') {
  }
  return <Navigate to={'/'} state={{ location }} replace />
}
