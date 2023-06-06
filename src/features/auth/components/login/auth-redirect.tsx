import { Navigate, useLocation } from 'react-router-dom'

export const OauthRedirect: React.FC<any> = (...props) => {
  const location = useLocation()
  console.log('location.pathname', location.pathname)
  if (location.pathname === 'http://localhost:8080/users') {
    console.log('location.pathname', location.pathname)
  }
  return <Navigate to={'/'} state={{ location }} replace />
}
