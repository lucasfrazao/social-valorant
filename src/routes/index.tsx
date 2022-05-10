import { Routes, Route, Navigate } from 'react-router-dom'
import GameInfo from '../views/GameInfo'
import Home from '../views/Home'
import MapsInfo from '../views/MapsInfo'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/general" element={<GameInfo />} />
      <Route path="/maps" element={<MapsInfo />} />
    </Routes>
  )
}
