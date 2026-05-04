import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoutes() {
  const userInfo = localStorage.getItem('portifolio:userData')

  if (!userInfo) {
    return <Navigate to="/adm-login" />
  }

  return (
    <>
      <Outlet />
    </>
  )
}

export default PrivateRoutes
