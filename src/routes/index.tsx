import { Routes, Route, Navigate } from 'react-router-dom'
import AgentsInfo from '../views/AgentsInfo'
import Home from '../views/Home'
import Login from '../views/Login'
import MapsInfo from '../views/MapsInfo'
import WeaponsInfo from '../views/WeaponsInfo'
import PageNotFound from '../views/PageNotFound'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/maps" element={<MapsInfo />} />
      <Route path="/agents" element={<AgentsInfo />} />
      <Route path="/weapons" element={<WeaponsInfo />} />
      <Route path="/page-not-found" element={<PageNotFound />} />
    </Routes>
  )
}
