import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../containers/Home'
import { Admin, ForgotPass, Login, ResetPass } from '../containers'
import PrivateRoutes from './private-routes'
import Path from '../constants/Path'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adm-login" element={<Login />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
        <Route path="/resetpass/:token" element={<ResetPass />} />

        <Route element={<PrivateRoutes />}>
          <Route path={Path.projList} element={<Admin />} />
          <Route path={Path.projCreate} element={<Admin />} />
          <Route path={Path.projUpdate} element={<Admin />} />
          <Route path={Path.catList} element={<Admin />} />
          <Route path={Path.catCreate} element={<Admin />} />
          <Route path={Path.catUpdate} element={<Admin />} />
          <Route path={Path.userUpdate} element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
