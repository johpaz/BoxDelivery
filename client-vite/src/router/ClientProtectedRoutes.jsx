import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoutes () {
  const userSession = JSON.parse(window.localStorage.getItem("session"))

  if (!userSession) {
    return <Navigate to='/userLogin' />
  }

  if (!userSession.success || userSession.userType !== 'cliente') {
    return <Navigate to='/' />
  }

  return (
    <Outlet />
  )
}