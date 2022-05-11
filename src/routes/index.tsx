import { Routes, Route, Navigate } from 'react-router-dom'
import Agents from '../views/Agents'
import InfoAgent from '../views/Agents/InfoAgent'
import Home from '../views/Home'
import Login from '../views/Login'
import Maps from '../views/Maps'
import Weapons from '../views/Weapons'
import PageNotFound from '../views/PageNotFound'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/maps" element={<Maps />} />
      <Route path="/agents" element={<Agents />} />
      <Route path="/agents/:uuid" element={<InfoAgent />} />
      <Route path="/weapons" element={<Weapons />} />
      <Route path="/page-not-found" element={<PageNotFound />} />
    </Routes>
  )
}
